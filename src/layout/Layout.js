import React, { Component } from "react";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import ModalDrawer from "../components/Navigation/ModalDrawer";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  state = {
    showModalDrawer: false,
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.logoAnimationHandler);
    document.addEventListener("scroll", this.logoAnimationHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logoAnimationHandler);
    window.removeEventListener("scroll", this.logoAnimationHandler);
  }

  modalDrawerClosedHandler = () => {
    this.setState({ showModalDrawer: false });
  };

  modalDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showModalDrawer: !prevState.showModalDrawer };
    });
  };

  logoAnimationHandler = (e) => {
    const logo = document.getElementById("logo");
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([logo]);
    this.transformElement(logo, position);
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

  scrollHandler = (e) => {};

  render() {
    return (
      <>
        <Toolbar />
        {/* <ModalDrawer /> */}
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
