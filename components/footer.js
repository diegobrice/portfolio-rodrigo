import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="container">
          <div className="link__item">
            <h3>Links</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="distancia">
                  <a>Distancia</a>
                </Link>
              </li>
              <li>
                <Link href="media">
                  <a>Media</a>
                </Link>
              </li>
              <li>
                <Link href="peru">
                  <a>Peru</a>
                </Link>
              </li>
              <li>
                <Link href="teaching">
                  <a>Teaching</a>
                </Link>
              </li>
              <li>
                <Link href="resources">
                  <a>Resources</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link__item">
            <h3>Connect</h3>
            <ul>
              <li>
                <Link href="https://fundit.ie/project/rodrigo-almonte-distancia-debut-album">
                  <a target="_blank">Fundit</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/rdrg.24/">
                  <a target="_blank">Facebook</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/rodrigoalmonte.music/">
                  <a target="_blank">Instagram</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UC5INDN3DJ2o3GG1jC4NiWKA/videos">
                  <a target="_blank">Youtube</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link__item">
            <h3>Booking</h3>
            <ul>
              <li>
                <a
                  href="mailto:rodrigoalmonteguitar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+353-830279715">Phone</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <p>Copyright © 2021 All rights reserved</p>
      </div>
    </footer>
  );
}
