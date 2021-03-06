import styled from "styled-components";

export const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 2rem;
  padding: 0 15rem;

  .my-post-title {
    color: #1c1259;
    font-weight: 700;
    font-size: 2rem;
  }

  .posts {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    flex: 1 1 auto;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 6.5rem;
    .posts {
      justify-content: start;
    }
  }
`;
