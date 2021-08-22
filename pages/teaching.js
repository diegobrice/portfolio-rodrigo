import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Teaching() {
  return (
    <>
      <Head>
        <title>Rodrigo Almonte | Teaching</title>
        <meta name="description" content="Rodrigo Almonte peruvian guitarist and composer based in Dublin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <div className="container-img">
        <div className="cover">
          <Image
            src="/images/pic-rodrigo-color.png"
            layout="fill"
            objectFit="contain"
            alt="bio"
          />
        </div>
      </div>
      <div className="container">
        <section className="album__description">
          <h2>Mussic Lessons</h2>
          <hr />
          <p>
            Are you interested in improving your abilities and knowledge in :
            Jazz, Guitar, Harmony (Music Theory), Improvisation, Composition,
            Peruvian Music, Brazilian Music, Arranging and Orchestration, among
            other musical topics?
          </p>
          <p>
            Rodrigo Almonte has been teaching music over the last 10 years to
            students of all ages around the world.
          </p>
          <p>
            With higher studies internationally, a Cum Laude Master degree
            awarded in Jazz Performance from Prince Claus Conservatorium in The
            Netherlands and the ability to teach fluently in English, Spanish
            and Portuguese, Rodrigo has gathered the best techniques and
            methodology to teach the art of music in a{" "}
            <b>unique and efficient way</b> that is tailored to your personal
            needs and goals.
          </p>
        </section>
        <section className="section__grid">
          <div>
            <div className="img-container">
              <Image
                src="/images/lessons/1.png"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <h3>Harmony Lessons</h3>
            <p>
              Beginner to Advance Music Theory to apply in you playing and
              composing.
            </p>
          </div>
          <div>
            <div className="img-container">
              <Image
                src="/images/lessons/4.png"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <h3>Guitar Lessons</h3>
            <p>
              Acoustic and Electric guitar through different styles and levels.
            </p>
          </div>
          <div>
            <div className="img-container">
              <Image
                src="/images/lessons/2.png"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <h3>Rhythmic Studies</h3>
            <p>
              Strengthen your inner rhythm and be your own drummer regardless of
              what instrument you play!{" "}
            </p>
          </div>
          <div>
            <div className="img-container">
              <Image
                src="/images/lessons/3.png"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <h3>Ear Training</h3>
            <p>Learn to listen, detect and fully understand music</p>
          </div>
          <div>
            <div className="img-container">
              <Image
                src="/images/lessons/4.png"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <h3>Composition Lessons</h3>
            <p>
              Learn how to create tunes from a simple leadsheet to a big band or
              orchestral composition
            </p>
          </div>

          <div>
            <div className="img-container">
              <Image
                src="/images/lessons/1.png"
                layout="fill"
                objectFit="contain"
                alt="bio"
              />
            </div>
            <h3>Arranging Lessons</h3>
            <p>
              Transform any piece of music into whatever colours and instruments
              you hear in your mind.
            </p>
          </div>
        </section>
        <section className="contact-me">
          <h2>Contact me today!</h2>
          <Link href="mailto:rodrigoalmonteguitar@gmail.com">
            <a className="btn" target="_blank">
              Email
            </a>
          </Link>
          <Link href="tel:+353-830279715">
            <a className="btn">Phone</a>
          </Link>
        </section>
      </div>
      <Articles></Articles>
      <Footer></Footer>
    </>
  );
}
