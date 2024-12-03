import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import GhostWriter from "../screens/GhostWriter";
import FaithWriter from "../screens/FaithWiter";
import BookEditing from "../screens/BookEditing";
import BookPublishing from "../screens/BookPublishing";
import BookMarketing from "../screens/BookMarketing";
import CoverDesign from "../screens/CoverDesign";
import AudioBookDesign from "../screens/AudioBookDesign";
import BookTrailer from "../screens/BookTrailer";
import Illustration from "../screens/Illustration";
import ChildrenIllustration from "../screens/ChildrenIllustration";
import ChildrenBookPrinting from "../screens/ChildrenBookPrinting";
import WebsiteAuthor from "../screens/WebsiteAuthor";
import CommicIllustration from "../screens/CommicIllustration";

import BookFormatting from "../screens/BookFormatting";
import ProofReading from "../screens/ProofReading";
import SocialMediaMarketing from "../screens/SocialMediaMarketing";
import EBookSEO from "../screens/EBookSEO";
import AmazonPrinting from "../screens/AmazonPrinting";
import BookReview from "../screens/BookReview";
import PrPublication from "../screens/PrPublication";

const Router = () => {
  return (
    <BrowserRouter basename="falconbookwriting">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ghost-writer" element={<GhostWriter />} />
        <Route path="/faith-writer" element={<FaithWriter />} />
        <Route path="/book-editing" element={<BookEditing />} />
        <Route path="/book-publishing" element={<BookPublishing />} />
        <Route path="/book-marketing" element={<BookMarketing />} />
        <Route path="/cover-design" element={<CoverDesign />} />
        <Route path="/audio-book-design" element={<AudioBookDesign />} />
        <Route path="/book-trailer" element={<BookTrailer />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route
          path="/children-illustration"
          element={<ChildrenIllustration />}
        />
        <Route
          path="/children-book-printing"
          element={<ChildrenBookPrinting />}
        />
        <Route path="/website-author" element={<WebsiteAuthor />} />
        <Route path="/commic-illustration" element={<CommicIllustration />} />

        {/* New Pages */}
        <Route path="/book-formatting" element={<BookFormatting />} />
        <Route path="/proof-reading" element={<ProofReading />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/eBook-seo" element={<EBookSEO />} />
        <Route path="/amazon-printing" element={<AmazonPrinting />} />
        <Route path="/book-review" element={<BookReview />} />
        <Route path="/pr-publication" element={<PrPublication />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
