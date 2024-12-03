import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ModalDialog } from "react-bootstrap";
import {
  polygon01,
  processFeather,
  testImg1,
  testImg2,
  testImg3,
  testImg4,
  testImg5,
  testImg6,
  testImg7,
  testImg8,
  testVideo1,
  testPlayIcon,
} from "../../asserts/images";
import "./style.css";

import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const testimonials_data = [
  {
    id: 1,
    image: testImg1,
    Icon: testPlayIcon,
  },
  {
    id: 2,
    image: testImg2,

    Icon: testPlayIcon,
  },
  {
    id: 3,
    image: testImg3,

    Icon: testPlayIcon,
  },
  {
    id: 4,
    image: testImg4,

    Icon: testPlayIcon,
  },
  {
    id: 5,
    image: testImg5,

    Icon: testPlayIcon,
  },
  {
    id: 6,
    image: testImg6,

    Icon: testPlayIcon,
  },
  {
    id: 7,
    image: testImg7,

    Icon: testPlayIcon,
  },
  {
    id: 8,
    image: testImg8,

    Icon: testPlayIcon,
  },
];

const Testimonial = () => {
  const [lgShow, setLgShow] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    const path = document.querySelector("#circularPath");

    // Define responsive settings
    let duration, alignOrigin;

    if (windowWidth < 768) {
      // Mobile settings
      duration = 3;
      alignOrigin = [3, 0.5];
    } else if (windowWidth < 1024) {
      // Tablet settings
      duration = 4;
      alignOrigin = [2.8, 0.5];
    } else {
      // Desktop settings
      duration = 5;
      alignOrigin = [3, 0.5];
    }

    boxes.forEach((box, index) => {
      const totalBoxes = boxes.length;
      // const duration = 5;

      gsap.to(box, {
        motionPath: {
          path: path,
          align: path,
          // alignOrigin: [2.9, 0.5],
          // alignOrigin: [3, 0.5],
          alignOrigin: alignOrigin,
          start: index / totalBoxes,
          end: (index + 1) / totalBoxes,
          immediateRender: true,
        },
        duration: duration,
        repeat: -1, // Repeat infinitely
        ease: "linear",
        yoyo: true,
      });
    });
  }, []);
  return (
    <>
      <section className="testimonial">
        <img src={polygon01} className="testimonial_polygon" alt="polygon" />
        <img
          draggable={false}
          src={processFeather}
          className="process_feather"
          alt="feather"
        />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="sec_title text-center">
                <h2>
                  <span className="color-red">Testimonial</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-8 mx-auto">
              <div
                className="testimonial_tabs"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="test_circle">
                  <svg width="100%" height="100%" viewBox="0 0 500 500">
                    <path
                      id="circularPath"
                      fill="none"
                      stroke="#AF001D"
                      d="M 250,250 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                    />
                  </svg>

                  {testimonials_data.map((item, index) => (
                    <button
                      type="button"
                      className="box"
                      key={index}
                      onClick={() => setLgShow(true)}
                    >
                      <img src={item.image} alt="" />
                      <img
                        src={testPlayIcon}
                        className="test_playIcon"
                        alt=""
                      />
                    </button>
                  ))}

                  {/* <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg1})` }}
                  >
                    <img src={testImg1} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg2})` }}
                  >
                    <img src={testImg2} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg3})` }}
                  >
                    <img src={testImg3} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg4})` }}
                  >
                    <img src={testImg4} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg5})` }}
                  >
                    <img src={testImg5} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg6})` }}
                  >
                    <img src={testImg6} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg7})` }}
                  >
                    <img src={testImg7} alt="" />
                  </button>
                  <button
                    type="button"
                    className="box"
                    // style={{ backgroundImage: `url(${testImg8})` }}
                  >
                    <img src={testImg8} alt="" />
                  </button> */}
                </div>
                {/* <img
                  draggable={false}
                  src={testimonialGroupImg}
                  className="img-fluid"
                  alt=""
                /> */}

                {/* <div id="parent-circle-02">
                        <div class="circle02 blue">
                         
                        </div>
                        <div class="circle02 pink"></div>
                        <div class="circle02 lime"></div>
                        <div class="circle02 orange"></div>
                        <div class="circle02 teal"></div>
                        <div class="circle02 green">
                            <div className='circleUserImg'>
                            <img src={userImg01} alt='user' className='userImg'></img>
                           </div>
                        </div>
                        <div class="circle02 white"></div>
                        <div class="circle02 black"></div>
                    </div> */}
              </div>
            </div>

            {/* <div className="col-lg-6 col-sm-10 mx-auto">
              <div className="testimonial_tabs_content" data-aos="fade-left"
                data-aos-offset="0"
                data-aos-duration="2000">
                <div className="sec_title">
                  <h2>
                    <span className="color-red">TESTIMONIALS</span>
                  </h2>
                  <img
                    src={testimonialQuote}
                    className="testimonial_quotes"
                    alt=""
                  />
                  <h4>Jhon Smith</h4>
                  <p>
                    “When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>
                  <img
                    draggable={false}
                    src={ratingStars}
                    className="testimonial_stars"
                    alt=""
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Modal
        size="lg"
        show={lgShow}
        centered
        onHide={() => setLgShow(false)}
        // aria-labelledby="example-modal-sizes-title-lg"
        className="testimonial_modal"
      >
        <Modal.Body>
          <button
            className="modalCloseBtn"
            onClick={() => setLgShow(false)}
            aria-label="Close"
          >
            X
          </button>
          <video autoPlay loop width="100%">
            <source src={testVideo1} type="video/mp4" />{" "}
            {/* Replace with your video path */}
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Testimonial;
