import React from 'react'
import { polygon01, polygon03, categorybk, publishBookImg } from '../../asserts/images'

import { Tooltip as ReactTooltip } from "react-tooltip";
import "./tooltipSteps.css";

const PublishBook = () => {
  const steps = [
    {
      id: "step1",
      text: "Writing And Editing",
      // position: { top: "30px", left: "50px" },
    },
    {
      id: "step2",
      text: "Designing The Book",
      // position: { top: "80px", left: "100px" },
    },
    {
      id: "step3",
      text: "Publishing",
      // position: { top: "120px", left: "150px" },
    },
    {
      id: "step4",
      text: "Launching The Book",
      // position: { top: "160px", left: "200px" },
    },
    {
      id: "step5",
      text: "Marketing And Promotion",
      // position: { top: "200px", left: "250px" },
    },
  ];
    return (
      <>
            <section className="publish_book_sec">
          <img src={polygon01} className="publish_polygon" alt="polygon" />
          <img src={polygon03} className="publish_polygon_3" alt="polygon" />
          <div className="publishBgPattern">
            <img draggable={false} src={categorybk} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <span class="color-red">Five Easy Steps </span> You Have To Go Through
                  </h2>
                </div>
                <div className="publish_book_content">
                  {/* <img
                    draggable={false}
                    src={publishBookImg}
                    className="img-fluid"
                    alt=""
                  /> */}
                  <div
                  className="tooltip-container"
                  style={{ position: "relative" }}
                >
                  <img
                    draggable={false}
                    src={publishBookImg}
                    className="img-fluid"
                    alt=""
                    style={{ width: "100%" }} // Ensure the image scales correctly
                  />
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`step-dot ${step.id}`}
                      data-tooltip-id={step.id}
                      data-tooltip-content={step.text}
                      style={{
                        position: "absolute",
                        // top: step.position.top,
                        // left: step.position.left,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                        cursor: "pointer",
                      }}
                    ></div>
                  ))}
                  {steps.map((step) => (
                    <ReactTooltip
                      key={step.id}
                      id={step.id}
                      effect="solid"
                      place="top"
                    />
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default PublishBook