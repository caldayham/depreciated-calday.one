import React, { useEffect, useState } from "react";
import {
  PageDivider,
  PrimaryContainer,
  SubTitle,
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
        height="160px"
      >
        <ToggleCollapseTitle open={open}>Before Contacting</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            Please use the route best specified for the type of inquiry
            you plan to send, unless you think I will be amused, although the
            consequences for incorect judgement are extreme and merciless.
            <br /> 
            You can also click on the icons (top right) to go to external websites
            where I maintain a presence.
            <br/>
            <br/>
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>

      <PageDivider />

      <SubTitle>Personal</SubTitle>
      (regular) caldayham@gmail.com <br/>
      text (650) 521-7269 <br/>
      <a href="https://www.linkedin.com/in/caldayham/" style={{color: "white"}} target="_blank" rel="noreferrer">LinkedIn DM</a>
      <br />
      (secure *must be <u>signed</u>*) cal@caldayham.com 


      <SubTitle>Print Scientific Business</SubTitle>
      cal@printscientific.com <br/>
      support@printscientific.com 
      <SubTitle>Ledges Business</SubTitle>
      cal@ledges.io <br/>
      support@ledges.io
      <SubTitle>FP Capital & Marus Group Business</SubTitle>
      cal@marusgroup.com <br/>
      support@marusgroup.com
      <SubTitle>Other Business</SubTitle>
      use one of the personal routes
    </PrimaryContainer>
  );
};

export default ContactPage;
