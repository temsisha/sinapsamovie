import Link from "next/dist/client/link";
export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header-inner">
                <Link href="/" className="site-logo">
                    <span className="site-logo-mark">M</span>
                    MovieHub
                </Link>
            </div>
            
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/movies">Movies</a>
                        </li>
                        <li>
                            <a href="/directors">Directors</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}