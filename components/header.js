export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">
            <h1>Rodrigo Almonte</h1>
          </a>
        </div>
        <ul>
          {/* <li>
            <a href="concerts">Concerts</a>
          </li> */}
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="distancia">Distancia</a>
          </li>
          <li className="nav-title">
            <a href="/">
              <h1>Rodrigo Almonte</h1>
            </a>
          </li>
          <li>
            <a href="media">Media</a>
          </li>
          {/* <li>
            <a href="shop">Shop</a>
          </li> */}
          <li>
            <a href="connect">Connect</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
