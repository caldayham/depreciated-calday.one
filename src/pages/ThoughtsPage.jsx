import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  PrimaryContainer,
  ToggleCollapse,
  ToggleCollapseBody,
  ToggleCollapseTitle,
} from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

import { thoughtsPosts } from "../posts/thoughts-posts/finance";

const ThoughtsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("thoughts"));
    };
    updatePage();
  });

  const [open, setOpen] = useState(false);

  return (
    <PrimaryContainer>
      <h1>Thoughts</h1>
      <ToggleCollapse
        onClick={() => setOpen((prev) => !prev)}
        open={open}
        height="200px"
      >
        <ToggleCollapseTitle open={open}>Page Thoughts</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            "Thoughts" are very similar to "actions" but they never come to
            fruition, sometimes they don't even need an actionable component.
            <br /> Every action is born from a thought.
            <br /> Every thought is born from an experience.
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>

      {thoughtsPosts.map((post) => (
        <div key={post.id} style={{paddingTop: "40px"}}>
         <img src={post.img} alt={post.imgAlt}/>
         <h3>{post.title}</h3>
         <p>{post.content}</p>
        </div>
      ))}
    </PrimaryContainer>
  );
};

export default ThoughtsPage;
