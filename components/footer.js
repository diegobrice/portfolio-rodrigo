export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="container">
          <div className="link__item">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="concerts">Concerts</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="distancia">Distancia</a>
              </li>
              <li>
                <a href="media">Media</a>
              </li>
              <li>
                <a href="shop">Shop</a>
              </li>
              <li>
                <a href="connect">Connect</a>
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
