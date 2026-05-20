import SectionTitle from "@/components/SectionTitle";
import { getAllInstructors } from "@/lib/data";
import Link from "next/dist/client/link";
import Image from "next/image";
import { courses } from "@/lib/data";

function initials(name: string): string {
    return name.split(" ").map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function getMoviesCountByDirectorSlug(instructorSlug: string) {
  return courses.filter((course) => course.instructorSlug === instructorSlug).length;
}
export default function Inscructors() {
    const instructorsList = getAllInstructors();
    return (
        <div className="pad-section">
            <div className="container">
                <div className="stack">
                    <SectionTitle eyebrow="FILMMAKERS" title="Directors" description="Meet the legendary directors behind some of the most iconic movies in cinema history." />
                    <div className="directors-grid">
                        {instructorsList.map((instructor) => (
                        <Link key={instructor.id} href={`/directors/${instructor.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div className="director-card">
                            <Image className="avatar" src={instructor.image} width={90} height={90} alt="..." />
                            <div className="dir-name">{instructor.name}</div>
                            <div className="dir-desc">{instructor.shortBio}</div>
                            <div className="dir-films"><span>{getMoviesCountByDirectorSlug(instructor.slug)}</span> films in catalog</div>
                            <span className="profile-link">View Profile →</span>
                        </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) }