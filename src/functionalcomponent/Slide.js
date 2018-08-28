import React from "react";
import PropTypes from "prop-types";
import GestureDetector from "./GestureDetector";
import styles from "./Slide.module.css";
import SlideGallery from "./SlideGallery";
export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: this.props.position ? this.props.position : 0
    };
  }
  toLeft = () => {
    if (this.state.position < this.props.children.length - 1) {
      const position = this.state.position + 1;
      this.setState({ position: position });
    }
  };
  toRight = () => {
    if (this.state.position > 0) {
      const position = this.state.position - 1;
      this.setState({ position: position });
    }
  };
  onForward=()=>{
      this.toRight()
  }
  onBackWard=()=>{
      this.toLeft()
  }
  render() {
    return (
        <React.Fragment>
        <div className={styles.base}>
        <div className={styles.leftArrow}  onClick={()=>this.onForward()}></div>
        <div className={styles.rightArrow} onClick={()=>this.onBackWard()}></div>
       
      <GestureDetector
        toLeft={this.toLeft}
        toRight={this.toRight}
        render={touch => (
           
          <SlideGallery
            position={this.state.position}
          
          >
            {this.props.children}
          </SlideGallery>
          
        )}
      />
       </div>
     </React.Fragment>
    );
  }
}
