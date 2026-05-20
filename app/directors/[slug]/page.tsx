import CourseCard from "@/components/CourseCard";
import { getCoursesByInstructor, getInstructorBySlug } from "@/lib/data";
import { notFound } from "next/dist/client/components/navigation";
import Link from "next/link"

function initials(name: string): string {
    return name.split(" ").map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

export default async function InstructorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const instructor = getInstructorBySlug(slug);
    if (!instructor) notFound();
    const tauhtCourses = getCoursesByInstructor(instructor.slug);
    return (
        <section className="pad-section">
            <div className="container">
                <nav className="back-nav">
                    <Link href="/directors">← Back to Directors</Link>
                </nav>
                <div>
                    <div className="profile-body">
                        <p className="eyebrow">{instructor.specialty}</p>
                        <h1 className="title-display">{instructor.name}</h1>
                        <p className="text-muted-sm max-prose">{instructor.bio}</p>
                    </div>
                </div>
                <div className="courses-below">
                    <h2 className="title-section">
                        Movies by {instructor.name.split(" ")[0]}
                    </h2>
                    {tauhtCourses.length === 0 ? (<span>No courses found.</span>) : (
                        <div className="grid-cards mt-sm">
                            {tauhtCourses.map((course) => (
                                <CourseCard key={course.id} course={course} instructorName={instructor.name} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}