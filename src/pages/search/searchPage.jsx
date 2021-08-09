
import React, { useContext, useEffect, useState } from "react";
import { useTranslation, appWithTranslation, i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Post from "../../components/Post/Post";
import PostFiltering from "../../components/PostFiltering/PostFiltering";
import { SearchContainer } from "./searchPage.styled";
import Layout from "../../components/Layout/Layout";
import DataContext from "../../Utilities/Contexts/DataContext";
import { useRouter } from "next/router";

function SearchPage() {

  const { t } = useTranslation("search");

  const { query } = useRouter();
  const { posts } = useContext(DataContext);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  useEffect(() => setFilteredPosts(posts), [posts]);
  
  useEffect(() => {
    if (query.q && posts.length > 0) {
      console.log({ posts });
      let queryPosts = posts.map((post) => {
        const foundPost = Object.values(post.data()).find((value) => {
          console.log({
            value: value
              ?.toString()
              .toLowerCase()
              .includes(query.q.toLowerCase()),
            value1: value,
            value2: query.q.toString(),
          });
          return value
            ?.toString()
            .toLowerCase()
            .includes(query.q.toLowerCase());
        });

        console.log({ foundPost });

        if (foundPost !== undefined) return post;
      });

      //remove all undefined from array
      queryPosts = queryPosts.filter((post) => post !== undefined);

      console.log(queryPosts);

      setFilteredPosts(queryPosts);
    }
  }, [query, posts]);

  return (
    <Layout>
      <SearchContainer>
        <div className="filter-section">
          <h2 className="title">{t("filterBy")}...</h2>
          <PostFiltering
            setFilteredPosts={setFilteredPosts}
            posts={posts}
            type={query?.type}
          />
        </div>
        <div className="post-section">
          <h2 className="title">{t("searchRes")}...</h2>
          {filteredPosts.map((post) => (
            <Post data={{ ...post?.data(), id: post.id }} />
          ))}
        </div>
      </SearchContainer>
    </Layout>
  );
}

export default SearchPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["search", "common"])),
  },
});
