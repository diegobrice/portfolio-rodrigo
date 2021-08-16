export default function Album() {
  return (
    <section className="album">
      <div className="album__image">
        <img src="/images/distancia_album.jpg" alt="Vercel Logo" />
      </div>
      <div className="album__content">
        <div>
          <h2>DISTANCIA</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            magni eius, ducimus quo beatae labore eveniet sit ipsum placeat
            nostrum, ut corrupti at? Natus quas amet voluptatibus accusamus
            praesentium dignissimos!
          </p>
          <h3>COMING 29/10/2021</h3>
          <a href="/distancia" className="btn">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
