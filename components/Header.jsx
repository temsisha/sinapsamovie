import Link from "next/dist/client/link";
export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header-inner">
                <Link href="/" className="site-logo">
                    <span className="site-logo-mark">L</span>
                    LearnHub
                </Link>
            </div>
            <div>
                {/* <nav className="site-nav">
                    <a href="/" className="site-nav-link">Home</a>
                    <a href="/courses" className="site-nav-link">Movies</a>
                    <a href="/instructors" className="site-nav-link">Directors</a>
                </nav> */}
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/courses">Movies</a>
                        </li>
                        <li>
                            <a href="/instructors">Directors</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <form action="/search" method="get" className="header-search">
                    <input type="search" id="header-search-q" className="input header-search-input" name="q" autoComplete="off" placeholder="Search courses..."/>
                    <button type="submit" className="btn btn-primary btn-sm">Search</button>
                </form>
            </div>
        </header>
    )
}