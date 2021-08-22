import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Peru() {
  return (
    <>
      <Head>
        <title>Rodrigo Almonte | Peru</title>
        <meta
          name="description"
          content="Rodrigo Almonte peruvian guitarist and composer based in Dublin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <div className="container-img">
        <div className="cover">
          <Image
            src="/images/peruvian.jpg"
            layout="fill"
            objectFit="contain"
            alt="bio"
          />
        </div>
      </div>
      <div className="container">
        <section className="album__description">
          <h2>Peruvian Jazz Project</h2>
          <hr />
          <p>
            PERUVIAN JAZZ PROJECT is a musical educational project that
            generates music recordings, scores, play alongs and videos of
            traditional Peruvian music arranged in a personal way, thus creating
            a testimony of educational and audiovisual material.
          </p>
          <p>
            Almonte, Betancourt and Calmet present a unique musical proposal
            through this compendium and evolution process.
          </p>
          <p>
            As a community project, everybody is welcome to get aboard the
            PERUVIAN JAZZ PROJECT by supporting us through our different
            platforms.
          </p>
          <p>
            With the release of their first album RECUTECU, the Peruvian Jazz
            Project is aiming higher and looking at a soon to be released second
            album and working towards the release of the first book of
            traditional Peruvian music lead sheet compilations.
          </p>
          <p>
            For any bookings for concerts and masterclasses, please contact us
            at{" "}
            <a
              className="color-black"
              href="mailto:peruvianjazzproject@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              peruvianjazzproject@gmail.com
            </a>
          </p>
          <p>
            <b>SUPPORT US AT OUR</b>
          </p>
          <Link href="https://www.patreon.com/peruvianjazzproject">
            <a className="btn" target="_blank">
              Patreon
            </a>
          </Link>
          <Link href="https://peruvianjazzproject.bandcamp.com/">
            <a className="btn" target="_blank">
              Bandcamp
            </a>
          </Link>
        </section>
      </div>
      <div className="container-img">
        <div className="cover">
          <Image
            src="/images/peruvian-logo.png"
            layout="fill"
            objectFit="contain"
            alt="bio"
          />
        </div>
      </div>
      <Articles></Articles>
      <Footer></Footer>
    </>
  );
}
