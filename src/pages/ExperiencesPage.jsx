import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  PrimaryContainer,
  ToggleCollapse,
  ToggleCollapseBody,
  ToggleCollapseTitle,
} from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

const ExperiencesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("experiences"));
    };
    updatePage();
  });

  const [open, setOpen] = useState(false);

  return (
    <PrimaryContainer>
      <h1>Experiences</h1>
      <ToggleCollapse
        onClick={() => setOpen((prev) => !prev)}
        open={open}
        height="200px"
      >
        <ToggleCollapseTitle open={open}>Page Thoughts</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            I am defining "experiences" as things my environment did to me.
            <br /> An obvious example of an experience under this definition
            would be an item about me recieving college decision letters.
            <br /> I cannot yet think of an irregular item for this definition,
            it is a fairly colloquial one.
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>
    </PrimaryContainer>
  );
};

export default ExperiencesPage;
