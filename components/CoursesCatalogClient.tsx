"use client";

import { instructors, type  Course } from "@/lib/data";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import Link from "next/link";

function instructorNameForCourse(course: Course): string {
    return (
        instructors.find((i) => i.slug === course.instructorSlug)?.name ?? "Unknown Instructor"
    )
}

export default function CoursesCatalogClient({ courses, categories, ratings }: { courses: Course[]; categories: string[], levels: string[], ratings: number[] }) {
    const [level, setLevel] = useState<string>("all");
    const [category, setCategory] = useState<string>("all");
    const [query, setQuery] = useState<string>("");
    const [rating, setRating] = useState<number | "all">("all");
    
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return courses.filter((course) => {
            const matchesQuery = q === "" || course.title.toLowerCase().includes(q);
            const matchesCategory = category === "all" || course.category === category;
            const matchesLevel = level === "all" || course.level === level;
            const matchesRating = rating === "all" || course.imdbRating === rating;
            return matchesQuery && matchesCategory && matchesLevel && matchesRating;
        })
    }, [query, courses,category, level, rating])

    const resetFilters = () => {
        setQuery("");
        setCategory("all");
        setLevel("all");
        setRating("all");
    }

    const isFiltering = query !== "" || category !== "all" || level !== "all" || rating !== "all";

    return (
        <div className="stack-md">
            <div className="panel">
                <div className="grid-filters">
                    {/* <div className="field">
                        <input id="course-search" type="text" className="input" placeholder="e.g. Next.js" onChange={(e) => setQuery(e.target.value)} value={query} />
                    </div> */}
                    <div className="site-nav">
                        <span className="filter-label">Genre:</span>
                        <div className="field">
                            <Link
                                href="?category=all"
                                onClick={() => setCategory("all")}
                            >
                                {category === "all" ? <button className="filter-btn active">All Categories</button> : <button className="filter-btn">All Categories</button>}
                            </Link>

                            {categories.map((categoryItem) => (
                                <Link
                                    key={categoryItem}
                                    href={`?category=${encodeURIComponent(categoryItem)}`}
                                    onClick={() => setCategory(categoryItem)}
                                >
                                    {category === categoryItem ? <button className="filter-btn active">{categoryItem}</button> : <button className="filter-btn">{categoryItem}</button>}
                                </Link>
                            ))}
                        </div>
                        <span className="filter-label">All Ratings:</span>
                            <Link
                                href="?rating=all"
                                onClick={() => setRating("all")}
                            >
                                {rating === "all" ? <button className="filter-btn active">All Ratings</button> : <button className="filter-btn">All Ratings</button>}
                            </Link>
                            {/* {rankings.map((categoryItem) => (
                                <Link
                                    key={categoryItem}
                                    href={`?category=${encodeURIComponent(categoryItem)}`}
                                    onClick={() => setCategory(categoryItem)}
                                >
                                    {category === categoryItem ? <button className="filter-btn active">{categoryItem}</button> : <button className="filter-btn">{categoryItem}</button>}
                                </Link>
                            ))} */}
                           
                    </div>
                </div>
                <div className="filter-bar">
                    {isFiltering ? (<button className="btn-link" onClick={resetFilters}>Reset Filters</button>) : null}
                </div>
            </div>
            <div className="grid-cards">
                {filtered.map((course) => (
                    <CourseCard key={course.id} course={course} instructorName={instructorNameForCourse(course)} />
                ))}
            </div>
        </div>
    )
}