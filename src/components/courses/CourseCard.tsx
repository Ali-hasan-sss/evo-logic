import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Star, Users } from "lucide-react";
import { fadeIn } from "./animation-variants";
import type { Course } from "./course-data";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-card rounded-lg shadow-lg overflow-hidden border border-border"
    >
      <div className="h-48 relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.label && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {course.label}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-muted-foreground mb-4">{course.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center mb-2 sm:mb-0">
            <Users className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground mr-4">
              {course.level}
            </span>

            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground">
              {course.duration}
            </span>
          </div>

          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-muted-foreground text-sm ml-1">
              ({course.reviews} reviews)
            </span>
          </div>
        </div>

        <Button className="w-full" asChild>
          <Link to={`/contact?course=${course.id}`}>Enroll Now</Link>
        </Button>
      </div>
    </motion.div>
  );
};
