"use client"
import Avatar from "@/components/Avatar/page";

const NoDataFound = () => {
    return (
        <>
            <section>
                <div className="flex items-center justify-center h-[80vh]">
                    <Avatar path={"/images/nodatafound.svg"} className="w-[400px] xss:w-full" />
                </div>
            </section>
        </>
    );
};
export default NoDataFound;
