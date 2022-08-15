import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  PageDivider,
  PrimaryContainer,
  SubTitle,
  ToggleCollapse,
  ToggleCollapseBody,
  ToggleCollapseTitle,
} from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("home"));
    };
    updatePage();
  });

  const [open, setOpen] = useState(false);

  return (
    <PrimaryContainer>
      <h1>Welcome to my public database ui!</h1>
      <ToggleCollapse
        onClick={() => setOpen((prev) => !prev)}
        open={open}
        height="420px"
      >
        <ToggleCollapseTitle open={open}>Page Thoughts</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            This sites primary purpose is to organize my public data accessibly.
            <br />I really appreciate when people who do interesting things
            share their data. It helps me understand how they got there and why.
            <br />I do things I find interesting, so maybe other people will too
            and appreciate this resource.
            <br />
            At the very least I think it's a good thing to take charge of your
            online data and <i>truly</i> own the means of distribution. Your
            hardware, your software, not just AWS and instagram. I know you must
            choose your battles, this is one I enjoy.
            <br />
            <br />
            Finally, be slow to judgement and eager to understand, this applies
            both to my "hot" takes/actions and to my misspelling of words.
            <br />
            (if you see something just make a pull request on github, I will be
            very appreciative).
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>
      <PageDivider />

      <SubTitle>Introduction</SubTitle>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <img
          src="/image-assets/mum-dad-cal.jpg"
          alt="cal day ham"
          style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}
        />
        <img
          src="/image-assets/dad-cal.jpg"
          alt="cal day ham"
          style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}
        />
        <img
          src="/image-assets/cal-fynn.jpg"
          alt="cal day ham"
          style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}
        />
        <img
          src="/image-assets/baby-chick.jpg"
          alt="cal day ham"
          style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}
        />
        <img
          src="/image-assets/cal-rattlesnake-cooper.jpg"
          alt="cal day ham"
          style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}
        />
        <img
          src="/image-assets/fam-at-beach.jpg"
          alt="cal day ham"
          style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}
        />
        <img
          src="/image-assets/cal-felix.jpg"
          alt="cal day ham"
          style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}
        />
      </div>
      <p>Hi, my name is Cal, short for Callum Day Ham.</p>
      <p style={{ paddingBottom: "20px" }}>Thank you for visiting.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <p>
          <b>Quick location history: </b> born in Guelph Ontario, Canada, moved
          to California when I was one, moved to Minnesota when I was 17, I am
          now back in California.
        </p>
        <p>
          <b>Quick interests history: </b> as a baby / child, animals
          (especially bugs), as a young adult animals but often in the context
          of farming, also welding and weight lifting. In university surgery was
          the interest, and various athletic endevours. Now I am interesed in
          manufacturing, business (scaled problem solving), leadership, and
          health.
        </p>
        <p>
          <b>Quick struggles history: </b> I have worked with depression since I
          was 12, I have dipped low but I find many high points in life. On the
          whole I very much enjoy life. Like many I have struggled with porn
          adiction. I will speak more about this <u>here</u> but the short is:
          just don't watch that shit, it's bad drugs, it duls and wastes, sex
          and masturbation have my full support though :p
        </p>
        <p>
          <b>My values:</b> understanding, efficiency, action, optimisim,
          connection.
        </p>
      </div>
    </PrimaryContainer>
  );
};

export default HomePage;
