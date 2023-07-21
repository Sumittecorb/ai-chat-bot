import Link from "next/link";
import { FC } from "react";
export const ListNavigation: FC<{
  children?: React.ReactNode;
  liClass?: string;
  path: string;
  name?: string;
  linkClass?: string;
}> = ({ name, path, liClass, children, linkClass }) => {
  return (
    <>
      <li className={liClass}>
        <Link className={linkClass} href={path}>
          {children}
          {name}
        </Link>
      </li>
    </>
  );
};

export const Navigation: FC<{
  children?: React.ReactNode;
  path: string;
  name?: string;
  linkClass?: string;
}> = ({ name, path, children, linkClass }) => {
  return (
    <>
      <Link className={linkClass} href={path}>
        {children}
        {name}
      </Link>
    </>
  );
};
