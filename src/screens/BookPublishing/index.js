import React from 'react'
import UserLayout from '../../components/Layout/UserLayout'
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

import {
    
    bookPublishingImg2,
  } from "../../asserts/images";

const BookPublishing = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="bookPublishingBg"
          title="Where Every Voice Finds Its Place In"
          subtitle=" Print"
          para="At Random House Publishers, we believe in the transformative power of words. Our legacy is built on a commitment to nurturing creativity, fostering diversity, and amplifying voices from every corner of the globe. With a rich history spanning decades, we've been at the forefront of the literary world, shaping the landscape of storytelling one book at a time."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Every Book Tells A   "
          subtitle="Story;"
          title2="Let Us Tell Yours"
          description="Random House Publishers's book publishing service operates on a foundation of editorial excellence, author-centricity, global reach, innovative marketing, and a commitment to diversity and inclusion. With a team of experienced editors dedicated to refining manuscripts, Random House Publishers ensures that every book meets the highest standards of quality. Authors receive tailored support throughout the publishing process, from development to marketing, enabling them to realize their creative and commercial goals. Leveraging a vast distribution network and cutting-edge marketing strategies, Random House Publishers reaches readers worldwide through various formats and platforms. Moreover, by actively championing diverse voices and perspectives, Random House Publishers enriches the literary landscape and fosters a more inclusive publishing industry, shaping the future of literature and inspiring readers globally."
          description2="Random House Publishers's book publishing service operates on a foundation of editorial excellence, author-centricity, global reach, innovative marketing, and a commitment to diversity and inclusion. With a team of experienced editors dedicated to refining manuscripts, Random House Publishers ensures that every book meets the highest standards of quality. Authors receive tailored support throughout the publishing process, from development to marketing, enabling them to realize their creative and commercial goals. Leveraging a vast distribution network and cutting-edge marketing strategies, Random House Publishers reaches readers worldwide through various formats and platforms. "
          // subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={bookPublishingImg2}
          imgClass="book-publishingImg2"
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
  )
}

export default BookPublishing