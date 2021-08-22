import Link from "next/link";
import Image from "next/image";

export default function Album() {
  return (
    <section className="album">
      <div className="album__image">
        <Image
          src="/images/distancia_album.jpg"
          layout="responsive"
          width="100"
          height="100"
          alt="bio"
        />
      </div>
      <div className="album__content">
        <div>
          <h2>DISTANCIA</h2>
          <p>
            Last year I had the privilege of getting together in the studio with
            some really great musicians to record my own compositions for my
            debut album, DISTANCIA.
          </p>
          <p>
            DISTANCIA is the representation of my musical journey throughout the
            years, from my life growing up in Peru, through my adventures in
            Brazil all the way to my experiences in Europe and New York, more
            importantly here in my new homeland, Ireland. All of these
            experiences are expressed through the language of Jazz, improvised
            music and South American rhythms.
          </p>
          <h3>COMING 29/10/2021</h3>
          <Link href="/distancia">
            <a className="btn">View More</a>
          </Link>
          <Link href="https://fundit.ie/project/rodrigo-almonte-distancia-debut-album">
            <a className="btn cta" target="_blank">
              Support my debut album
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
