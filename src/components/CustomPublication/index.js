import React from "react";
import {
  polygon01,
  polygon03,
  publicationBook1,
  publicationBook2,
} from "../../asserts/images";

const CustomPublication = () => {
  return (
    <>
      <section className="publication_sec sec_padding">
        <img src={polygon01} className="publication_polygon" alt="polygon" />
        <img src={polygon03} className="publication_polygon_3" alt="polygon" />
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-10 mx-auto">
              <div
                className="publication_images"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <img
                  draggable={false}
                  src={publicationBook1}
                  className="publicationBook1"
                  alt=""
                />
                <img
                  draggable={false}
                  src={publicationBook2}
                  className="publicationBook2"
                  alt=""
                />
                <div className="audio_player">
                  <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10 mx-auto">
              <div className="publication_content">
                <div className="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Paperback <br />
                    <span class="color-red">Publication</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    At Falcon Book Writing, we offer paperback publication services to help bring your story to life. Whether you're a first-time author or an experienced writer, we handle everything from formatting to printing, ensuring your book is ready for readers. Our paperback options are affordable, high-quality, and available in various sizes, so you can choose the one that best fits your needs. With our paperback publication service, you’ll have a professional-looking book in your hands in no time.
                  </p>
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    Online <br />
                    <span class="color-red">Publication</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    Falcon Book Writing also offers hardcover publication for those who want a more premium feel for their books. A hardcover book gives your work a strong, lasting presence on shelves. We provide top-notch printing and binding, ensuring that your book has the durability and elegance it deserves. With our hardcover publication service, you can create a beautiful, collectible edition of your book, perfect for readers who appreciate quality. Let us help you publish your work in the finest way possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomPublication;
