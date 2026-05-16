export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CourseCategory =
  | "Action"
  | "Thriller"
  | "Drama"
  | "Sci-Fi"
  | "Crime";

export interface Course {
  id: string;
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  duration: string;
  imdbRating: number;
  instructorSlug: string;
  lessons: string[];
}

export interface Instructor {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  shortBio: string;
  bio: string;
}

export const instructors: Instructor[] = [
  {
    id: "i1",
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    specialty: "Director",
    shortBio:
      "British-American filmmaker known for ambitious, visually striking films.",
    bio: "Christopher Nolan is known for directing films such as The Dark Knight, Inception, Interstellar, Oppenheimer, and Dunkirk. His work often mixes large-scale spectacle with complex characters and themes.",
  },
  {
    id: "i2",
    slug: "steven-spielberg",
    name: "Steven Spielberg",
    specialty: "Director",
    shortBio: "One of the most influential directors in modern cinema.",
    bio: "Steven Spielberg is an Academy Award-winning filmmaker known for dramas, adventures, science fiction, and historical films. His films include Schindler's List, Jaws, E.T., Jurassic Park, and Saving Private Ryan.",
  },
  {
    id: "i3",
    slug: "quentin-tarantino",
    name: "Quentin Tarantino",
    specialty: "Director",
    shortBio:
      "American filmmaker known for stylized dialogue and nonlinear storytelling.",
    bio: "Quentin Tarantino is known for films such as Pulp Fiction, Reservoir Dogs, Kill Bill, Django Unchained, and Once Upon a Time in Hollywood. His style often includes sharp dialogue, crime stories, and pop-culture references.",
  },
  {
    id: "i4",
    slug: "frank-darabont",
    name: "Frank Darabont",
    specialty: "Director",
    shortBio:
      "Director and screenwriter known for emotional drama adaptations.",
    bio: "Frank Darabont is best known for directing The Shawshank Redemption, The Green Mile, and The Mist. His work often focuses on hope, friendship, justice, and human resilience.",
  },
  {
    id: "i5",
    slug: "lana-wachowski-lilly-wachowski",
    name: "Lana Wachowski & Lilly Wachowski",
    specialty: "Directors",
    shortBio:
      "Filmmaking duo known for The Matrix and bold science-fiction storytelling.",
    bio: "The Wachowskis are known for creating The Matrix franchise, blending cyberpunk, philosophy, action, and groundbreaking visual effects.",
  },
  {
    id: "i6",
    slug: "martin-scorsese",
    name: "Martin Scorsese",
    specialty: "Director",
    shortBio:
      "Legendary American director known for crime dramas and character studies.",
    bio: "Martin Scorsese is one of the most respected filmmakers in cinema history. His films include Goodfellas, Taxi Driver, Raging Bull, The Departed, and The Irishman.",
  },
  {
    id: "i7",
    slug: "robert-zemeckis",
    name: "Robert Zemeckis",
    specialty: "Director",
    shortBio:
      "American director known for emotional stories and technical innovation.",
    bio: "Robert Zemeckis directed films such as Forrest Gump, Back to the Future, Cast Away, and Who Framed Roger Rabbit. His work often combines heart, humor, and visual invention.",
  },
  {
    id: "i8",
    slug: "denis-villeneuve",
    name: "Denis Villeneuve",
    specialty: "Director",
    shortBio:
      "Canadian filmmaker known for atmospheric, visually powerful cinema.",
    bio: "Denis Villeneuve is known for films such as Dune, Dune: Part Two, Blade Runner 2049, Arrival, Sicario, and Prisoners. His style is precise, cinematic, and often visually monumental.",
  },
  {
    id: "i9",
    slug: "ridley-scott",
    name: "Ridley Scott",
    specialty: "Director",
    shortBio:
      "British filmmaker known for epic, science-fiction, and historical films.",
    bio: "Ridley Scott is known for films such as Gladiator, Alien, Blade Runner, The Martian, and Kingdom of Heaven. His work often combines strong visual style with large-scale storytelling.",
  },
  {
    id: "i10",
    slug: "david-fincher",
    name: "David Fincher",
    specialty: "Director",
    shortBio:
      "American filmmaker known for dark thrillers and precise visual style.",
    bio: "David Fincher is known for films such as Se7en, Fight Club, The Social Network, Gone Girl, and Zodiac. His films often explore obsession, control, mystery, and psychological tension.",
  },
  {
    id: "i11",
    slug: "francis-ford-coppola",
    name: "Francis Ford Coppola",
    specialty: "Director",
    shortBio:
      "Legendary American filmmaker best known for The Godfather trilogy.",
    bio: "Francis Ford Coppola is one of the most influential directors in cinema history. His films include The Godfather, The Godfather Part II, Apocalypse Now, and The Conversation.",
  },
];

export const courses: Course[] = [
  {
    id: "c1",
    slug: "the-dark-knight-2008",
    title: "The Dark Knight (2008)",
    shortDescription:
      "Batman faces the Joker, a criminal mastermind who wants to throw Gotham into chaos.",
    description:
      "The Dark Knight follows Batman as he joins forces with Jim Gordon and Harvey Dent to fight organized crime in Gotham City. Their mission becomes much more dangerous when the Joker appears and pushes the city, its heroes, and their moral limits to the edge.",
    category: "Action",
    level: "Beginner",
    duration: "2h 32m",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    imdbRating: 9.0,
    instructorSlug: "christopher-nolan",
    lessons: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman",
      "Morgan Freeman",
    ],
  },
  {
    id: "c2",
    slug: "oppenheimer-2023",
    title: "Oppenheimer (2023)",
    shortDescription:
      "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    description:
      "Oppenheimer follows the life of physicist J. Robert Oppenheimer, focusing on his role in the Manhattan Project and the personal, political, and moral consequences of creating the atomic bomb.",
    category: "Drama",
    level: "Intermediate",
    duration: "3h 00m",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    imdbRating: 8.3,
    instructorSlug: "christopher-nolan",
    lessons: [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr.",
      "Florence Pugh",
      "Josh Hartnett",
      "Kenneth Branagh",
    ],
  },
  {
    id: "c3",
    slug: "interstellar-2014",
    title: "Interstellar (2014)",
    shortDescription:
      "A group of explorers travels through a wormhole to find a new home for humanity.",
    description:
      "Interstellar is a science-fiction epic about a dying Earth, a secret space mission, and a father who must leave his children behind in order to search for humanity's future among the stars.",
    category: "Sci-Fi",
    level: "Intermediate",
    duration: "2h 49m",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    imdbRating: 8.7,
    instructorSlug: "christopher-nolan",
    lessons: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Mackenzie Foy",
      "Michael Caine",
      "Matt Damon",
      "Casey Affleck",
    ],
  },
  {
    id: "c4",
    slug: "schindlers-list-1993",
    title: "Schindler's List (1993)",
    shortDescription:
      "A businessman saves more than a thousand Jewish refugees during World War II.",
    description:
      "Schindler's List tells the story of Oskar Schindler, a German businessman who gradually becomes determined to save Jewish workers from persecution during the Holocaust.",
    category: "Drama",
    level: "Advanced",
    duration: "3h 15m",
    image: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    imdbRating: 9.0,
    instructorSlug: "steven-spielberg",
    lessons: [
      "Liam Neeson",
      "Ben Kingsley",
      "Ralph Fiennes",
      "Caroline Goodall",
      "Jonathan Sagall",
      "Embeth Davidtz",
    ],
  },
  {
    id: "c5",
    slug: "pulp-fiction-1994",
    title: "Pulp Fiction (1994)",
    shortDescription:
      "Interconnected crime stories unfold in Quentin Tarantino's cult classic.",
    description:
      "Pulp Fiction follows several connected stories involving hitmen, a boxer, a gangster's wife, and criminals in Los Angeles. The film is known for its nonlinear structure, sharp dialogue, and unforgettable characters.",
    category: "Crime",
    level: "Advanced",
    duration: "2h 34m",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    imdbRating: 8.9,
    instructorSlug: "quentin-tarantino",
    lessons: [
      "John Travolta",
      "Samuel L. Jackson",
      "Uma Thurman",
      "Bruce Willis",
      "Ving Rhames",
      "Harvey Keitel",
      "Tim Roth",
    ],
  },
  {
    id: "c6",
    slug: "the-shawshank-redemption-1994",
    title: "The Shawshank Redemption (1994)",
    shortDescription:
      "A man sentenced to life in prison finds hope, friendship, and inner freedom.",
    description:
      "The Shawshank Redemption follows Andy Dufresne, a banker imprisoned for murder, and his friendship with fellow inmate Red. Over the years, Andy holds onto hope while changing the lives of those around him.",
    category: "Drama",
    level: "Beginner",
    duration: "2h 22m",
    image: "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    imdbRating: 9.3,
    instructorSlug: "frank-darabont",
    lessons: [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
      "Gil Bellows",
    ],
  },
  {
    id: "c7",
    slug: "the-matrix-1999",
    title: "The Matrix (1999)",
    shortDescription:
      "A hacker discovers that reality may be a simulated world controlled by machines.",
    description:
      "The Matrix follows Neo, a computer hacker who learns that the world he knows is an illusion created by machines. He joins a rebellion and begins to discover his role in the fight for human freedom.",
    category: "Sci-Fi",
    level: "Intermediate",
    duration: "2h 16m",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    imdbRating: 8.7,
    instructorSlug: "lana-wachowski-lilly-wachowski",
    lessons: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
      "Gloria Foster",
      "Joe Pantoliano",
    ],
  },
  {
    id: "c8",
    slug: "goodfellas-1990",
    title: "Goodfellas (1990)",
    shortDescription:
      "The rise and fall of a mob associate inside the world of organized crime.",
    description:
      "Goodfellas follows Henry Hill as he becomes involved with the mob and experiences the attraction, danger, and destruction of life inside organized crime.",
    category: "Crime",
    level: "Advanced",
    duration: "2h 26m",
    image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    imdbRating: 8.7,
    instructorSlug: "martin-scorsese",
    lessons: [
      "Ray Liotta",
      "Robert De Niro",
      "Joe Pesci",
      "Lorraine Bracco",
      "Paul Sorvino",
      "Frank Sivero",
    ],
  },
  {
    id: "c9",
    slug: "forrest-gump-1994",
    title: "Forrest Gump (1994)",
    shortDescription:
      "A kind-hearted man witnesses and influences major moments in American history.",
    description:
      "Forrest Gump tells the life story of Forrest, a simple and honest man whose journey takes him through love, war, friendship, success, and loss while crossing paths with major historical events.",
    category: "Drama",
    level: "Beginner",
    duration: "2h 22m",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    imdbRating: 8.8,
    instructorSlug: "robert-zemeckis",
    lessons: [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise",
      "Mykelti Williamson",
      "Sally Field",
      "Haley Joel Osment",
    ],
  },
  {
    id: "c10",
    slug: "dune-part-two-2024",
    title: "Dune: Part Two (2024)",
    shortDescription:
      "Paul Atreides continues his journey among the Fremen and faces his destiny.",
    description:
      "Dune: Part Two continues the story of Paul Atreides as he joins the Fremen, seeks revenge against those who destroyed his family, and struggles with visions of a dangerous future.",
    category: "Action",
    level: "Advanced",
    duration: "2h 46m",
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    imdbRating: 8.5,
    instructorSlug: "denis-villeneuve",
    lessons: [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Javier Bardem",
      "Josh Brolin",
      "Austin Butler",
      "Florence Pugh",
    ],
  },
  {
    id: "c11",
    slug: "blade-runner-2049-2017",
    title: "Blade Runner 2049 (2017)",
    shortDescription:
      "A young blade runner uncovers a secret that could change society forever.",
    description:
      "Blade Runner 2049 follows Officer K, a blade runner who discovers a buried secret that leads him to former blade runner Rick Deckard and raises questions about identity, memory, and humanity.",
    category: "Sci-Fi",
    level: "Advanced",
    duration: "2h 44m",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    imdbRating: 8.0,
    instructorSlug: "denis-villeneuve",
    lessons: [
      "Ryan Gosling",
      "Harrison Ford",
      "Ana de Armas",
      "Robin Wright",
      "Jared Leto",
      "Sylvia Hoeks",
      "Dave Bautista",
    ],
  },
  {
    id: "c12",
    slug: "inception-2010",
    title: "Inception (2010)",
    shortDescription:
      "A skilled thief enters people's dreams to steal secrets and plant ideas.",
    description:
      "Inception follows Dom Cobb, a professional thief who specializes in extracting information from dreams. He is offered a chance to erase his past crimes if he can perform the impossible task of planting an idea inside someone's mind.",
    category: "Sci-Fi",
    level: "Advanced",
    duration: "2h 28m",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    imdbRating: 8.8,
    instructorSlug: "christopher-nolan",
    lessons: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
      "Cillian Murphy",
      "Marion Cotillard",
    ],
  },
  {
    id: "c13",
    slug: "gladiator-2000",
    title: "Gladiator (2000)",
    shortDescription:
      "A betrayed Roman general becomes a gladiator and seeks justice.",
    description:
      "Gladiator follows Maximus, a respected Roman general who is betrayed after the emperor's death. Forced into slavery and the arena, he rises as a gladiator while seeking revenge against the corrupt ruler who destroyed his life.",
    category: "Action",
    level: "Intermediate",
    duration: "2h 35m",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    imdbRating: 8.5,
    instructorSlug: "ridley-scott",
    lessons: [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed",
      "Richard Harris",
      "Djimon Hounsou",
    ],
  },
  {
    id: "c14",
    slug: "se7en-1995",
    title: "Se7en (1995)",
    shortDescription:
      "Two detectives hunt a serial killer whose crimes follow the seven deadly sins.",
    description:
      "Se7en follows detectives Somerset and Mills as they investigate a series of disturbing murders connected to the seven deadly sins. The case pulls them deeper into a dark and calculated game created by a ruthless killer.",
    category: "Thriller",
    level: "Advanced",
    duration: "2h 07m",
    image: "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    imdbRating: 8.6,
    instructorSlug: "david-fincher",
    lessons: [
      "Brad Pitt",
      "Morgan Freeman",
      "Gwyneth Paltrow",
      "Kevin Spacey",
      "R. Lee Ermey",
      "John C. McGinley",
    ],
  },
  {
    id: "c15",
    slug: "fight-club-1999",
    title: "Fight Club (1999)",
    shortDescription:
      "An office worker and a soap maker create an underground fight club.",
    description:
      "Fight Club follows a dissatisfied office worker who forms a strange friendship with Tyler Durden. Together they create an underground fight club that grows into something much larger and more dangerous.",
    category: "Drama",
    level: "Advanced",
    duration: "2h 19m",
    image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    imdbRating: 8.8,
    instructorSlug: "david-fincher",
    lessons: [
      "Edward Norton",
      "Brad Pitt",
      "Helena Bonham Carter",
      "Meat Loaf",
      "Jared Leto",
      "Zach Grenier",
    ],
  },
  {
    id: "c16",
    slug: "the-godfather-1972",
    title: "The Godfather (1972)",
    shortDescription:
      "The aging head of a crime family transfers power to his reluctant son.",
    description:
      "The Godfather tells the story of the Corleone family, one of the most powerful crime families in America. As power shifts from Vito Corleone to his son Michael, the family becomes involved in loyalty, violence, and difficult choices.",
    category: "Crime",
    level: "Advanced",
    duration: "2h 55m",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    imdbRating: 9.2,
    instructorSlug: "francis-ford-coppola",
    lessons: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton",
      "Talia Shire",
    ],
  },
];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getAllInstructors(): Instructor[] {
  return instructors;
}

export function getInstructorBySlug(slug: string): Instructor | undefined {
  return instructors.find((i) => i.slug === slug);
}

export function getCoursesByInstructor(instructorSlug: string): Course[] {
  return courses.filter((c) => c.instructorSlug === instructorSlug);
}

export function getCourseCategories(): string[] {
  return Array.from(new Set(courses.map((c) => c.category))).sort();
}

export function getCourseLevels(): string[] {
  return Array.from(new Set(courses.map((c) => c.level)));
}

export function getCourseRatings(): number[] {
  return Array.from(new Set(courses.map((c) => c.imdbRating))).sort((a, b) => b - a);
}