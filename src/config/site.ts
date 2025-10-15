import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://www.gautamsharma.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blogs",
    href: "/blog",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const GITHUB_USERNAME = "GautamSharmaaa";
export const SOURCE_CODE_GITHUB_REPO = "ncdai/chanhdai.com"; // change it 
export const SOURCE_CODE_GITHUB_URL = "https://github.com/GautamSharmaaa";

export const UTM_PARAMS = {
  utm_source: "www.gautamsharma.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
