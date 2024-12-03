import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import { sec2img } from "../../asserts/images";
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

const GhostWriter = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Behind Every Great Story, There's A"
          subtitle=" Ghostwriter!"
          para="We understand that every story deserves to be told, but not every author has the time, expertise, or inclination to write it themselves. That's where our Ghostwriting Services come in. We pride ourselves on being the invisible hand behind many captivating narratives, helping individuals, businesses, and celebrities share their stories with the world."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Trust Our "
          subtitle="  Ghostwriters"
          title2="For Your Voice!"
          subtitle1="How we work?"
          subtitle1Desc="At Random House Publishers, we pride ourselves on being the conduit through which your imagination flows into the world. Our ghostwriting service is designed to empower authors like you to bring your stories to life, even if you need a little extra support along the way. Here’s how we work for you:"
          subtitle2="    Tailored Collaborations?"
          subtitle2Desc="We understand that every author is unique, and so are their needs. That’s why we offer personalized ghostwriting services tailored to your specific vision and requirements. Whether you have a fully fleshed-out plot or just a spark of an idea, our team of experienced ghostwriters will work closely with you to bring your story to fruition."
          subtitle3="  Expert Guidance"
          subtitle3Desc="Writing a book can be a daunting task, but you don’t have to go it alone. When you choose Random House Publishers, you gain access to a team of seasoned professionals who are passionate about storytelling. From brainstorming sessions to plot development and character arcs, we’ll be there to guide you every step of the way."
          subtitle3Desc2="Writing a book can be a daunting task, but you don’t have to go it alone. When you choose Random House Publishers, you gain access to a team of seasoned professionals who are passionate about storytelling. "
          image={sec2img}
          imgClass="ghost-img2"
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

export default GhostWriter;
