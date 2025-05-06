import { motion } from "framer-motion";
import { Code, ThumbsUp, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "./animation-variants";

export const LearningExperience = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Learning Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Our courses combine theory with practical application to ensure you
            gain real-world skills.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-card rounded-lg p-6 border border-border"
            variants={fadeIn}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Expert Instructors</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals with years of experience in
              their fields.
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-lg p-6 border border-border"
            variants={fadeIn}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Hands-On Projects</h3>
            <p className="text-muted-foreground">
              Apply your learning through practical projects that simulate
              real-world scenarios.
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-lg p-6 border border-border"
            variants={fadeIn}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <ThumbsUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Ongoing Support</h3>
            <p className="text-muted-foreground">
              Access to community forums and instructor support even after
              course completion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
