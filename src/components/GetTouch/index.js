import React from "react";
import { getTouchBook } from "../../asserts/images";

const GetTouch = () => {
  return (
    <>
      <section class="get_touch_sec sec_padding">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="get_touch_title">
                <div class="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    STAY IN
                    <br />
                    TOUCH
                    <br />
                    WITH US!
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-10 mx-auto">
              <div
                class="get_touch_img"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <img
                  draggable={false}
                  src={getTouchBook}
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="get_touch_form">
                <form>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone No"
                    />
                  </div>
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" class="brand_btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetTouch;
