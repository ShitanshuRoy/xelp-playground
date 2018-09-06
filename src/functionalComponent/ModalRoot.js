import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");
const ModalContext = React.createContext();

export class ModalProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        };
    }
    toggleModal = () => {
        console.log("clicked");
        this.setState({ modalVisible: !this.state.modalVisible });
    };
    render() {
        return (
            <ModalContext.Provider
                value={{
                    modalVisible: this.state.modalVisible,
                    toggleModal: this.toggleModal
                }}
            >
                {this.props.children}
            </ModalContext.Provider>
        );
    }
}

export class ModalConsumer extends React.Component {
    renderComponent = context => {
        const Component = this.props.component;
        if (Component) {
            return <Component {...context} onClick={context.toggleModal} />;
        } else {
            return (
                <div
                    style={{
                        height: 50,
                        width: 50,
                        backgroundColor: "black"
                    }}
                    onClick={context.toggleModal}
                />
            );
        }
    };
    render() {
        return (
            <ModalContext.Consumer>
                {context => this.renderComponent(context)}
            </ModalContext.Consumer>
        );
    }
}

export class ModalRoot extends React.Component {
    renderModal = visible => {
        return visible ? (
            <div
                style={{ width: "100%", height: 200, backgroundColor: "#000" }}
            />
        ) : null;
    };
    render() {
        const Modal = (
            <ModalContext.Consumer>
                {context => this.renderModal(context.modalVisible)}
            </ModalContext.Consumer>
        );
        return ReactDOM.createPortal(Modal, modalRoot);
    }
}
