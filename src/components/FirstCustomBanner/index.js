import React from "react";
import { bannerImg01 } from "../../asserts/images";

const FirstCustomBanner = () => {
  return (
    <>
      <section className="first_banner_section sec_padding">
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-sm-12 col-lg-7">
              <div className="first_banner_left_part">
                <div className="sec_title">
                  <h2
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    The Secret To Great Books? Falcon Book Writing!
                  </h2>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Dreaming of publishing your own book? Falcon Book Writing makes it simple and stress-free! From concept to final draft, we help create books that readers will love. Share your story, showcase your expertise, or inspire the world—your great book starts here.
                  </p>
                  <button
                    type="submit"
                    class="brand_btn"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-5 mx-auto d-none d-lg-block">
              <div className="first_banner_right_part">
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <img
                    src={bannerImg01}
                    className="img-fluid"
                    alt="bnner"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstCustomBanner;
