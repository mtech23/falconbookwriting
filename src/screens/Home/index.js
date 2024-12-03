import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import {
  heroImgLeft,
  heroImgRight,
  phoneImg,
  questionImg,
  leatherImg,
  brilliantBookImg,
  boxBelowImg,
  polygon01,
  semi01,
  semi02,
  semi03,
  redCirclewithSemi,
  redSemibehindBook,
  siteScrollImg,
  helpingIcon01,
  helpingIcon02,
  helpingIcon03,
  helpingIcon04,
  helpingIcon05,
  Imgundercircle,
  bannerImg01,
  ImgUnderArc,
  A4book,
  categoryIcon01,
  categoryIcon02,
  categoryIcon03,
  categoryIcon04,
  categoryIcon05,
  categorybk,
  processImg01,
  processImg02,
  processImg03,
  processImg04,
  secondBannerImg01,
  getTouchBook,
  processFeather,
  helpingBook,
  banner2imgRight,
  publishBookImg,
  publishBookBgPattern,
  testimonialGroupImg,
  testimonialQuote,
  ratingStars,
  publicationBook1,
  publicationBook2,
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  twitterIcon,
  dmcaImg,
  paymentImg,
  footerBrandImgs,
  polygon03,
  chatIcon,
  mainHeroCombineSecImg,
  saleBadge
} from "../../asserts/images";
import "./style.css";

import FirstCustomBanner from "../../components/FirstCustomBanner";
import SecondCustomBanner from "../../components/SecondCustomBanner";
import Testimonial from "../../components/Testimonial";
import CustomPublication from "../../components/CustomPublication";
import Faq from "../../components/Faq";
import GetTouch from "../../components/GetTouch";
import CustomCategory from "../../components/CustomCategory";
import UserLayout from "../../components/Layout/UserLayout";
import PublishBook from "../../components/PublishBook";
import Partners from "../../components/Partners";
import { tab } from "@testing-library/user-event/dist/tab";

const tabs = [
  {
    id: "book-publishing",
    title: "Book Publishing",
    icon: helpingIcon01,
    content:
      "Falcon Book Writing helps turn your manuscript into a professionally published book. We handle everything from formatting to cover design, ensuring your book is ready for readers worldwide.",
    className: "blue",
  },
  {
    id: "ghost-writing",
    title: "Ghost Writing",
    icon: helpingIcon02,
    content:
      "Our ghostwriting service transforms your ideas into a polished manuscript. Whether it’s a novel, memoir, or business book, Falcon Book Writing pairs you with skilled writers who bring your vision to life.",
    className: "pink",
  },
  {
    id: "book-editing",
    title: "Book Editing",
    icon: helpingIcon03,
    content:
      "Falcon Book Writing ensures your book shines with professional editing. Our experts refine your manuscript for grammar, style, and clarity, ensuring a smooth and engaging read.",
    className: "lime",
  },
  {
    id: "ebook-writing",
    title: "Ebook Writing",
    icon: helpingIcon04,
    content:
      "Falcon Book Writing creates engaging and professionally formatted eBooks tailored to your audience. Whether it’s a guide, novel, or memoir, we ensure it’s compelling and easy to read on all digital platforms.",
    className: "orange",
  },
  {
    id: "lorem-ipsum",
    title: "Book Marketing",
    icon: helpingIcon05,
    content:
      "Falcon Book Writing promotes your book to the right audience. From social media campaigns to targeted ads, we create strategies to increase visibility and sales.",
    className: "teal",
  },
];

const Home = () => {
  // const [activeTab, setActiveTab] = useState({});
  const [activeTab, setActiveTab] = useState(tabs[2]);

  console.log("activetabs", activeTab);

  return (
    <>
      <UserLayout>
        {/* <div className="main-hero-combineSec"> */}

        {/* <img src={mainHeroCombineSecImg} alt="" className="main-hero-combineSec-img" /> */}

        <section className="hero_section">
          <div className="container-fluid position-relative">
            <div className="hero_response_first_img">
              <img src={heroImgLeft} alt="first"></img>
            </div>

            <div className="hero_response_second_img">
              <img src={heroImgRight} alt="first"></img>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-0">
                <div
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img
                    draggable={false}
                    src={heroImgLeft}
                    className="img-fluid making_none main_banner-left-img"
                    alt=""
                  ></img>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-8 mx-auto align-self-center">
                <div
                  className="hero_centered_main"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <div className="hero_centered_content">
                    <div className="content_with_border">
                      <h2 className="brand_name_title">
                        Welcome To <br /> <span class="theme-color">FALCON BOOK WRITING</span>
                      </h2>

                      <h2 className="ebook_publisher_title">
                        We Are <br/> the Ebook <br/><span class="theme-color">Publishers</span> <br/>You Wish For
                      </h2>

                      <p className="avail_discount_text">
                        Avail a discount on all our services.
                      </p>
                    </div>

                    <div className="featherImg">
                      <img
                        src={leatherImg}
                        className="img-fluid"
                        alt="leather"
                      ></img>
                    </div>
                  </div>
                  <div className="hero_btns">
                  <button
                      type="submit"
                      class="brand_btn"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Chat With Us
                    </button>
                    {/* <button className="btn_with_icon btn-red">
                      <span className="btn_with_icon_text">Get a Quote</span>
                    </button> */}
                    {/* <button className="btn_with_icon">
                      <img
                        src={chatIcon}
                        className="btn_with_icon_img"
                        alt=""
                      />
                      <span className="btn_with_icon_text">Chat With us</span>
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-0">
                <div
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img
                    draggable={false}
                    src={heroImgRight}
                    className="img-fluid making_none main_banner-right-img"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="brilliant_mind_section brilliant_mind_HomeSection">
          <div className="polygonImg01">
            <img draggable={false} src={polygon01} alt="polygon"></img>
          </div>

          <div className="polygonImg02">
            <img draggable={false} src={polygon01} alt="polygon"></img>
          </div>

          <section className="sec2_about sec_padding">
            <div className="container-fluid">
              <div class="row align-items-center">
                <div class="col-sm-12 col-lg-6">
                  <div class="sec_title">
                    <h2
                      className=""
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                       Trust Us To Help Your<span class="color-red"> Book Fly </span> Beyond Limits
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Falcon Book Writing, we are passionate about transforming your ideas into powerful stories that resonate with readers and stand out in the competitive world of publishing.
                    </p>

                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      With a team of expert writers, editors, and publishing professionals, we take the time to understand your vision, ensuring that every aspect of your book reflects your unique voice and purpose. From brainstorming and outlining your ideas to making engaging content and polishing it to perfection, we handle every detail with care and precision.
                    </p>

                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      We don’t just stop at writing; we guide you through the entire publishing process, offering support with formatting, cover design, marketing strategies, and even distribution. Our goal is to make your journey as an author smooth and rewarding, allowing you to focus on sharing your story while we handle the complexities.
                    </p>

                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Whether you’re a first-time writer or an established author looking to raise your work, we bring creativity, professionalism, and dedication to help your book fly beyond limits and reach its full potential.
                    </p>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Trust Falcon Book Writing to turn your aspirations into a masterpiece that captivates readers and leaves a lasting impact.
                    </p>
                    <button
                      type="submit"
                      class="brand_btn"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Read More
                    </button>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-6">
                  {/* <div className="book_main_box">
                    <div className="book_semicircle_box">
                      <div className="first_semi">
                        <img draggable={false} src={semi01} alt="semi"></img>
                      </div>

                      <div className="second_semi">
                        <img draggable={false} src={semi02} alt="semi"></img>
                      </div>

                      <div className="third_semi">
                        <img draggable={false} src={semi03} alt="semi"></img>
                      </div>

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
                        src={brilliantBookImg}
                        className="img-fluid home_img2"
                        alt=""
                      ></img>

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
                  </div> */}
                  <div className="inner-hero_form home-form-sec">
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

          <Partners />
        </section>

        {/* </div> */}

        <section className="helping_things_section">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-md-8 col-lg-6">
                <div className="helping_left_part">
                  <div id="parent-circle">
                    <div className="duolingo_Under_img">
                      <img
                        draggable={false}
                        src={Imgundercircle}
                        alt="thtye"
                      ></img>
                    </div>

                    {tabs.map((item, ind) => {
                      const isActive = activeTab.id === item.id;
                      return (
                        <div
                          class={`circle ${item.className} ${
                            isActive ? "active" : ""
                          } making_it_none`}
                          onMouseEnter={() => setActiveTab(item)}
                        >
                          <img
                            src={item.icon}
                            alt="helpingIcon"
                            className="duolingo_tab_img"w
                          ></img>
                          <h6 className="duolingo_tab_title">{item.title}</h6>
                        </div>
                      );
                    })}
                    {/* <div class="circle blue making_it_none">
                      <img
                        src={helpingIcon01}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Book Publishing</h6>
                    </div>
                    <div class="circle pink making_it_none">
                      <img
                        src={helpingIcon02}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Ghost Writing</h6>
                    </div>
                    <div class="circle lime making_it_none">
                      <img
                        src={helpingIcon03}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Book Editing</h6>
                    </div>
                    <div class="circle orange making_it_none">
                      <img
                        src={helpingIcon04}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Ebook Writing</h6>
                    </div>
                    <div class="circle teal making_it_none">
                      <img
                        src={helpingIcon05}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Lorem Ipsum</h6>
                    </div> */}
                  </div>
                </div>

                <div className="main_duolingo_tab_below">
                  {tabs.map((item, index) => {
                    const isActive1 = activeTab.id === item.id;
                    return (
                      <div
                        className={`single_duolingo_tab_below ${
                          isActive1 ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveTab(item)}
                      >
                        <div className="duolingo_tab_img_below">
                          <img
                            // src={helpingIcon02}
                            src={item.icon}
                            alt="helpingIcon"
                            className="duolingo_tab_img"
                          ></img>
                        </div>
                        <div className="">
                          <h6 className="duolingo_tab_title_below m-0">
                            {item.title}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                  
                </div>
              </div>

              <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                <div className="main_helping_content">
                  <div className="sec_title">
                    <h2
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Things We Can <br />
                      <span class="color-red"> Help </span>You <span class="color-red">With</span>
                    </h2>
                    <div className="helping_tab">
                      <div
                        className="helping_tab_img"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        <img draggable={false} src={helpingBook} alt="Book" />
                      </div>
                      <h3
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="3000"
                      >
                        {activeTab.title}
                      </h3>
                    </div>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                      className="helping_tab_para"
                    >
                      {activeTab.content}
                    </p>
                    <button
                      type="submit"
                      class="brand_btn"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>

        <FirstCustomBanner />

        <CustomCategory
          className={"category_section"}
          image={categorybk}
          polygon01={polygon01}
        />

        

<PublishBook />

        <section class="process_sec sec_padding">
          <img
            draggable={false}
            src={processFeather}
            className="process_feather"
            alt="feather"
          />

          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    The Process For <br />
                    <span class="color-red">Ebooks</span> We
                    <span class="color-red"> Follow</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-sm-12 col-lg-5 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 1</h4>
                  <h3 class="process_content_title">Create the Manuscript</h3>
                  <p>
                  The first step in writing a book is creating your manuscript. This means writing the story, ideas, or content that will make up the book. It involves research, planning, and drafting. At Falcon Book Writing, we help you organize your thoughts, structure your chapters, and ensure the manuscript flows smoothly.
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg01}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-lg-3 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>01</h1>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-sm-12 col-lg-5 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 2</h4>
                  <h3 class="process_content_title">
                  Designing the Book Cover
                  </h3>
                  <p>
                  Once the manuscript is ready, it’s time to design the book cover. The cover is important because it’s the first thing readers will see. A great cover should capture the essence of your book and grab attention.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg02}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>02</h1>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-lg-5 col-sm-12 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 3</h4>
                  <h3 class="process_content_title">Publishing Your Book</h3>
                  <p>
                  After your manuscript is finalized and the cover is designed, it’s time to publish your book. This is the process of turning your manuscript into a physical or digital book that people can buy and read. At Falcon Book Writing, we guide you through the publishing options, whether it’s traditional publishing, self-publishing, or eBook publishing.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg03}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>03</h1>
                </div>
              </div>
            </div>

            <div class="row process_rows">
              <div class="col-lg-5 col-sm-12 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 4</h4>
                  <h3 class="process_content_title">
                  Marketing Your Book
                  </h3>
                  <p>
                  Now that your book is published, the next step is marketing it. This means getting the word out so people know about your book and want to read it. At Falcon Book Writing, we help you create a marketing plan that could include social media promotion, book launches, and reaching out to book reviewers.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg04}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>04</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SecondCustomBanner />


        <Testimonial />

        <section className="progress_sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-10 mx-auto process-m">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      10+ YEAR OF <br />
                      EXPERIANCE
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-10 mx-auto process-m progress_col2">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      700+ bOOK <br />
                      wRITTEN
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-10 mx-auto process-m">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      250+ AMERICAN
                      <br />
                      WRITERS
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CustomPublication />

        <Faq />

        <GetTouch />

        
      </UserLayout>
    </>
  );
};
export default Home;
