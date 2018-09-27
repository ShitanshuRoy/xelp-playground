import React, { Component } from "react";
import styles from "./ViewSwitch.module.css";
import View from "./View"
import ViewSwitcher from "./ViewSwitcher";


class ViewSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
     index: 0
    };
  }

 
  handleIndex = (i) => {
    this.setState({index:i})
  };
  handleView=displayView=>{
    displayView()
  }
  render() {
    
    return (
      
      <div className={styles.ViewSwitcher}>
           <ViewSwitcher
           render={displayViewData=>{
             return(<div className={styles.displayView}>
                <div className={styles.buttonHolder}>
     { this.props.children&&this.props.children.map((child,i)=>
      {return <button onClick={()=>displayViewData.displayView(this.props.children[i])}>{i+1}</button>})}     
        </div>  
              
               <View>{displayViewData.showView}</View>
               </div>)
           }}
           /> 
       
      </div>
    );
  }
}

export default ViewSwitch;
