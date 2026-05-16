import { NextResponse } from "next/server";
import { getAllCourses } from "@/lib/data";

export async function GET(request: Request) {
   const {searchParams} = new URL(request.url);
   const query = searchParams.get("q")?.trim() ?? "";
   let courses = getAllCourses();

   if (query) {
     const needle = query.toLowerCase();
     courses = courses.filter(
         (course) => course.title.toLowerCase().includes(needle)
     )
   }

   return NextResponse.json({
        count: courses.length,
        courses: courses
    });

}