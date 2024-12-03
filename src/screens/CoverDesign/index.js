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

import { CoverDesignImg2 } from "../../asserts/images";

const CoverDesign = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="coverDesignBg"
          title="Make Your Book Stand Out On "
          subtitle=" Every Shelf"
          para="At Random House Publishers, we understand that a book's cover is more than just a protective layer; it's a powerful tool to capture attention and communicate your story at a glance. Our book cover design service is dedicated to ensuring your book not only stands out on every shelf but also resonates deeply with your target audience."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Experience The Magic Of Literature In  "
          subtitle="  Surround Sound"
          // title2="Glance"
          subtitle1="How we work?"
          description="At Random House Publishers, our book cover design service is tailored to transform your vision into a compelling visual story that stands out in the marketplace. We begin with an in-depth consultation where we take the time to understand your book's themes, genre, target audience, and any specific ideas or preferences you may have. Whether you come with a clear vision or need some creative direction, our team is dedicated to capturing the essence of your story."
          description2="Following the initial consultation, our talented designers conduct comprehensive research, diving deep into current design trends, successful covers within your genre, and visual elements that resonate with your target audience. This research phase ensures that the concepts we develop are not only aesthetically pleasing but also strategically aligned with market expectations and reader preferences."
          description3="Our iterative design process emphasizes collaboration and creativity, ensuring that the final cover is both visually stunning and commercially viable. We aim to produce a cover that grabs attention, conveys the right message, and entices potential readers to pick up your book. At Random House Publishers, we combine artistic flair with market insight to deliver book covers that make a lasting impression."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={CoverDesignImg2}
          imgClass="CoverDesignImg2"
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

export default CoverDesign;
