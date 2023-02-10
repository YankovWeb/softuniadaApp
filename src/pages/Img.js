import React from "react";
import {Outlet} from "react-router-dom";
import ImgGenerator from "../components/ImgGenerator";
const Img = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <ImgGenerator />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Img;
