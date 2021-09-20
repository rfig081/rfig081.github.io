import React, { Component } from "react";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import ModalDrawer from "../components/Navigation/ModalDrawer";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  state = {
    showModalDrawer: false,
  };

  componentDidMount() {
    document.addEventListener("mousemove", (e) => {
      const logo = document.getElementById("logo");
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([logo]);
      this.transformElement(logo, position);
    });
  }

  modalDrawerClosedHandler = () => {
    this.setState({ showModalDrawer: false });
  };

  modalDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showModalDrawer: !prevState.showModalDrawer };
    });
  };

  transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - box.height / 2) / 20;
    let calcY = (x - box.x - box.width / 2) / 20;

    return (
      "perspective(100px) " +
      "   rotateX(" +
      calcX +
      "deg) " +
      "   rotateY(" +
      calcY +
      "deg) "
    );
  }

  transformElement(el, xyEl) {
    el.style.transform = this.transforms.apply(null, xyEl);
  }

  render() {
    return (
      <>
        <Toolbar />
        {/* <ModalDrawer /> */}
        <main className="Content">{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
