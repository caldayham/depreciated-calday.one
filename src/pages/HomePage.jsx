import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TitledImage from "../components/TitledImage";
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
      <h1>Welcome to Cal's primary public index, <br/>calday.one</h1>
      <p style={{paddingTop: '10px'}}>The goal of calday.one is to be an effective pointer in queries about Cal. 
      <br/> 
      This is the front end of the associated web app, but calday.one will encompass my other lines of communication and dns.
      <br/>
      Like all aspects of myself, it will continue to improve.
      </p>
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
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", paddingBottom: "10px" }}>
        <TitledImage imgLink={"/image-assets/mum-dad-cal.jpg"} title={"2001"} />
        <TitledImage imgLink={"/image-assets/dad-cal.jpg"} title={"2003"} />
        <TitledImage imgLink={"/image-assets/cal-fynn.jpg"} title={"2010"} />
        <TitledImage imgLink={"/image-assets/baby-chick.jpg"} title={"2014"} />
        <TitledImage imgLink={"/image-assets/cal-rattlesnake-cooper.jpg"} title={"2017"} />
        <TitledImage imgLink={"/image-assets/fam-at-beach.jpg"} title={"2020"} />
        <TitledImage imgLink={"/image-assets/cal-felix.jpg"} title={"2022"} />
      </div>

      <PageDivider style={{marginBottom: "20px"}}/>

      <p>Hi, my name is Cal, short for Callum Day Ham, calday.one, and caldayone (legal, dns, other).</p>
      <p style={{ paddingBottom: "20px" }}>Thank you for visiting.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <p>
          <b>Quick location history: </b> 
          <br />
          born in Guelph Ontario, Canada, moved
          to California when I was one, moved to Minnesota when I was 17, I am
          now back in California.
        </p>
        <p>
          <b>Quick interests history: </b>
          <br />
          As a baby / child I was facinated by animals, 
          especially bugs. As a young adult that interest in animals stayed but often in the context
          of farming, I also enjoyed welding and weight lifting. In university, surgery was
          the interest, and various athletic endevours. As of late I am interesed in
          manufacturing, business (scaled problem solving), leadership (building an effective team), and physical
          health and ability.
        </p>
        <p>
          <b>Quick struggles history: </b> 
          <br />
          I am very greateful to have found and been exposed to many 
          amazing people and subjects, although for the majority of my young-adult life I struggled with depression to the point of self harm.
          In recent years I still find myself discussing such thoughts but have adopted an actionable and optimistic
          perspective. I never want to prescribe or pass judgement on mental illness, that said, what I delt with was "solved" quite easily 
          with perspective, understanding, and actionable optimism. You are what you believe and know. This is one of the primary reasons for my obssessive 
          drive for understanding. On the whole I very much enjoy life. Like many I have also struggled with addiction. 
          I will speak more about this <u>here</u>. 
          Thankfully as of early 2021 I no longer rely on such vices.
        </p>
        <p>
          <b>My values:</b>
          <br />
          understanding, efficiency, action, optimisim,
          connection
        </p>
      </div>
    </PrimaryContainer>
  );
};

export default HomePage;
