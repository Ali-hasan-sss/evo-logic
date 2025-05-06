import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Laptop,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden hero-gradient pt-16">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">{t("home.hero.title")}</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                {t("home.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start rtl:space-x-reverse">
                <Button size="lg" asChild>
                  <Link to="/services">{t("home.hero.buttons.services")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">{t("home.hero.buttons.contact")}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Developer working on code"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              {t("home.services.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.services.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Web Development */}
            <motion.div
              className="bg-card rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-border"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <Laptop className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Custom websites and web applications built with modern
                technologies to deliver outstanding performance and user
                experience.
              </p>
              <Link
                to="/services#web-development"
                className="text-primary inline-flex items-center font-medium"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
              </Link>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              className="bg-card rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-border"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
              <p className="text-muted-foreground mb-6">
                Native and cross-platform mobile applications that provide
                seamless experiences across all devices and operating systems.
              </p>
              <Link
                to="/services#mobile-development"
                className="text-primary inline-flex items-center font-medium"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
              </Link>
            </motion.div>

            {/* Tech Education */}
            <motion.div
              className="bg-card rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-border"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tech Education</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive courses in modern web and mobile technologies to
                help you enhance your skillset and advance your career.
              </p>
              <Link
                to="/courses"
                className="text-primary inline-flex items-center font-medium"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
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
              {t("home.featuredCourses.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.featuredCourses.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Course 1 */}
            <motion.div
              className="bg-card rounded-lg shadow-lg overflow-hidden border border-border"
              variants={fadeIn}
            >
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="React Course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Modern React Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn to build powerful, interactive web applications with
                  React and related technologies.
                </p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">4.9</span>
                    <span className="text-muted-foreground text-sm ml-1">
                      (128 reviews)
                    </span>
                  </span>
                  <Button asChild>
                    <Link to="/courses#react">View Course</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Course 2 */}
            <motion.div
              className="bg-card rounded-lg shadow-lg overflow-hidden border border-border"
              variants={fadeIn}
            >
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="TypeScript Course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  TypeScript Mastery
                </h3>
                <p className="text-muted-foreground mb-4">
                  Master TypeScript to build robust, scalable applications with
                  improved developer experience.
                </p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">4.8</span>
                    <span className="text-muted-foreground text-sm ml-1">
                      (94 reviews)
                    </span>
                  </span>
                  <Button asChild>
                    <Link to="/courses#typescript">View Course</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">{t("home.featuredCourses.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              {t("home.testimonials.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.testimonials.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Testimonial 1 */}
            <motion.div
              className="bg-card rounded-lg shadow-lg p-6 border border-border"
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">
                    CEO, TechStart
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground">
                "Logic Tech transformed our outdated website into a modern,
                user-friendly platform that has significantly improved our
                customer engagement and increased our conversion rates."
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-card rounded-lg shadow-lg p-6 border border-border"
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">
                    CTO, InnovateCorp
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground">
                "The mobile app developed by Logic Tech has been a game-changer
                for our business. Their technical expertise and commitment to
                quality are unmatched."
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-card rounded-lg shadow-lg p-6 border border-border"
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Emily Chen</h4>
                  <p className="text-sm text-muted-foreground">
                    Developer, StartupX
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground">
                "I took Logic Tech's React course and it completely changed my
                career. The curriculum was comprehensive and the instructors
                were incredibly knowledgeable."
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
              {t("home.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("home.cta.description")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">{t("home.cta.button")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
