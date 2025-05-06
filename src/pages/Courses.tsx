import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  fadeIn,
  staggerContainer,
} from "@/components/courses/animation-variants";
import { courses } from "@/components/courses/course-data";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseSchedule } from "@/components/courses/CourseSchedule";
import { LearningExperience } from "@/components/courses/LearningExperience";
import { useTranslation } from "react-i18next";

const Courses = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t("courses.hero.title")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("courses.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        </div>
      </section>

      <CourseSchedule />

      <LearningExperience />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("courses.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("courses.cta.description")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">{t("courses.cta.button")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Courses;
