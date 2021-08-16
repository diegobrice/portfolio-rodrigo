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
                <Link href="connect">
                  <a>Connect</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link__item">
            <h3>Connect</h3>
            <ul>
              <li>
                <a href="concerts">Facebook</a>
              </li>
              <li>
                <a href="concerts">Twitter</a>
              </li>
              <li>
                <a href="concerts">Youtube</a>
              </li>
              <li>
                <a href="concerts">Patreon</a>
              </li>
            </ul>
          </div>
          <div className="link__item">
            <h3>Booking</h3>
            <ul>
              <li>
                <a href="concerts">Email</a>
              </li>
              <li>
                <a href="concerts">Phone</a>
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
