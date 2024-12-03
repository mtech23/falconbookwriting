import React from "react";
import {
  innerBadge1,
  innerBadge2,
  innerBadge3,
  saleBadge,
} from "../../asserts/images";

const InnerHero = (props) => {
  return (
    // ghostWritingBg
    <section className={`inner-hero sec_padding ${props?.innerheroclass}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="inner-hero_content">
              <div className="sec_title">
                <h2>
                  {props?.title}
                  <span class="color-red">{props?.subtitle}</span>
                  {props?.title2}
                </h2>
                <p>{props?.para}</p>
                <div class="inner-btn-group">
                  <button className="btn-bg-white">
                    Let’s Discuss Project
                  </button>
                  <button className="btn-bg-red">Call Us Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inner-hero_badges">
              <img src={innerBadge1} alt="" />
              <img src={innerBadge2} alt="" />
              <img src={innerBadge3} alt="" />
            </div>
            <div className="inner-hero_form">
              <img src={saleBadge} className="inner-hero_form-badge" alt="" />
              <h3 className="inner-hero_form_title">
                Start Your Publishing Journey
              </h3>
              <form>
                <div className="row">
                  <div class="col-md-12 mb-3">
                    <select class="form-select form-control">
                      <option selected>Do you have a manuscript ready?</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-12 mb-3">
                    <select class="form-select form-control">
                      <option selected>Have you published before?</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-12 mb-3">
                    <select class="form-select form-control">
                      <option selected>
                        What type of book do you plan on publishing?
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <h4 className="inner-hero_form_subtitle">
                      What services are{" "}
                      <span class="color-red">you looking for?</span>
                    </h4>
                  </div>
                  <div className="brand-radio-buttons col-md-12">
                    <label class="custom-radio">
                      Self Publishing
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="custom-radio">
                      Editing
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="custom-radio">
                      Cover Design
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="custom-radio">
                      Prating
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="custom-radio">
                      Interior Formatting
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="custom-radio">
                      Illustration
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <button class="brand_btn-secondary btn-block">
                      Let’s Write Your Book
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
