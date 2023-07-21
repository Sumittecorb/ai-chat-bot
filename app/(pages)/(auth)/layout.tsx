import { Fragment } from "react";
import "../../globals.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fragment>{children}</Fragment>;
}
