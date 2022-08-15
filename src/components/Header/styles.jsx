import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const Container = styled.div`
  background: rgb(0, 0, 0);
  display: flex;
  border-bottom: 1px solid rgb(40, 40, 40);
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;

  gap: 10px;
`;

export const HeaderLink = styled(Link)`
  border: ${(props) =>
    useSelector((state) => state.currentPage.page) === props.thispage
      ? "1px solid rgb(255, 255, 255)"
      : "1px solid rgb(40, 40, 40)"};
  color: ${(props) =>
    useSelector((state) => state.currentPage.page) === props.thispage
      ? "rgb(255, 255, 255)"
      : "rgb(200, 200, 200)"};

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(14, 14, 14);
  height: 40px;
  border-radius: 10px;
  font-size: 22px;
  text-decoration: none;

  min-width: ${(props) => (props.type === "square" ? "40px" : "200px")};
  flex: ${(props) => (props.type === "square" ? "null" : "1")};

  transition: all 0.2s ease;
  &:hover {
    border: 1px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
  }
`;

export const HeaderBox = styled.div`
  border: ${(props) =>
    useSelector((state) => state.currentPage.page) === props.thispage
      ? "1px solid rgb(255, 255, 255)"
      : "1px solid rgb(40, 40, 40)"};
  color: ${(props) =>
    useSelector((state) => state.currentPage.page) === props.thispage
      ? "rgb(255, 255, 255)"
      : "rgb(200, 200, 200)"};

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(14, 14, 14);
  height: 40px;
  border-radius: 10px;
  font-size: 22px;
  text-decoration: none;
  min-width: 200px;
  flex: 1;

  transition: all 0.2s ease;
  &:hover {
    border: 1px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
  }
`;

export const Div1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  padding-left: 20px;
`;
export const Div2 = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;

  padding-right: 20px;
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
`;

// Social Icons

export const SocialIcons = styled.a`
  display: flex;
  color: rgb(200, 200, 200);
  width: 30px;
  align-items: center;
  justify-content: center;
  z-index: 2;

  transition: all 0.1s ease;
  &:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
