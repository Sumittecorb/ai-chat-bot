"use client";
import { Routes } from "@/components/Routes";
import ThemeToggle from "@/components/ThemeToggle/page";
import { SESSION_TOKEN } from "@/components/common/constant";
import { getCook } from "@/components/helper/cookies_setup";
import ChatAssistance from "@/pages/LandingPage/ChatAssistance";
import Introduction from "@/pages/LandingPage/Introduction";
import SubscriptionSec from "@/pages/LandingPage/Subscription";
import useDarkMode from "@/utils/useDarkMode";
import { useTheme } from "next-themes";
import Router from "next/router";
import { Fragment, useEffect } from "react";

export default function Home() {

  return (
    <Fragment>
      <Introduction />
      <SubscriptionSec />
      <ChatAssistance />
    </Fragment>
  );
}

