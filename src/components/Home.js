/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect, Fragment } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { gsap, TweenMax, TimelineMax } from "gsap";
import { Link } from "react-router-dom";

import full from "../images/full.png";
import immeuble from "../images/immeubletest.png";
import middle from "../images/middle.png";
import back from "../images/back.jpg";

const Home = ({ state }) => {
  const body = useRef(null);

  useEffect(() => {
    return console.log(gsap);

    Scene({
      triggerElement: body.current
      //offset: -160
    })
      .addIndicators({
        colorStart: "rgba(0,0,0,0.5)",
        colorEnd: "rgba(0,0,0,0.5)",
        colorTrigger: "rgba(0,0,0,1)"
        //name: 'scene'
      })
      .on("enter", event => {})
      .on("leave", event => {})
      .addTo(Controller);
  }, [state]);

  return (
    // <Controller>
    //   <Scene duration={600}>
    //     <Fragment>
    //       <div className="body">
    //         <div className="color-wipes-animate">
    //           <div className="color-wipe" />
    //           {/* <div class="color-wipe"></div>
    //         <div class="color-wipe"></div>
    //         <div class="color-wipe"></div>
    //         <div class="color-wipe"></div> */}
    //         </div>
    //         <div className="loader">
    //           <p>La jazzinière</p>
    //         </div>

    //         {/* <div className="screen-wipe-top"></div>
    //         <div className="screen-wipe-bottom"></div>  */}
    //         <div id="barba-wrapper">
    //           <div className="barba-container">
    //             <div className="wrapper">
    //               <section id="first-section">
    //                 <nav>
    //                   <div className="nav-wrapper">
    //                     <h4>Ready co.</h4>
    //                     <Link className="button" to="#">
    //                       Sign Up
    //                     </Link>
    //                   </div>
    //                 </nav>
    //                 <div className="container">
    //                   <div className="title">Jazzinière</div>
    //                   <div className="images">
    //                     <div className="image-wrapper" id="one">
    //                       <img src={full} />
    //                     </div>
    //                     <div className="image-wrapper" id="two">
    //                       <img src={middle} />
    //                     </div>
    //                     <div className="image-wrapper" id="four">
    //                       <img src={immeuble} style={{ height: "160vh" }} />
    //                     </div>
    //                   </div>

    //                   <footer>
    //                     <div className="footer-wrapper">
    //                       <ul>
    //                         <li>Instagram</li>
    //                         <li>Facebook</li>
    //                         <li>Dribble</li>
    //                         <li>Twitter</li>
    //                       </ul>
    //                     </div>
    //                   </footer>
    //                 </div>
    //                 <button className="btn btn-home btn-concert">
    //                   <Link to="/back.html">Go to barba's page</Link>
    //                 </button>
    //                 <button className="btn btn-home btn-goodcase">
    //                   <Link to="/goodcaseoftheblues.html">
    //                     Go to barba's page
    //                   </Link>
    //                 </button>
    //                 <button className="btn btn-home btn-contact">
    //                   <Link to="/contact.html">Go to barba's page</Link>
    //                 </button>
    //               </section>
    //               <div className="btn douille" />
    //               <div className="bg-2" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Fragment>
    //   </Scene>
    // </Controller>

    <Controller>
      <Scene
        pin={false}
        reverse={false}
        indicators={true}
        triggerElement="#trigger1"
      >
        <TweenMax
          from={{ opacity: 0 }}
          to={{ opacity: 100 }}
          duration={600}

          // stagger={0.15}
        >
          <div ref={body} className="trigger1">
            <div className="image-wrapper" id="one">
              <img src={full} />
            </div>
          </div>
        </TweenMax>
      </Scene>
    </Controller>
  );
};

export default Home;



import React, { Component } from 'react';
import logo from './logo.svg';
import ScrollMagic from 'scrollmagic';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
        this.state = {
            pinText: 'Unpinned.'
        };
    }

    componentDidMount() {

        // build scenes
        new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150})
            .setPin("#pin")
            .setClassToggle("#pin", "green")
            .on("enter leave", this.updateBox)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.controller);

        new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 300})
            .setPin("#pin")
            .setClassToggle("#pin", "green")
            .on("enter leave", this.updateBox)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.controller);

        new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 600})
            .setPin("#pin")
            .setClassToggle("#pin", "green")
            .on("enter leave", this.updateBox)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.controller);

    }

    updateBox = (e) => {
        let newPinText = '';
        if (e.type === "enter") {
            newPinText = 'Pinned.';
        }else {
            newPinText = 'Unpinned.';
        }
        this.setState({ pinText: newPinText });
    };

    render() {
        const { pinText } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div className="spacer s1" />
                <div id="trigger" className="spacer s1" />
                <div className="spacer s0" />
                <div id="pin" className="box1 red">
                    <p>{pinText}</p>
                    <a href="#" className="viewsource">view source</a>
                </div>
                <div className="spacer s2" />

            </div>
        );
    }

