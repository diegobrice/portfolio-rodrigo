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
          <li className="nav-title">
            <Link href="/">
              <a>
                <h1>Rodrigo Almonte</h1>
              </a>
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
      </nav>
    </header>
  );
}
