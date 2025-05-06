import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Heart,
  LineChart,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
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
              About <span className="gradient-text">Logic Tech</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are a team of passionate developers, designers, and educators
              dedicated to creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, Logic Tech began as a small team of developers
                with a shared vision: to make cutting-edge technology accessible
                to businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a web development agency quickly expanded as we
                recognized the growing need for comprehensive digital solutions
                and quality tech education.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Today, we're proud to have helped hundreds of businesses
                transform their digital presence and trained the next generation
                of developers through our educational programs.
              </p>
              <Button asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Our Team"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              Driving innovation and excellence in everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card rounded-lg shadow-lg p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To empower businesses and individuals through innovative digital
                solutions and comprehensive tech education that drives
                real-world success.
              </p>
              <p className="text-muted-foreground">
                We strive to create technology that not only meets current needs
                but anticipates future challenges, ensuring our clients stay
                ahead in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg shadow-lg p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <LineChart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                To be a leading force in the digital transformation movement,
                recognized for excellence in web and mobile development, as well
                as tech education.
              </p>
              <p className="text-muted-foreground">
                We envision a world where technology is accessible,
                understandable, and beneficial to all businesses, regardless of
                their size or industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              The talented individuals behind Logic Tech's success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Team Member 1 */}
            <motion.div
              className="bg-card rounded-lg overflow-hidden border border-border"
              variants={fadeIn}
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-full w-full flex items-center justify-center text-white">
                  <Users className="h-20 w-20" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                <p className="text-muted-foreground">CEO & Founder</p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="bg-card rounded-lg overflow-hidden border border-border"
              variants={fadeIn}
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full w-full flex items-center justify-center text-white">
                  <Users className="h-20 w-20" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Michael Chen</h3>
                <p className="text-muted-foreground">CTO</p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="bg-card rounded-lg overflow-hidden border border-border"
              variants={fadeIn}
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 h-full w-full flex items-center justify-center text-white">
                  <Users className="h-20 w-20" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Emma Rodriguez</h3>
                <p className="text-muted-foreground">Lead Designer</p>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              className="bg-card rounded-lg overflow-hidden border border-border"
              variants={fadeIn}
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-700 to-orange-800 h-full w-full flex items-center justify-center text-white">
                  <Users className="h-20 w-20" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">James Wilson</h3>
                <p className="text-muted-foreground">Lead Developer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
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
              className="bg-card rounded-lg p-6 text-center border border-border"
              variants={fadeIn}
            >
              <Trophy className="h-12 w-12 mx-auto text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every project we undertake,
                delivering solutions that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-6 text-center border border-border"
              variants={fadeIn}
            >
              <Heart className="h-12 w-12 mx-auto text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Passion</h3>
              <p className="text-muted-foreground">
                Our passion for technology drives us to stay at the forefront of
                industry trends and best practices.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-6 text-center border border-border"
              variants={fadeIn}
            >
              <Award className="h-12 w-12 mx-auto text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency and honesty, building trust with
                our clients and students.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              Join Our Journey
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with us to bring your digital vision to life or enhance
              your tech skills through our courses.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
