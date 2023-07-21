import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";

const OrLine = () => {
  return (
    <div className="flex items-center justify-center mb-7">
      <Avatar path={"/images/linestroke.svg"} className="w-[40%]" />
      <h3 className="text-white dark:text-black text-center text-xl font-['Poppins'] w-[10%]">
        OR
      </h3>
      <Avatar path={"/images/linestroke.svg"} className="w-[40%] rotate-180" />
    </div>
  );
};
export default OrLine;
