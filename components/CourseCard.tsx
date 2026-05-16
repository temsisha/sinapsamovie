import Link from "next/link";
import Badge from "./Badge";
import type { Course } from "@/lib/data";
import Image from "next/image";


export default function CourseCard({
    course,
    instructorName
}: {
    course: Course;
    instructorName: string;
}) {
    return (
        <Link href={`/courses/${course.slug}`} className="card-link" key={course.id}>
            <div className="card-poster">
                <Image src={course.image} alt={course.title} fill className="image" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px" />
                <div className="badge-row">
                    <Badge variant="brand" >{course.category}</Badge>
                    <Badge variant="success" >★ {course.imdbRating}</Badge>
                </div>
            </div>
            <div className="card-body">
                <h3 className="card-link-title">{course.title}</h3>
                <p className="text-muted">{course.shortDescription}</p>
                
                {/* <div className="card-footer">
                    <span>By {instructorName}</span>
                    <span className="card-footer-cta"> View Course</span>
                </div> */}
            </div>
            <div className="card-body">
                <dl className="card-meta">
                    <div>
                        <dt>Lessons</dt>
                        <dd>{course.imdbRating}</dd>
                    </div>
                    <div>
                        <dt>Duration</dt>
                        <dd>{course.duration}</dd>
                    </div>
                </dl>
            </div>
        </Link>
    )
}        