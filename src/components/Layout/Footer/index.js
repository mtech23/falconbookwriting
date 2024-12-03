import React from "react";
import {
  dmcaImg,
  facebookIcon,
  footerBrandImgs,
  instagramIcon,
  paymentImg,
  twitterIcon,
  youtubeIcon,
} from "../../../asserts/images";
import { Link } from "react-router-dom";

const Footer = () => {
  const titles = [
    "PR Publication",
    "Book Publishing",
    "Printing Books",
    "Self-Help Publishing Amazon",
    "Amazon Printing",
    "Book Formatting",
    "Book Review Template",
    "Children's Book Editing",
    "Proofreading Editing",
  ];

  const ghostServices = [
    "business books",
    "Nonfiction",
    "memoir/autobiography",
    "fiction",
    "Western Writing",
    "Romantic Writing",
    "Action Adventure",
    "Christian- Faith",
    "Drama Writing",
    "eBook Writing",
    "Horror Writing",
    "Hip Hop Ghostwriters",
    "Article Writing",
  ];

  const bookMarketings = [
    "Book Cover Design",
    "Audio Book",
    "Illustrations",
    "Author Logo Design",
    "Author E-Commerce Website",
    "Book Video",
    "Ebook Social Media Marketing",
    "EBook SEO",
  ];

  return (
    <>
      <section className="footer">
        <div className="footer_inner_div">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 col-sm-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="footer_social">
                      <div className="footer_social_item">
                        <Link>
                          <img
                            draggable={false}
                            src={instagramIcon}
                            className="footer_social_iconImg"
                            alt=""
                          />
                        </Link>

                        <div className="footer_social_text">
                          <p>
                            Followers <br />
                            <b>10K</b>
                          </p>
                        </div>
                      </div>
                      <div className="footer_social_item">
                        <Link>
                          <img
                            draggable={false}
                            src={facebookIcon}
                            className="footer_social_iconImg"
                            alt=""
                          />
                        </Link>

                        <div className="footer_social_text">
                          <p>
                            Followers <br />
                            <b>121K</b>
                          </p>
                        </div>
                      </div>
                      <div className="footer_social_item">
                        <Link>
                          <img
                            draggable={false}
                            src={youtubeIcon}
                            className="footer_social_iconImg"
                            alt=""
                          />
                        </Link>

                        <div className="footer_social_text">
                          <p>
                            Followers <br />
                            <b>77K</b>
                          </p>
                        </div>
                      </div>
                      <div className="footer_social_item">
                        <Link>
                          <img
                            draggable={false}
                            src={twitterIcon}
                            className="footer_social_iconImg"
                            alt=""
                          />
                        </Link>

                        <div className="footer_social_text">
                          <p>
                            Followers <br />
                            <b>2K</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer_spacer"></div>
                  <div className="col-sm-4">
                    <div className="footer_quick_links">
                      <h3 className="footer_subhead">
                        Ghostwriting <br />
                        Services
                      </h3>

                      <ul className="footer_links">
                        <li className="footer_link">
                          <Link>business books</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Nonfiction</Link>
                        </li>
                        <li className="footer_link">
                          <Link>memoir/autobiography</Link>
                        </li>
                        <li className="footer_link">
                          <Link>fiction</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Western Writing</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Romantic Writing</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Action Adventure</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="faithfaith-writer">Christian- Faith</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Drama Writing</Link>
                        </li>
                        <li className="footer_link">
                          <Link>eBook Writing</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Horror Writing</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Hip Hop Ghostwriters</Link>
                        </li>
                        <li className="footer_link">
                          <Link>Article Writing</Link>
                        </li>
                      </ul>

                      <ul className="footer_links">
                        {/* {
                            ghostServices.map((ghostservice, index) => (
                                <li key={index} className="footer_link">
                                <Link>{ghostservice}</Link>
                                </li>
                            ))
                        } */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="footer_quick_links">
                      <h3 className="footer_subhead">
                        Publishing & <br /> Editing
                      </h3>

                      <ul className="footer_links">
                        <li className="footer_link">
                          <Link to="/">PR Publication</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Book Publishing</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Printing Books</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Self-Help Publishing Amazon</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Amazon Printing</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Book Formatting</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Book Review Template</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/children-illustration">
                            Children's Book Editing
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Proofreading Editing</Link>
                        </li>
                      </ul>

                      {/* <ul className="footer_links">
                        {titles.map((title, index) => (
                            <li key={index} className="footer_link">
                            <Link>{title}</Link>
                            </li>
                        ))}
                        </ul> */}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="footer_quick_links">
                      <h3 className="footer_subhead">
                        Book Marketing and
                        <br /> Production
                      </h3>

                      <ul className="footer_links">
                        <li className="footer_link">
                          <Link to="/cover-design">Book Cover Design</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/audio-book-design">Audio Book</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/illustration">Illustrations</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Author Logo Design</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/website-author">
                            Author E-Commerce Website
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Book Video</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">Ebook Social Media Marketing</Link>
                        </li>
                        <li className="footer_link">
                          <Link to="/">EBook SEO</Link>
                        </li>
                      </ul>

                      {/* <ul className="footer_links">
                        {
                            bookMarketings.map((bookmarketing, index) => (
                                <li key={index} className="footer_link">
                                    <Link>{bookmarketing}</Link>
                                </li>
                            ))
                        }
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12">
                <div className="footer_avail">
                  {/* <h3 className="footer_avail-text">
                    Avail $199 Value <br />
                    Service For Free
                  </h3>
                  <button className="avail_btn">Avail Now</button> */}
                  <div className="dmca_img">
                    <img src={dmcaImg} alt="" />
                  </div>
                </div>
                <div className="footer_payment">
                  <h3 className="footer_payment-text">
                    <span class="color-red">Secure</span> payment By
                  </h3>
                  <div className="dmca_img">
                    <img src={paymentImg} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-lg-12">
                <div className="footer_extra_links">
                  <ul className="footer_links">
                    <li className="footer_link">
                      <Link>About</Link>
                    </li>
                    <li className="footer_link">
                      <Link>Review</Link>
                    </li>
                    <li className="footer_link">
                      <Link>Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_spacer"></div>
              <div className="col-md-12">
                <div className="footer_brand_imgs">
                  <img src={footerBrandImgs} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  <p>© Falcon Book Writers . All Rights Reserved, Falcon Book Writing.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer_termCondition_links">
                  <ul className="footer_links">
                    <li className="footer_link">
                      <Link>Privacy Policy</Link>
                    </li>
                    <li className="footer_link">
                      <Link>Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
