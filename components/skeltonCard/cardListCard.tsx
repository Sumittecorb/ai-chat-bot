import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCardList = () => {
  return (
    <>
      <div className="card bg-slate-700 rounded-xl p-3 mt-4">
        <label
          htmlFor="cards"
          className="flex items-center cursor-pointer py-2 px-2 relative"
        >
          <input
            type="radio"
            id="cards"
            value="cards"
            className="hidden peer"
          />
          {/* <Skeleton height={20} /> */}
          <div className="flex items-center ">
            <div className="ml-4 font-['Poppins'] ">
              <h3 className="ml-3 text-black dark:text-white ">
                <Skeleton height={20} width={100} />
              </h3>
              <small className="ml-3 text-black dark:text-white">
                <Skeleton height={20} width={100} />
              </small>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};
