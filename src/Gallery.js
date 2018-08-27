import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
 import Slide from "./Slide";
export default class Gallery extends React.Component {
  render() {
    return (
      // <div>
      //   <Carousel elementWidthMobile={100}>
      //     <div
      //       style={{ width: "100%", height: "300px", backgroundColor: "red" }}
      //     />
      //     <div
      //       style={{
      //         width: "100%",
      //         height: "300px",
      //         backgroundColor: "yellow"
      //       }}
      //     />
      //     <div
      //       style={{ width: "100%", height: "300px", backgroundColor: "black" }}
      //     />
      //      <div
      //       style={{ width: "100%", height: "300px", backgroundColor: "pink" }}
      //     />
      //      <div
      //       style={{ width: "100%", height: "300px", backgroundColor: "blue" }}
      //     />
      //   </Carousel>
      // </div>
      <Slide>
        <div
          style={{ width: "100%", height: "300px", backgroundColor: "red" }}
        />
        <div
          style={{ width: "100%", height: "300px", backgroundColor: "yellow" }}
        />
        <div
          style={{ width: "100%", height: "300px", backgroundColor: "black" }}
        />
      </Slide>
    );
  }
}
