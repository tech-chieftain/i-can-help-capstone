import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import WelcomePage from "./welcome";
import MyPostsPage from "./myPosts/myPostsPage";

function Homepage() {
  // This controls the direction of the page for RTL languages
  const { t } = useTranslation("common");

  return <MyPostsPage />;
}

// This function below should exist in everypage
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
