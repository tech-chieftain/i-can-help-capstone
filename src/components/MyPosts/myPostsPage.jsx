import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import UpperSection from "../Profile/UpperSection/UpperSection";
import ProfilePost from "../ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./myPostsPage.styled";
import Layout from "../Layout/Layout";

import DataContext from "../../Utilities/Contexts/DataContext";

function MyPostsPage({ myPosts }) {
  const { userData } = useContext(DataContext);
  const { t } = useTranslation("myPosts");
  return (
    <div style={{ paddingBlock: "50px" }}>
      <ProfileSection>
        <UpperSection />
      </ProfileSection>

      <PostsContainer>
        <h3 className="my-post-title">{t("myPosts")}</h3>
        <div className="posts">
          {myPosts && myPosts?.map((post) => <ProfilePost data={{ userData, post }} />)}
        </div>
      </PostsContainer>
    </div>
  );
}

export default MyPostsPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer", "navbar", "myPosts"])),
  },
});
