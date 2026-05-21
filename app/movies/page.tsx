import SectionTitle from "@/components/SectionTitle";
import CoursesCatalogClient from "@/components/CoursesCatalogClient";
import { getAllCourses, getCourseCategories, getCourseLevels, getCourseRatings } from "@/lib/data";

export default function Courses() {
        const courses = getAllCourses();
        const categories = getCourseCategories();
        const levels = getCourseLevels();
        const ratings = getCourseRatings();
    return (
        <div className="pad-section">
            <div className="container">
                <div className="stack">
                    {/* <SectionTitle eyebrow="Catalog" title="All Movies" description="Browse all movies in the catalog. Use the filters to narrow them down by genre, or rating." /> */}
                    <CoursesCatalogClient courses = {courses} categories = {categories} levels = {levels} ratings = {ratings}/>
                </div>
            </div>
        </div>
    )
}