import React, { Component } from "react";
import {
    ModalProvider,
    ModalRoot,
    ModalConsumer
} from "./functionalComponent/ModalRoot";
import DefaultButton from "./components/DefaultButton";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";

class App extends Component {
    render() {
        console.log(styles);
        return (
            <div className="App">
                <ModalProvider>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className={styles.base}>
                        To get started, edit <code>src/App.js</code> and save to
                        reload.
                    </p>
                    <ModalConsumer component={DefaultButton} />
                    <ModalRoot />
                </ModalProvider>
            </div>
        );
    }
}

export default App;
