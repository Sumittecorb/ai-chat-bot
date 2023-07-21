import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonPaymentCard = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#232323] px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-[100%] mobileView:w-[100%] rounded-2xl">
        <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xss:text-md mb-5">
          Payment History
        </h1>
        <div className="py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal whitespace-nowrap">
              <thead className="bg-[#b9bcb56b] dark:bg-[#343734]">
                <tr>
                  <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white  tracking-wider">
                    Invoice Id
                  </th>
                  <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                    Amount
                  </th>
                  <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                    Mode
                  </th>
                  <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                    Date
                  </th>
                  <th className="px-5 py-3 text-left text-md font-semibold text-black dark:text-white tracking-wider">
                    Sub.. Type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                </tr><tr>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                </tr><tr>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                </tr><tr>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                  <td className="px-5 py-5 text-md text-black dark:text-white ">
                    <Skeleton height={20} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Skeleton height={20} />
        </div>
      </div>{" "}
    </>
  );
};
