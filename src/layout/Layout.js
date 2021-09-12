import React, { Component } from "react";

// import "./Layout.css";
import Toolbar from "../components/Navigation/Toolbar";
import ModalDrawer from "../components/Navigation/ModalDrawer";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  state = {
    showModalDrawer: false,
  };

  modalDrawerClosedHandler = () => {
    this.setState({ showModalDrawer: false });
  };

  modalDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showModalDrawer: !prevState.showModalDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar />
        <ModalDrawer />
        <main className="Content">{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;