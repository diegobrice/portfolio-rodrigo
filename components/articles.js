import Link from "next/link";

export default function Articles() {
  return (
    <section className="details">
      <div className="details__item">
        <h2>Peruvian Jazz Project </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          dolorum consequatur.
        </p>
        <Link href="peru">
          <a className="btn">View more</a>
        </Link>
      </div>
      <div className="details__item two">
        <h2>Teaching</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          dolorum consequatur.
        </p>
        <Link href="teaching">
          <a className="btn">View more</a>
        </Link>
      </div>
      <div className="details__item">
        <h2>Resources</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          dolorum consequatur.
        </p>
        <Link href="resources">
          <a className="btn">View more</a>
        </Link>
      </div>
    </section>
  );
}
