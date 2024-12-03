
import React from 'react'
import { banner2imgRight, secondBannerImg01 } from '../../asserts/images'

const SecondCustomBanner = () => {
  return (
    <>
      <section className="second_banner_section">
        <div className="banner_left_img">
          <img draggable={false} src={secondBannerImg01} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-12">
              <div className="sec_title">
                <h2 data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000">Have A Book In Mind? Let’s Make It Happen—Get In Touch!</h2>
                <p data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="2000">
                  If you have a book idea, we can help bring it to life. At Falcon Book Writing, we work with you to turn your vision into a finished book. Contact us today!
                </p>
                <button type="button" className="brand_btn" data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="3000">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_right_img">
          <img draggable={false} src={banner2imgRight} alt=""></img>
        </div>
      </section>
    </>
  )
}

export default SecondCustomBanner