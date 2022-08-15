import React, { useEffect, useState } from "react";
import {
  PrimaryContainer,
  ToggleCollapse,
  ToggleCollapseBody,
  ToggleCollapseTitle,
} from "../globalstyles";

import { useDispatch } from "react-redux";
import { changePage } from "../redux/currentPageRedux";

const ActionsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("actions"));
    };
    updatePage();
  });

  const [open, setOpen] = useState(false);

  return (
    <PrimaryContainer>
      <h1>Actions</h1>

      <ToggleCollapse
        onClick={() => setOpen((prev) => !prev)}
        open={open}
        height="200px"
      >
        <ToggleCollapseTitle open={open}>Page Thoughts</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            I am defining "actions" as things I did to my environment.
            <br /> An obvious example of an action under this definition would
            be an item about me applying to college.
            <br /> A not so obvious example would be an item about my animal
            farming escapades. Projects are things I did to my environment.
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>
    </PrimaryContainer>
  );
};

export default ActionsPage;
