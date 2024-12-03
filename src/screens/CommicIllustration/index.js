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

import { commicIllustrationImg2 } from "../../asserts/images";

const CommicIllustration = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="commicIllustrationBg"
          title="Supercharge Your Storyline With Our"
          subtitle=" Comic Creations!"
          para="We believe that every children's book deserves to come alive with vibrant characters that leap off the page and into the hearts of young readers. That's why we're proud to offer our excellent children's book illustration service, where imagination knows no bounds and creativity flourishes."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Discover the Power of  "
          subtitle="  Visual Storytelling"
          title2="With Us"
          subtitle1="How we work?"
          description="Our approach to children's book illustration is a collaborative and imaginative journey that begins with inspiration and ends with enchantment. We work closely with authors, editors, and designers to create illustrations that flawlessly intertwine with the narrative, infusing each scene with vibrant colors, intricate details, and boundless creativity. From sketching rough drafts to adding the final digital flourishes, every step of our process is infused with passion and dedication. We strive for perfection, welcoming feedback, and iteration to ensure that our illustrations captivate young readers and ignite their imaginations. At the heart of it, all lies a profound love for storytelling and a commitment to sparking joy and wonder in the hearts of children around the world."
          description2="Random House Publishers's Book Illustration Service operates as a comprehensive creative hub, offering authors a platform to transform their literary concepts into visually stunning works of art. The process begins with an in-depth consultation where authors articulate their vision, themes, and desired aesthetic. Skilled illustrators, selected based on their expertise and compatibility with the project, then collaborate closely with the author to translate these ideas into captivating visuals. This collaborative approach ensures that the illustrations not only "
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={commicIllustrationImg2}
          imgClass="commicIllustrationImg2"
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

export default CommicIllustration;
