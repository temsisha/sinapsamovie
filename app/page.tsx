import Link from "next/link";

export default function Home() {
    return (
        <section className="hero">
          <div className="container pad-hero">
            <div className="hero-inner">
              <span className="hero-pill">Watch. Discover. Explore.</span>
              <h1 className="hero-title">Discover movies worth watching</h1>
              <p className="hero-lede">Explore a curated catalog of popular movies, legendary directors, genres, ratings, cast, languages, countries, and box office details — all in one place.</p>
              <div className="hero-actions">
                <Link href="/movies" className="filter-btn active">Browse Movies</Link>
              </div>
            </div>
          </div>
        </section>
    );
}