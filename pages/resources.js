import Head from "next/head";
import Image from "next/image";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Rodrigo Almonte | Resources</title>
        <meta name="description" content="Rodrigo Almonte peruvian guitarist and composer based in Dublin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <div className="container-img">
        <div className="cover">
          <Image
            src="/images/media/6.jpg"
            layout="fill"
            objectFit="cover"
            alt="bio"
          />
        </div>
      </div>
      <div className="container">
        <section className="album__description">
          <h2>Resources</h2>
          <hr />
          <p>Coming soon</p>
        </section>
      </div>
      <Articles></Articles>
      <Footer></Footer>
    </>
  );
}
