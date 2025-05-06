import express from "express";
import { courses } from "../../src/components/courses/course-data";

export const coursesRouter = express.Router();

// Get all courses
coursesRouter.get("/", (req, res) => {
  res.json(courses);
});

// Get course by id
coursesRouter.get("/:id", (req, res) => {
  const course = courses.find((course) => course.id === req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

// Create a new course (admin only)
coursesRouter.post("/", (req, res) => {
  // In a real app, you would validate the request and authenticate the user
  const newCourse = req.body;

  // For now, just return the course as if it was created
  res.status(201).json(newCourse);
});

// Update a course (admin only)
coursesRouter.put("/:id", (req, res) => {
  const courseId = req.params.id;
  const updatedCourse = req.body;

  // In a real app, you would update the course in a database
  res.json(updatedCourse);
});

// Delete a course (admin only)
coursesRouter.delete("/:id", (req, res) => {
  const courseId = req.params.id;

  // In a real app, you would delete from a database
  res.json({ message: `Course ${courseId} deleted` });
});
