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
    const [rating, setRating] = useState<8 | 9 | "all">("all");
    
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return courses.filter((course) => {
            const matchesQuery = q === "" || course.title.toLowerCase().includes(q);
            const matchesCategory = category === "all" || course.category === category;
            const matchesLevel = level === "all" || course.level === level;
            const matchesRating = rating === "all" || course.imdbRating >= rating;
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
            <div className="movies-hero">
            <h1 className="movie-title">Explore the catalog</h1>
            <p className="movie-lede">Movies, directors, ratings — all in one place.</p>
            <form action="/search" method="get" className="movies-search-form">
                <input
                type="search"
                id="movies-search-q"
                className="input movies-search-input"
                name="q"
                autoComplete="off"
                placeholder="Search movies..."
                />
            </form>
        </div>
            <div className="panel">
                <div className="grid-filters">
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
                                {rating === "all" 
                                ? <button className="filter-btn imdb">All</button> 
                                : <button className="filter-btn">All</button>}
                            </Link>
                            <div className="field">
                                <Link
                                    href="?rating=9"
                                    onClick={() => setRating(9)}
                                >
                                    {rating === 9
                                        ? <button className="filter-btn imdb">+9 IMDb</button>
                                        : <button className="filter-btn">+9 IMDb</button>
                                    }
                                </Link>

                                <Link
                                    href="?rating=8"
                                    onClick={() => setRating(8)}
                                >
                                    {rating === 8
                                        ? <button className="filter-btn imdb">+8 IMDb</button>
                                        : <button className="filter-btn">+8 IMDb</button>
                                    }
                                </Link>
                            </div>
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