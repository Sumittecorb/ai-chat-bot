import "../../globals.css";
import Header from "@/components/Header/page";
import { Fragment } from "react";


export const metadata = {
  title: "AI Chat Bot",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
