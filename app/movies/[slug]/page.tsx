import Badge from "@/components/Badge";
import { getCourseBySlug, getInstructorBySlug } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function CourseDetailPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const course = getCourseBySlug(slug);
    if (!course) notFound();
    const instructor = getInstructorBySlug(course.instructorSlug);
    return (
        <section className="pad-section">
            <div className="container">
                <nav className="back-nav">
                    <Link href="/movies">Back to movies</Link>
                </nav>
                <div className="course-layout">
                    <div>
                        <div className="genre-tag">{course.category}</div>
                        <h1 className="title-display">{course.title}</h1>
                        <div className="meta-row">
                            <Badge variant="success" >IMDB {course.imdbRating}</Badge>
                            <span className="meta-sep">|</span>
                            <span className="meta-pill">{course.title.match(/\((\d{4})\)/)?.[1]}</span>
                            <span className="meta-pill">{course.duration}</span>
                        </div>
                        <p className="course-lede">{course.description}</p>
                        {
                         <div>
                            <div className="details-block">
                                <div className="details-heading">Movie Details</div>
                                    <div className="details-grid">
                                        <div className="detail-row">
                                            <span className="detail-label">Director</span>
                                            <span className="detail-val">{instructor?.name}</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-label">Released</span>
                                            <span className="detail-val">{course.title.match(/\((\d{4})\)/)?.[1]}</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-label">Genre</span>
                                            <span className="detail-val">{course.category}</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-label">Country</span>
                                            <span className="detail-val">{course.country}</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-label">Language</span>
                                            <span className="detail-val">{course.language}</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-label">Box Office</span>
                                            <span className="detail-val">{course.boxOffice}</span>
                                        </div>
                                    </div>
                                </div>

                            <div className="details-block">
                                <div className="details-heading">Cast</div>
                                <div className="cast-chips">
                                    {course.lessons.map((lesson, idx) => (
                                        <span key={lesson} className="cast-chip">{lesson}</span>
                                    ))}
                                </div>
                            </div>
                            <Link className="" href={`/directors/${instructor?.slug}`}>More of {instructor?.name}</Link>
                        </div>
                        }
                    </div>
                    <aside className="course-aside">
                        <div className="card-poster">
                            <Image src={course.image} alt={course.title} fill className="image" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px" />
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}