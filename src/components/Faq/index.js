import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { categorybk } from "../../asserts/images";

const Faq = () => {
  return (
    <>
      <section class="faqs_sec sec_padding">
        <div className="publishBgPattern">
          <img draggable={false} src={categorybk} alt="" />
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="sec_title">
                <h2
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  FREQUENTLY 
                  <span class="color-red"> ASKED QUESTIONS</span>
                </h2>
              </div>
            </div>
            <div class="col-lg-6 col-sm-10 mx-auto">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span class="numbering">01.</span>
                    <span class="card_btn_content">
                    What is book publishing?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Book publishing is the process of turning your written manuscript into a published book. We handle everything from formatting, cover design, printing, and making your book available to bookstores and online platforms like Amazon.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span class="numbering">02.</span>
                    <span class="card_btn_content">
                    How does ghostwriting work?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Ghostwriting means our expert writers help you write your book. You provide the ideas or story, and we write it for you, making sure it sounds like your voice. You will be credited as the author.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span class="numbering">03.</span>
                    <span class="card_btn_content">
                    What does book editing include?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Book editing is reviewing and improving your manuscript for grammar, spelling, structure, and flow. We also help with style and tone, ensuring your book is polished and ready for publication.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col-lg-6 col-sm-10 mx-auto">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span class="numbering">04.</span>
                    <span class="card_btn_content">
                    What is Falcon Book Writing?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Falcon Book Writing is a company that helps authors by offering professional writing services like book publishing, ghostwriting, editing, eBook writing, and marketing. We aim to make your book successful from start to finish.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span class="numbering">05.</span>
                    <span class="card_btn_content">
                    How experienced is Falcon Book Writing?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  We have a team of experienced writers, editors, and marketers who are passionate about books. We’ve worked with many authors to help them publish their books and reach a wider audience.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span class="numbering">06.</span>
                    <span class="card_btn_content">
                    How can I get started with Falcon Book Writing?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                  Simply contact us through our website or call us to discuss your book project. We’ll guide you through the process, from brainstorming ideas to publishing your book.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
