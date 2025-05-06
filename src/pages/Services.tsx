import {
  Check,
  Code,
  Database,
  Layout,
  Laptop,
  Server,
  Smartphone,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SearchServices from "@/components/services/SearchServises";

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

const Services = () => {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We provide comprehensive digital solutions to help businesses
              thrive in the modern world.
            </p>
            <SearchServices />
          </motion.div>
        </div>
      </section>

      {/* Web Development */}
      <section id="web-development" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Web Development</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our web development services focus on creating responsive,
                high-performance websites and web applications that deliver
                exceptional user experiences.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Custom Website Development
                    </h3>
                    <p className="text-muted-foreground">
                      Tailored websites built specifically for your business
                      needs and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      E-Commerce Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      Robust online stores with secure payment processing and
                      inventory management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Progressive Web Apps
                    </h3>
                    <p className="text-muted-foreground">
                      Fast, engaging web applications that work offline and
                      provide app-like experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
              </div>

              <Button asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                    <Layout className="h-8 w-8 text-primary" />
                  </div>
                  <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Web Development"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="space-y-3">
                  <div className="h-4 bg-primary/10 rounded-full w-3/4"></div>
                  <div className="h-4 bg-primary/10 rounded-full"></div>
                  <div className="h-4 bg-primary/10 rounded-full w-5/6"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Development */}
      <section id="mobile-development" className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                    <ThumbsUp className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-black/80 rounded-3xl h-[400px] w-[200px] mx-auto p-3">
                    <div className="bg-white h-full w-full rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                        alt="Mobile App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-primary/10 p-2 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Mobile Development</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We develop feature-rich, intuitive mobile applications that
                engage users and drive business growth.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Native App Development
                    </h3>
                    <p className="text-muted-foreground">
                      High-performance iOS and Android applications built
                      specifically for each platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Cross-Platform Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      Cost-effective applications that work seamlessly across
                      multiple platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Mobile App Maintenance
                    </h3>
                    <p className="text-muted-foreground">
                      Ongoing support and updates to keep your app running
                      smoothly and securely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  React Native
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Flutter
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Swift
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Kotlin
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Firebase
                </span>
              </div>

              <Button asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Consulting */}
      <section id="consulting" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Tech Consulting</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our expert consultants provide strategic guidance to help you
                navigate the complex technology landscape.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Technology Assessment
                    </h3>
                    <p className="text-muted-foreground">
                      Comprehensive evaluation of your current technology stack
                      and recommendations for improvement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Digital Transformation
                    </h3>
                    <p className="text-muted-foreground">
                      Strategic guidance to help your business adopt new
                      technologies and digital processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Technical Project Management
                    </h3>
                    <p className="text-muted-foreground">
                      Expert oversight of your technical projects to ensure
                      successful implementation.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                    <Laptop className="h-8 w-8 text-primary" />
                  </div>
                  <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Tech Consulting"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/10 rounded-full w-24"></div>
                      <div className="h-2 bg-primary/10 rounded-full w-16"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-primary/10 rounded-full"></div>
                  <div className="h-4 bg-primary/10 rounded-full w-5/6"></div>
                  <div className="h-4 bg-primary/10 rounded-full w-4/6"></div>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help your business grow.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
