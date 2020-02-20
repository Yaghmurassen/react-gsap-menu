import React, { useState, useEffect } from "react";
import Header from "../Common/Layout/Header/Header";
import ApproachPanelMain from "./ApproachPanel/ApproachPanelMain";
import EnterprisePanelMain from "./EnterprisePanel/EnterprisePanelMain";
import DevelopersHelpMain from "./DevelopersHelp/DevelopersHelpMain";
import FooterLanding from "./FooterLanding";
import * as ScrollMagic from "scrollmagic";
import gsap, { TimelineMax, TweenMax, TweenLite } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

function LandingMain() {
  const [scrollMagic, setScrollMagic] = useState({
    controller: new ScrollMagic.Controller(),
    timelineOne: gsap.timeline()
  });
  const { controller, timelineOne } = scrollMagic;
  useEffect(() => {
    timelineOne.to("#animation", { x: "-100vw" });
    new ScrollMagic.Scene({
      triggerElement: "#test-trigger",
      duration: 400
    })
      .setTween(timelineOne)
      .addTo(controller);
  }, []);

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <div style={{ position: "fixed", top: "0" }}>
        <Header />
      </div>
      <div style={{ position: "relative", top: "100vh" }}>
        <EnterprisePanelMain />
      </div>
      <ApproachPanelMain />
      <div id="test-trigger"> </div>
      <div id="animation" style={{ position: "relative", left: "100vw" }}>
        <DevelopersHelpMain />
      </div>
      <FooterLanding />
    </div>
  );
}

export default LandingMain;
