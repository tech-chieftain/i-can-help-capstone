import styled from "styled-components";
import { Col } from "antd";

export const FooterSty = styled.footer`
  width: 100%;
  color: #fafaff;
  background-color: #1c1256;
  padding: 65px 165px;
  bottom: 0;

  .a-no-style {
    text-decoration: none;
    color: inherit;
  }

  .a-no-style:hover {
    opacity: 0.8;
  }

  .menu-div {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 992px) {
    padding: 2rem;
  }
`;

export const LogoSty = styled.h1`
  color: #fafaff;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const FooterParaSty = styled.p`
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

export const SMWrapperSty = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

export const SMIconSty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(250, 250, 255, 0.1);
  border-radius: 50%;
  margin-right: 0.75rem;
  font-size: 20px;
`;

export const FooterH2Sty = styled.h2`
  font-size: 24px;
  color: #fafaff;
  margin-bottom: 1.5rem;
`;

export const Ul = styled.ul`
  list-style-type: none;
  font-size: 16px;
  padding-left: 0;
`;

export const Li = styled.li`
  margin-bottom: 0.75rem;
`;

export const InputDivSty = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputSty = styled.input`
  width: 210px;
  height: 40px;
  background-color: rgba(250, 250, 255, 0.1);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 0;
  padding-left: 10px;
`;

export const InputIconSty = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(250, 250, 255, 0.1);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 0;
  font-size: 20px;
`;
