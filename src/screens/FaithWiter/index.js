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

import { faithWriterImg2 } from "../../asserts/images";

const FaithWriter = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="faithWritingBg"
          title="Writing The Next Chapter Of Faith Your"
          subtitle=" Religious "
          title2="Book Starts Here"
          para="Whether you're a seasoned theologian, a spiritual leader, or someone with a deep personal journey, we are dedicated to helping you create a convincing story that resonates deeply with readers. At Random House Publishers, we bring decades of publishing excellence to guide your manuscript from inception to publication, ensuring your voice and message shine through. "
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Where Global Beliefs Find Their "
          subtitle="  Literary Voice"
          description="At Random House Publishers's Religious Writing service, we are dedicated to developing a diverse reflection of spiritual voices that span the breadth of global beliefs and traditions. Whether exploring Christian theology, Islamic spirituality, Buddhist philosophy, or Hindu teachings, we celebrate the richness and complexity of faith. Our collaborative approach is designed to support authors at every stage of their journey, from conceptualization to publication. We provide personalized guidance and editorial expertise to ensure that each manuscript not only meets but beats the highest standards of clarity, depth, and authenticity. With a global distribution network, we control our reach to bring these profound works to readers worldwide, developing meaningful dialogue and understanding across cultural divides. Committed to excellence, we invite both established theologians and emerging spiritual thinkers to join us in revealing the world with transformative literature that inspires, challenges, and enriches lives."
          // title2="For Your Voice!"
          // subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={faithWriterImg2}
          imgClass="faithWriterImg2"
          actions={true}
          btn1="Let’s Discuss Project"
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

export default FaithWriter;
