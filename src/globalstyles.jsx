import { Link } from "react-router-dom";
import styled from "styled-components";

const PrimaryContainer = styled.div`
  height: calc(100vh - 80px);
  padding: 20px;
  margin-top: 80px;
`;

const PrimaryLink = styled(Link)`
  color: rgb(255, 255, 255);
  font-size: 22px;
  text-decoration: none;
`;

const CommandLineInput = styled.textarea`
  position: fixed;
  bottom: 0%;
  width: 100%;
  height: 200px;
  border: 2px solid rgb(100, 100, 100);
  background-color: rgb(40, 40, 40);
  color: white;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const ToggleCollapse = styled.div`
  display: flex;
  flex-direction: column;

  align-items: left;
  border-radius: 10px;
  background-color: rgb(0, 0, 0);
  color: rgb(200, 200, 200);
  border: 1px solid rgb(40, 40, 40);
  margin-top: 20px;
  max-width: ${(props) => (props.open ? "800px" : "200px")};
  height: ${(props) => (props.open ? `${props.height}` : "40px")};

  overflow: hidden;

  transition: all 0.2s ease;
  &:hover {
    border: 1px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const ToggleCollapseTitle = styled.h1`
  font-size: 22px;
  font-weight: 200;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;

  transition: all 0.2s ease;
  border-bottom: ${(props) =>
    props.open ? "1px solid rgb(40, 40, 40)" : "none"};
`;

const ToggleCollapseBody = styled.div`
  padding-left: 10px;
`;

const SubTitle = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 200;
  color: rgb(255, 255, 255);
`;

const PageDivider = styled.div`
  width: calc(100% + 40px);
  border-bottom: 1px solid rgb(40, 40, 40);
  height: 20px;

  margin: 0px 0px 0px -20px;
`;

export {
  PrimaryContainer,
  PrimaryLink,
  CommandLineInput,
  ToggleCollapse,
  ToggleCollapseTitle,
  ToggleCollapseBody,
  SubTitle,
  PageDivider,
};
