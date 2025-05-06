export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  featured: boolean;
  label?: string;
}

export const courses: Course[] = [
  {
    id: "react",
    title: "Modern React Development",
    description:
      "Learn to build powerful, interactive web applications with React and related technologies.",
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "JavaScript", "Redux", "Hooks"],
    featured: true,
    label: "Popular",
  },
  {
    id: "nextjs",
    title: "Next.js for Production",
    description:
      "Master Next.js to build server-side rendered React applications with optimal performance.",
    level: "Advanced",
    duration: "6 weeks",
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Next.js", "React", "SSR", "API Routes"],
    featured: false,
    label: "Advanced",
  },
  {
    id: "typescript",
    title: "TypeScript Mastery",
    description:
      "Master TypeScript to build robust, scalable applications with improved developer experience.",
    level: "Intermediate",
    duration: "5 weeks",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["TypeScript", "JavaScript", "Type Systems"],
    featured: true,
    label: "New",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS in Practice",
    description:
      "Learn to rapidly build modern UIs with the utility-first CSS framework, Tailwind CSS.",
    level: "Beginner",
    duration: "4 weeks",
    rating: 4.7,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Tailwind CSS", "CSS", "Responsive Design"],
    featured: false,
    label: "Beginner-Friendly",
  },
];
