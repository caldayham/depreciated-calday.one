import React, { useEffect, useState } from "react";
import {
  PrimaryContainer,
  ToggleCollapse,
  ToggleCollapseBody,
  ToggleCollapseTitle,
} from "../globalstyles";

import { useDispatch } from "react-redux";
import { changePage } from "../redux/currentPageRedux";

const ContactPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("contact"));
    };
    updatePage();
  });

  const [open, setOpen] = useState(false);

  return (
    <PrimaryContainer>
      <h1>Contact</h1>

      <ToggleCollapse
        onClick={() => setOpen((prev) => !prev)}
        open={open}
        height="200px"
      >
        <ToggleCollapseTitle open={open}>Page Thoughts</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            Here is where I will post the best ways to contact me based on what
            you are looking for.
            <br /> Please use the route best specified for the type of inquiry
            you plan to send, unless you think I will be amused, although the
            consequences for incorect judgement are extreme and merciless.
            <br /> You can also click on the icons to go to external websites
            where I maintain a presence.
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>
    </PrimaryContainer>
  );
};

export default ContactPage;
