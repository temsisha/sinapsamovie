import type { Course } from "@/lib/data";
import { headers } from "next/headers";

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

   const {count, courses} = data;
   return (
    <section>
        <h3>Found {count} courses</h3>
        {courses.map((course) => (
            <h2 key={course.id}>{course.title}</h2>
        ))}
    </section>
   )
   
}