import type { Course } from "@/lib/data";
import { headers } from "next/headers";
import CourseCard from "@/components/CourseCard";

async function fetchCoursesFromAPI(q: string): Promise<{count: number, courses: Course[]} | null> {
    const headersList = await headers();
    const host = headersList.get("host") ?? "localhost:3000";
    const proto = headersList.get("x-forwarded-proto") ?? "http";
    const url = `${proto}://${host}/api/courses?q=${encodeURIComponent(q)}`;
    const res = await fetch(url, { cache: "no-store" });

    if(!res.ok) return null;
    return res.json();

}

export default async function SearchPage({searchParams}: {searchParams: Promise<{q?: string}>}) {
   const sp = await searchParams;
   const raw = sp.q;
   const trimmed = raw ? raw.trim() : ""; 
   const data = await fetchCoursesFromAPI(trimmed);

   const { count, courses } = data ?? {
    count: 0,
    courses: [],
    };
   
   return (
    <section>
        <div className="container">
            <h3 className="title-page">Found {count} {count === 1 ? "movie" : "movies"} </h3>
            <div className="grid-cards">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} instructorName='' />
                ))}
            </div>
        </div>
    </section>
   )
}