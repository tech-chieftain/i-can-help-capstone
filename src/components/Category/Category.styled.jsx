import styled from "styled-components";

export const CategoryStyle = styled.div`
  padding: 1rem 5%;
  margin: 0 auto;
  height: 900px;
  .col {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 6%;
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    margin-left: 6%;
    font-weight: 900;
    font-size: 48px;
    line-height: 64px;
    color: #1c1259;
  }

  .btn {
    width: 137px;
    height: 30px;
    background-color: #ffffff;
    border: none;
    color: #1c1259;
    margin-left: 40rem;
  }
  .icon {
    height: 17.5px;
    width: 26.583627700805664px;
    margin: 4%;
    color: #1c1259;
  }

  @media only screen and (max-width: 860px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: 0 auto;
    }
  }
`;

export const CategoryListStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 1000px;

  @media screen and (max-width: 784px) {
    justify-content: center;
    align-items: center;
    height: 800px;
  }
`;

export const CustomCategoryStyle = styled.div`
  width: 50%;
  margin-right: 5%;
  margin-bottom: 10px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 300px;

    @media screen and (max-width: 784px) {
      height: 200px;
    }
    border-radius: 8px;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;

    @media screen and (max-width: 1000px) {
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      font-size: 14px;
      line-height: 20px;
    }

    font-feature-settings: "salt" on, "liga" off;
    color: #1c1259;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px;
  }
`;
