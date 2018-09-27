import React, { Component } from 'react'

export default class ViewSwitcher extends Component {
  constructor(props){
    super(props)
   this.state= {
      showView:" "
    }
  }
    displayView=(child)=>{
        this.setState({showView:child})
    
    }
  render() {
    return (
     <React.Fragment>
      {this.props.render({
          showView:this.state.showView,
          displayView:this.displayView
      })}   
     </React.Fragment>
    )
  }
}
