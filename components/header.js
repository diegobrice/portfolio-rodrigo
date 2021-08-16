import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>
              <h1>Rodrigo Almonte</h1>
            </a>
          </Link>
        </div>
        <ul>
          {/* <li>
            <a href="concerts">Concerts</a>
          </li> */}
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
          <li className="nav-title">
            <Link href="/">
              <a>
                <h1>Rodrigo Almonte</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="media">
              <a>Media</a>
            </Link>
          </li>
          {/* <li>
            <a href="shop">Shop</a>
          </li> */}
          <li>
            <Link href="connect">
              <a>Connect</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
