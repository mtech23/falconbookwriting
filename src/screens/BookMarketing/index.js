import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
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

import { bookMarketingImg2 } from "../../asserts/images";

const BookMarketing = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="bookMarketingBg"
          title="Reach Readers Everywhere Our Book Marketing Service"
          subtitle=" Makes It Happen!"
          para="Our Book Marketing service is designed to catapult your literary masterpiece into the spotlight it deserves. With a personalized approach to each author and their work, we employ strategic marketing tactics that resonate with readers across various platforms. From engaging social media campaigns to targeted email newsletters and innovative promotional events, we ensure your book "
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Trust Random House   "
          subtitle=" Publishers To Polish "
          title2="Your Narrative"
          subtitle1="How we work?"
          description="Get the full potential of your manuscript with Random House Publishers' Book Editing Service. Our team of seasoned editors meticulously refines your prose, hones your narrative structure, and enhances your storytelling, ensuring that every word captivates readers and resonates long after the final page. With a legacy of literary excellence and a commitment to collaboration, we tailor our approach to your unique vision, guiding your manuscript toward its fullest expression. Trust Random House Publishers to raise your storytelling to new heights, transforming your work into a masterpiece ready to enchant audiences worldwide."
          // subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={bookMarketingImg2}
          imgClass="bookMarketingImg2"
          actions={true}
          btn1="Let’s Get Start"
          btn2="Call Us Now"
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

export default BookMarketing;
