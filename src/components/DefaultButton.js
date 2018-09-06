import React from "react";

export default class DeafultButton extends React.Component {
    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    };
    render() {
        return (
            <div
                style={{ width: 100, height: 40, background: "grey" }}
                onClick={this.handleClick}
            />
        );
    }
}
