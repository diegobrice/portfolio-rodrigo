import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Distancia() {
  return (
    <>
      <Head>
        <title>Rodrigo Almonte | Distancia</title>
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
            src="/images/ALBUM-Alargado.jpg"
            layout="fill"
            objectFit="cover"
            alt="bio"
          />
        </div>
      </div>
      <div className="container">
        <section className="album__description">
          <h2>Distancia</h2>
          <hr />
          <p>
            How far do you need to go to experience music more intimately? In
            what direction should you embark on a musical journey? I can’t think
            of a straight and universal answer to these questions, but I know
            that beautiful and enticing music comes from a plethora of
            experiences, a creative journal nurtured by different cultures,
            moments in time, places in this world.
          </p>
          <p>
            Every piece of music on <b>DISTANCIA</b> is an honest representation
            of a pilgrimage of different distances that I had to walk, musically
            and geographically speaking, in order to find inspiration and to
            create a representation of myself and my experiences as a musical
            nomad.
          </p>
          <p>
            Every image on <b>DISTANCIA</b> is also a search for beauty and
            uniqueness in nature. I was inspired by photographer Kel Portman’s
            project{" "}
            <b>
              <i>Walking the Land</i>
            </b>
            , for which he decided to walk a set distance in different
            directions starting from the same place in order to capture the
            complex variety and beauty that this world has to offer, and to
            celebrate this variety by creating artistic masterpieces that are
            only possible thanks to the visual syncretism created by the
            influences of different environments.
          </p>
          <p>
            I relate this process of artistic syncretism to my musical journey;
            different distances travelled, different directions taken, different
            cultures that nurtured my way of composing and improvising, from
            classical music to contemporary jazz, passing through traditional
            Peruvian and Brazilian music.{" "}
          </p>
          <p>
            All of these influences, together with the unique musical path that
            each member of the band has walked and projected onto the
            performance, and the improvisation recorded on this album, represent
            a glimpse into a musical journey that hopefully inspires others to
            embark on their own adventure.
          </p>

          <Link href="https://fundit.ie/project/rodrigo-almonte-distancia-debut-album">
            <a target="_blank">
              <div className="container-img">
                <div className="cover">
                  <Image
                    src="/images/support.jpg"
                    layout="fill"
                    objectFit="contain"
                    alt="bio"
                  />
                </div>
              </div>
            </a>
          </Link>
        </section>
      </div>
      <Articles></Articles>
      <Footer></Footer>
    </>
  );
}
