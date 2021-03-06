import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Media() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <title>Rodrigo Almonte | Media</title>
        <meta name="description" content="Rodrigo Almonte peruvian guitarist and composer based in Dublin" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Header></Header>

      <div className="container">
        <section className="media">
          <h2>Media</h2>
          <hr />
          <Slider {...settings}>
            <div className="media-slide">
              <Image
                src="/images/media/1.jpg"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <div className="media-slide">
              <Image
                src="/images/media/2.jpg"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <div className="media-slide">
              <Image
                src="/images/media/3.jpg"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <div className="media-slide">
              <Image
                src="/images/media/4.jpg"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <div className="media-slide">
              <Image
                src="/images/media/5.jpg"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <div className="media-slide">
              <Image
                src="/images/media/6.jpg"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <div className="media-slide">
              <Image
                src="/images/media/7.jpeg"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
          </Slider>
        </section>
      </div>

      <Articles></Articles>
      <Footer></Footer>
    </>
  );
}
