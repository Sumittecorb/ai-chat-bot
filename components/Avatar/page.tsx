import Image from "next/image";
import { FC } from "react";

const Avatar: FC<{ className?: string; path: string }> = ({
  className,
  path,
}) => {
  return (
    <Image src={path} className={className} alt="" width={100} height={100} />
  );
};

export default Avatar;
