import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import {
  boxBelowImg,
  brilliantBookImg,
  chatIcon,
  heroImgLeft,
  heroImgRight,
  leatherImg,
  polygon01,
  redCirclewithSemi,
  redSemibehindBook,
  semi01,
  semi02,
  semi03,
  siteScrollImg,
  sec2img
} from "../../asserts/images";
import InnerHero from "../../components/InnerHero";
import Section2 from "../../components/Section2";
import CustomCategory from "../../components/CustomCategory";
import SecondCustomBanner from "../../components/SecondCustomBanner";
import FirstCustomBanner from "../../components/FirstCustomBanner";
import PublishBook from "../../components/PublishBook";
import Testimonial from "../../components/Testimonial";
import CustomPublication from "../../components/CustomPublication";
import Faq from "../../components/Faq";
import GetTouch from "../../components/GetTouch";

const EveryShelf = () => {
  return (
    <>
      <UserLayout>
        <InnerHero innerheroclass="ghostWritingBg" title="Make Your Book Stand Out On " subtitle=" Every Shelf" para="At Random House Publishers, we understand that a book's cover is more than just a protective layer; it's a powerful tool to capture attention and communicate your story at a glance. Our book cover design 
        service is dedicated to ensuring your book not only stands out on every shelf but also resonates deeply with your target audience." />


        <Section2 title="  Making Your Book Unforgettable       " subtitle="  At First" title2="    Glance!" subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={sec2img}
        />

        <CustomCategory className="category_section2" />
        <FirstCustomBanner />
        <PublishBook />
        <Testimonial />
        <SecondCustomBanner />
        <CustomPublication />
        <Faq />
        <GetTouch />
      </UserLayout>
    </>
  );
};

export default EveryShelf;
