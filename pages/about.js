import Head from "next/head";
import Image from "next/image";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <>
      <Head>
        <title>Rodrigo Almonte | About</title>
        <meta name="description" content="Rodrigo Almonte peruvian guitarist and composer based in Dublin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <div className="container-img">
        <div className="cover">
          <Image
            src="/images/BIOGRAFIA.jpg"
            layout="fill"
            objectFit="cover"
            alt="bio"
          />
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="image">
            <Image
              src="/images/media/8.jpg"
              layout="fill"
              objectFit="cover"
              alt="bio"
            />
          </div>
          <section className="about__description">
            <h2>About</h2>
            <hr />
            <div className="content">
              <p>
                Rodrigo Almonte is a Peruvian guitarist and composer based in
                Dublin. He has played extensively on the Peruvian and European
                jazz scene with his own different musical projects. His lyrical
                melodies, fresh chords and intricate rhythms are equally present
                and well-balanced on his solos and compositions. With his South
                American and contemporary jazz influences, Almonte brings a
                unique approach to music.
              </p>
              <ul>
                <li>Co-founder of the Peruvian Jazz Project.</li>
                <li>
                  B.A. in Jazz Performance (Faculdade Souza Lima & Berklee /
                  Newpark School of Music)
                </li>
                <li>
                  Recipient of the Hanze Scholarship for his Master Studies.
                </li>
                <li>
                  M.A. Cum Laude in Jazz Performance (Prince Claus
                  Conservatoire)
                </li>
                <li>
                  Recipient of Dlr Creative Ireland Professional Development and
                  Mentoring Bursary 2021
                </li>
                <li>
                  Main Teachers : Lage Lund, Yotam Silberstein, Frank Wingold,
                  Lupa Santiago, Tommy Halferty, Bert Pfeiffer.
                </li>
              </ul>
              <p>
                Born in Arequipa, Perú, Rodrigo Almonte started his musical
                studies from an early age immersing himself in Peruvian Music
                and later influenced by blues, latin music and jazz. In 2013 he
                won a scholarship to study at Souza Lima Conservatory in Sao
                Paulo, Brazil. At the same time he studied Composition and
                Arranging at EMESP in Sao Paulo, Brazil. In 2015 he went back to
                Peru to focus on studying the basis of Afro Peruvian and Andean
                Peruvian Rhythms with masters like Andres Prado and Hugo
                Alcazar. Almonte was awarded a scholarship to finish his studies
                in the prestigious Newpark Music Centre in Dublin, Ireland.
              </p>
              <p>
                In 2018 Almonte was awarded the Hanze Scholarship to study a
                Master Degree in Jazz Performance at Prince Claus Conservatory
                in Groningen, Holland with a semester abroad in NYC, where he
                received lessons from some of the finest musicians from the New
                York Jazz Scene and graduated Cum Laude.
              </p>
              <p>
                Some of his mentors were: Lage Lund, Yotam Silberstein, Victor
                Gould, Tommy Halferty, Lupa Santiago, among others.
              </p>
              <p>
                Rodrigo is the co-founder of <b>Peruvian Jazz Project</b> and
                has recorded with various projects in Peru, Brazil and Ireland
                and aims to release his debut album “Distancia” as a leader
                soon.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Articles></Articles>
      <Footer></Footer>
    </>
  );
}
