import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrimaryContainer } from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

const Page404 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("page404"));
    };
    updatePage();
  });

  return (
    <PrimaryContainer>
      <h1>
        Error 404 <br />
        Page Not Found
      </h1>
    </PrimaryContainer>
  );
};

export default Page404;
