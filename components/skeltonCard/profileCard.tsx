import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


export const SkeletonCard = () => {
    return (
      <>
        <div className="bg-white dark:bg-[#232323] px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-[100%] mobileView:w-[100%] rounded-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-black dark:text-white font-['Poppins'] text-xl xs:text-xl xxs:text-base mb-5">
          Edit Profile
        </h1>
      </div>
      <form className="w-full">
        <div className="mb-7">
        </div>
        <div className="mb-7 relative">
        <Skeleton height={40} />
        </div>
        <div className="mb-7 relative">
        <Skeleton height={40} />
        </div>
        <div className="mb-7 relative ">
        <Skeleton height={40} />
        </div>
        <div className="mb-7">
          <div>
          <Skeleton height={40} />
          </div>
          <div className="text-black dark:text-white font-['Poppins'] inline-flex flex-wrap">
          <Skeleton height={40} />
          </div>
        </div>
        <div className="border border-black dark:border-white pb-1 rounded-xl mt-3 xxxs:w-full">
        <Skeleton height={40} />

        </div>
      </form>
    </div>
    
      </>
    );
  };
  