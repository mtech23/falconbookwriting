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

import { bookTrailerImg2, bookTrailerVideo2 } from "../../asserts/images";

const BookTrailer = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="bookTrailerBg"
          title="Experience The Essence Of Your Book In A "
          subtitle=" Cinematic Journey"
          para="Experience the essence of your favorite book in a fascinating cinematic journey with our Book Trailer service. Transporting you into the heart of the story, this dynamic trailer explains like a mini-movie, teasing the plot, introducing vibrant characters, and immersing you in the rich tapestry of the story's world. Through expertly made visuals and emotive musiC."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Creating Hype For Your Book With An Excellent  "
          subtitle=" Video Trailer"
          // title2="For Your Voice!"
          subtitle1="How we work?"
          description="Random House Publishers's Book Illustration Service operates as a comprehensive creative hub, offering authors a platform to transform their literary concepts into visually stunning works of art. The process begins with an in-depth consultation where authors articulate their vision, themes, and desired aesthetic. Skilled illustrators, selected based on their expertise and compatibility with the project, then collaborate closely with the author to translate these ideas into captivating visuals. This collaborative approach ensures that the illustrations not only complement the text but also enhance the narrative, evoking emotions and immersing readers in the story's world. From character design to setting development, every aspect of the illustration process is exactly created to resonate with the target audience and amplify the impact of the author's work. Through this personalized and attentive service, Random House Publishers empowers authors to get their creativity and produce books that resonate deeply with readers, establishing lasting connections through the marriage of words and imagery."
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={bookTrailerImg2}
          imgClass="bookTrailerImg2"
          // video={bookTrailerVideo2}
          // videoClass="tabletVideo"
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

export default BookTrailer;
