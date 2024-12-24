"use client";
import React from "react";
import HomeIcon from "@/assets/svg/home.svg";
import SettingsIcon from "@/assets/svg/settings.svg";
import TutorialIcon from "@/assets/svg/tutorials.svg";
import AffiliateIcon from "@/assets/svg/affiliate.svg";
import DashboardIcon from "@/assets/svg/dashboard.svg";
import KeyIcon from "@/assets/svg/key.svg";
import PayoutIcon from "@/assets/svg/payouts.svg";
import TicketIcon from "@/assets/svg/ticket.svg";
import UploadIcon from "@/assets/svg/uploadVideo.svg";
import VideoIcon from "@/assets/svg/videoHistory.svg";
import SubscriptionIcon from "@/assets/svg/subscriptions.svg";


type SVGIconProps = {
  isActive: boolean;
  activeColor?: string;
  defaultColor?: string;
};
type SideBarType<T> = {
  section: string;
  list?: T;
}[];
type listType = {
  name: string;
  path: string;
  Icon: React.FC<{ className: string }>;
}[];

export const sidebarData: SideBarType<listType> = [
  {
    section: "MAIN MENU",
    list: [
      {
        name: "Home",
        path: "/dashboard-home",
        // tagText: "",
        Icon: HomeIcon,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        // tagText: "",
        Icon: DashboardIcon,
      },
      {
        name: "Keys",
        path: "/keys/active-key",
        // tagText: "",
        Icon: KeyIcon,
      },
      {
        name: "Affiliate",
        path: "/affiliate",
        // tagText: "",
        Icon: AffiliateIcon,
      },
      {
        name: "Subscriptions",
        path: "/subscriptions",
        // tagText: "",
        Icon: SubscriptionIcon,
      },
    ],
  },
  {
    section: "CONTENT AND MANAGEMENT",
    list: [
      {
        // name: "Refunds",
        name: "Upload Video",
        path: "/upload-video",
        // tagText: "",
        Icon: UploadIcon,
      },
      {
        name: "Video History",
        path: "/video-history",
        // tagText: "coming soon",
        Icon: VideoIcon,
      },
      {
        name: "Payouts",
        path: "/payouts",
        // tagText: "new",
        Icon: PayoutIcon,
      },
      {
        name: "Tickets",
        path: "/tickets",
        // tagText: "new",
        Icon: TicketIcon,
      },
      {
        name: "Tutorials",
        path: "/tutorials",
        // tagText: "new",
        Icon: TutorialIcon,
      },
      {
        name: "Settings",
        path: "/settings",
        // tagText: "new",
        Icon: SettingsIcon,
      },
    ],
  },
];
