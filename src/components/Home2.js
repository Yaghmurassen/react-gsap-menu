/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect, Fragment } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { gsap, TweenMax, TimelineMax } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { Link } from "react-router-dom";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// import * as ScrollMagic from "scrollmagic";
// import gsap, { TimelineMax, TweenMax, TweenLite } from "gsap";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    // require("scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js");
    const tl = new TimelineMax()
      .from(this.myRef.current, 0.5, { opacity: 0 })
      .to(this.myRef.current, 0.5, { opacity: 0 }, 0.5);

    new ScrollMagic.Scene({
      triggerElement: this.myRef.current,
      triggerHook: 0.3,
      duration: "100%"
    })
      .setPin(this.myRef.current)
      .setTween(tl)
      //   .addIndicators()
      .addTo(this.controller);
  }

  render() {
    return (
      <div ref={this.myRef} className="bg-gray0 padding-top-6 padding-bottom-6">
        <div id="TextBlock">
          <h1>Heading to animation</h1>
          <p>ALso with text too</p>
        </div>
      </div>
    );
  }
}
