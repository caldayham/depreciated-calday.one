import React, { useEffect, useState } from "react";
import {
  PrimaryContainer,
  ToggleCollapse,
  ToggleCollapseBody,
  ToggleCollapseTitle,
} from "../globalstyles";

import { useDispatch } from "react-redux";
import { changePage } from "../redux/currentPageRedux";

const LibraryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("library"));
    };
    updatePage();
  });

  const [open, setOpen] = useState(false);

  return (
    <PrimaryContainer>
      <h1>Library</h1>
      <ToggleCollapse
        onClick={() => setOpen((prev) => !prev)}
        open={open}
        height="540px"
      >
        <ToggleCollapseTitle open={open}>Page Thoughts</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            My hope is that this system of "actions, thoughts, and experiences"
            allows any piece of data that could ever be linked to myself to fall
            nicely into one of these categories.
            <br /> One way I test this theory is to think of random items and
            then determine if they would fit nicely into one of these three
            categories.
            <br /> So far it has held up nicely -{" "}
            <i>let me know if you think of something though </i>- but let me
            pose a question I asked myself.
            <br /> Where would an image of me dressed up for haloween when I was
            6 go?
            <br /> It could be under actions because I acted on my environment
            to prepare for that haloween, could be thoughts because I'm sure
            there was lots going on in my head when the photo was taken, could
            be experiences because I was being acted upon by my environment.
            <br /> I don't think this is a breaking item, I think, in a perfect
            world, it would be filed, or at least refenced, under each category.
            <br /> That said I am not about to go breaking down every image,
            video, story, or multi-component media that I would like to make
            available here.
            <br /> So things like that will be posted here, in the library.
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>
    </PrimaryContainer>
  );
};

export default LibraryPage;
