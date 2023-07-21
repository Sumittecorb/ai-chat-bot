"use client";
import Avatar from "@/components/Avatar/page";
import { ImagePath } from "@/components/Images/page";
import { SESSION_TOKEN } from "@/components/common/constant";
import { getCook } from "@/components/helper/cookies_setup";
import {
  cardDeleteService,
  cardListService,
} from "@/components/helper/services/cardService";
import { SkeletonCardList } from "@/components/skeltonCard/cardListCard";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const CardList: FC<{
  cardList: any;
  setList: any;
  selectedCardId?: any;
  setSelectedCardId?: any;
}> = ({ cardList, setList, selectedCardId, setSelectedCardId }) => {
  const [isLoading, setLoading] = useState(true);
  let skeletonCards = Array(1).fill(2);
  const pathname = usePathname();
  useEffect(() => {
    cardListData();
  }, []);

  const cardListData = async () => {
    let session_token = getCook(SESSION_TOKEN);
    const res = await cardListService(session_token);
    if (res.code == 200) {
      setList(res.data.data);
      setSelectedCardId && setSelectedCardId(res.data?.data[0]?.id);
      setLoading(false);
    }
  };
  const deleteCard = async (id: any) => {
    const res = await cardDeleteService({ cardId: id });
    let updatedList = cardList.filter((data: any) => data.id !== id);
    if (res.code == 200) {
      setList(updatedList);
    }
  };
  return (
    <>
      {isLoading
        ? skeletonCards.map((index: number) => <SkeletonCardList key={index} />)
        : cardList.map((list: any, index: number) => {
            let { last4, exp_year, exp_month, id } = list;
            return (
              <>
                <div className="flex items-center ">
                  <div
                    className="w-[94%] card bg-white dark:bg-slate-700 border-2 dark:border-none border-[#ccc] rounded-xl p-3 mt-4 xxxs:p-1"
                    onClick={() => {
                      setSelectedCardId(id);
                    }}
                  >
                    <label
                      htmlFor={id}
                      className="flex items-center cursor-pointer py-2 px-2 xxxs:px-0 relative"
                    >
                      <input
                        type="radio"
                        id={id}
                        className="hidden peer"
                        checked={id === selectedCardId}
                        name="ch1"
                      />
                      {pathname == "/payment" && (
                        <>
                          <Avatar
                            path={ImagePath.selectRadio}
                            className="absolute right-3 xxxs:right-1 w-7 xxxs:w-5 hidden peer-checked:block "
                          />
                          <Avatar
                            path={ImagePath.unSelectRadio}
                            className="absolute right-3 xxxs:right-1 w-7 xxxs:w-5 block peer-checked:hidden"
                          />
                        </>
                      )}{" "}
                      <div className="flex items-center ">
                        <img
                          src={ImagePath.CardIcon}
                          className="xxxs:w-[30px]"
                        />
                        <div className="ml-4 font-['Poppins'] xxxs:ml-2 ">
                          <h3 className="ml-3 text-black dark:text-white xxxs:text-[13px]">
                            XXXX XXXX {last4}
                          </h3>
                          <small className="ml-3 text-black dark:text-white xxxs:text-[10px]">
                            {exp_month}/{exp_year}
                          </small>
                        </div>
                      </div>
                    </label>
                  </div>
                  {pathname !== "/payment" && (
                    <div
                      className="ml-3"
                      onClick={() => {
                        deleteCard(id);
                      }}
                    >
                      <Avatar
                        path={ImagePath.DeleteIcon}
                        className="w-7 cursor-pointer"
                      />
                    </div>
                  )}{" "}
                </div>
              </>
            );
          })}
    </>
  );
};

export default CardList;
