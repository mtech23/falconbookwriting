import React from "react";
import "./style.css";
import {
  boxBelowImg,
  polygon01,
  semi01,
  semi02,
  semi03,
  redCirclewithSemi,
  redSemibehindBook,
} from "../../asserts/images";
import Partners from "../Partners";
const Section2 = (props) => {
  return (
    <div>
      <section class={`brilliant_mind_section ${props.innerSec2Class}`}>
        {props?.polygon01 && (
          <div className="polygonImg01">
            <img draggable={false} src={props?.polygon01} alt="polygon"></img>
          </div>
        )}

        <div className="polygonImg02">
          <img draggable={false} src={polygon01} alt="polygon"></img>
        </div>

        <section className="sec2_about sec_padding">
          <div className="container-fluid">
            <div class="row align-items-center">
              <div class="col-sm-12 col-lg-6">
                <div class="sec_title custom_two_sec_title">
                  <h2
                    className=""
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    {props.title}
                    <span class="color-red"> {props.subtitle} </span>{" "}
                    {props.title2}
                  </h2>
                  
                  {props?.subtitle1 && (
                    <p class="subtititle2 color-red"> {props?.subtitle1}</p>
                  )}
                  {props?.subtitle1Desc && (
                    <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    {props?.subtitle1Desc}
                  </p>
                  )}
                  {props?.subtitle2 && (
                    <p class="subtititle2 color-red"> {props?.subtitle2}</p>
                  )}
                  {props?.subtitle2Desc && (
                    <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  > {props?.subtitle2Desc}</p>
                  )}
                  
                  {props?.subtitle3 && (
                    <p class="subtititle2 color-red"> {props?.subtitle3}</p>
                  )}
                  {props?.subtitle3Desc && (
                    <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  > {props?.subtitle3Desc}</p>
                  )}
                  {props?.subtitle3Desc2 && (
                    <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  > {props?.subtitle3Desc2}</p>
                  )}
                  {props?.description && (
                    <p> {props?.description}</p>
                  )}
                  {props?.description2 && (
                    <p> {props?.description2}</p>
                  )}
                  {props?.description3 && (
                    <p> {props?.description3}</p>
                  )}
                  {props.actions && (
                    <div className="flex inner-btn-group">
                      {props.btn1 && (
                        <button
                          type="submit"
                          // class="brand_btn"
                          class="btn-bg-white"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          {props.btn1}
                        </button>
                      )}
                      {props.btn2 && (
                        <button
                          type="submit"
                          // class="brand_btn"
                          class="btn-bg-red"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          {props.btn2}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div class="col-sm-12 col-lg-6">
                <div className="book_main_box">
                  <div className="book_semicircle_box">
                    {/* <div className="first_semi">
                      <img draggable={false} src={semi01} alt="semi"></img>
                    </div>

                    <div className="second_semi">
                      <img draggable={false} src={semi02} alt="semi"></img>
                    </div>

                    <div className="third_semi">
                      <img draggable={false} src={semi03} alt="semi"></img>
                    </div> */}

                    <div className="circle_with_semi">
                      <img
                        draggable={false}
                        src={redCirclewithSemi}
                        alt="semi"
                      ></img>
                    </div>

                    <div className="circle_with_semi2">
                      <img
                        draggable={false}
                        src={redCirclewithSemi}
                        alt="semi"
                      ></img>
                    </div>
                  </div>

                  <div
                    class="text-center book_img position-relative"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <img
                      src={props?.image}
                      className={`img-fluid ${props.imgClass}`}
                      alt=""
                    ></img>
                    {props?.video && (
                      <video
                        className={props.videoClass}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src={props?.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    <div className="redCircleBehindBook">
                      <img
                        draggable={false}
                        src={redSemibehindBook}
                        alt="red"
                      ></img>
                    </div>
                  </div>

                  <div>
                    <img
                      draggable={false}
                      src={boxBelowImg}
                      class="img-fluid innerBoxBelowImg"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Partners />
      </section>
    </div>
  );
};

export default Section2;
