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

import { childrenBookPrintingImg2 } from "../../asserts/images";

const ChildrenBookPrinting = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="childrenBookPrintingBg"
          title="Printing Pages Filled With Magic, "
          subtitle=" Just For Kids"
          para="Random House Publishers's Book Illustration Service delivers captivating visual narratives that breathe life into every story. With a meticulous blend of creativity and craftsmanship, our team of seasoned illustrators transforms words into vibrant imagery, seamlessly complementing the essence of each manuscript. Whether it's intricate line drawings, vibrant digital illustrations, or evocative cover  "
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Every Page A Journey, Every Book "
          subtitle=" An Adventure"
          title2="For Children"
          subtitle1="How we work?"
          description="Random House Publishers's Book Illustration Service operates as a comprehensive creative hub, offering authors a platform to transform their literary concepts into visually stunning works of art. The process begins with an in-depth consultation where authors articulate their vision, themes, and desired aesthetic. Skilled illustrators, selected based on their expertise and compatibility with the project, then collaborate closely with the author to translate these ideas into captivating visuals. This collaborative approach ensures that the illustrations not only complement the text but also enhance the narrative, evoking emotions and immersing readers in the story's world. From character design to setting development, every aspect of the illustration process is exactly created to resonate with the target audience and amplify the impact of the author's work. Through this personalized and attentive service, Random House Publishers empowers authors to get their creativity and produce books that resonate deeply with readers, establishing lasting connections through the marriage of words and imagery."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={childrenBookPrintingImg2}
          imgClass="childrenBookPrintingImg2"
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

export default ChildrenBookPrinting;
