import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { fadeIn } from "./animation-variants";

export const CourseSchedule = () => {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Course Schedule
          </h2>
          <p className="text-lg text-muted-foreground">
            Plan your learning journey with our upcoming course dates.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-6 border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pb-4 border-b border-border">
              <div>
                <h3 className="text-lg font-medium">
                  Modern React Development
                </h3>
                <p className="text-muted-foreground">
                  8 weeks, online with live sessions
                </p>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span>Starts June 15, 2025</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pb-4 border-b border-border">
              <div>
                <h3 className="text-lg font-medium">TypeScript Mastery</h3>
                <p className="text-muted-foreground">
                  5 weeks, online with live sessions
                </p>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span>Starts July 10, 2025</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pb-4 border-b border-border">
              <div>
                <h3 className="text-lg font-medium">Next.js for Production</h3>
                <p className="text-muted-foreground">
                  6 weeks, online with live sessions
                </p>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span>Starts August 5, 2025</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Tailwind CSS in Practice
                </h3>
                <p className="text-muted-foreground">
                  4 weeks, online with live sessions
                </p>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span>Starts September 1, 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
