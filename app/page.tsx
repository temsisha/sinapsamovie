import Link from "next/link";

export default function Home() {
    return (
        <section className="hero">
          <div className="container pad-hero">
            <div className="hero-inner">
              <span className="hero-pill">Learn build. Ship</span>
              <h1 className="hero-title">Practical courses for developers</h1>
              <p className="hero-lede">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam veniam nulla, tenetur cumque quisquam maxime quibusdam sapiente deleniti hic ab repudiandae eos beatae laboriosam. Iusto natus iure eius dolores.</p>
              <div className="hero-actions">
                <Link href="/courses" className="btn btn-primary">Browse Courses</Link>
              </div>
            </div>
          </div>
        </section>
    );
}