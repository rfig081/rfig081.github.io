import React, { Component } from "react";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import ModalDrawer from "../components/Navigation/Drawer/ModalDrawer";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolbar: true,
      previousScrollPostion: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    // document.addEventListener("mousemove", this.logoAnimationHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    // window.removeEventListener("mousemove", this.logoAnimationHandler);
  }

  scrollHandler = (_) => {
    const currentScrollPosition = window.pageYOffset;
    this.setToolbarColor(currentScrollPosition);
    this.setToolbarPosition(currentScrollPosition);
    this.setState({ previousScrollPostion: currentScrollPosition });
  };

  setToolbarColor = (currentScrollPosition) => {
    const toolbarElem = document.getElementById("toolbar");

    if (currentScrollPosition === 0) {
      toolbarElem.classList.remove("toolbar--scrolled");
    } else {
      toolbarElem.classList.add("toolbar--scrolled");
    }
  };

  setToolbarPosition = (currentScrollPosition) => {
    const toolbarElem = document.getElementById("toolbar");

    if (this.state.previousScrollPostion > currentScrollPosition) {
      toolbarElem.classList.remove("toolbar--hidden");
    } else {
      toolbarElem.classList.add("toolbar--hidden");
    }
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

  render() {
    return (
      <>
        <Toolbar
          className={
            this.state.showToolbar ? "toolbar--fixed" : "toolbar-hidden"
          }
        />
        <main>{this.props.children}</main>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Layout;
