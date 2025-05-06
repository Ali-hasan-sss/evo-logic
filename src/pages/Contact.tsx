import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
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

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    course: "",
  });

  // Extract course from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseParam = params.get("course");

    if (courseParam) {
      const courseMap: Record<string, string> = {
        react: "Modern React Development",
        nextjs: "Next.js for Production",
        typescript: "TypeScript Mastery",
        tailwind: "Tailwind CSS in Practice",
      };

      setFormData((prev) => ({
        ...prev,
        subject: `Course Inquiry: ${courseMap[courseParam] || courseParam}`,
        course: courseMap[courseParam] || courseParam,
      }));
    }
  }, [location]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);

    toast({
      title: t("contact.form.success"),
      description: t("contact.form.successDescription"),
    });

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: formData.course ? `Course Inquiry: ${formData.course}` : "",
      message: "",
      course: formData.course,
    });
  };

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
              <span className="gradient-text">{t("contact.hero.title")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("contact.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6">
                {t("contact.form.title")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact.form.placeholder.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.form.placeholder.email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t("contact.form.placeholder.subject")}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.placeholder.message")}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  {t("contact.form.button")}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6">
                {t("contact.info.title")}
              </h2>

              <div className="bg-card rounded-lg p-6 border border-border mb-8">
                <motion.div
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">
                        {t("contact.info.location.title")}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {t("contact.info.location.address")}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">
                        {t("contact.info.email.title")}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {t("contact.info.email.addresses")}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">
                        {t("contact.info.phone.title")}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {t("contact.info.phone.numbers")}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <h2 className="text-2xl font-semibold mb-6">
                {t("contact.info.hours.title")}
              </h2>

              <div className="bg-card rounded-lg p-6 border border-border space-y-4">
                <div className="flex justify-between">
                  <span>{t("contact.info.hours.weekdays")}</span>
                  <span className="font-medium">
                    {t("contact.info.hours.weekdaysTime")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.info.hours.saturday")}</span>
                  <span className="font-medium">
                    {t("contact.info.hours.saturdayTime")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.info.hours.sunday")}</span>
                  <span className="font-medium">
                    {t("contact.info.hours.sundayTime")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 gradient-bg">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-semibold mb-4">
              {t("contact.map.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("contact.map.description")}
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-card border border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* In a real application, you would include an actual map component here */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
                <p className="text-xl font-medium">Map Placeholder</p>
                <p className="text-muted-foreground">
                  123 Tech Street, Digital City, NY 10001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
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
              {t("contact.faq.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("contact.faq.description")}
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto divide-y divide-border"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* FAQ Item 1 */}
            <motion.div className="py-6" variants={fadeIn}>
              <h3 className="text-lg font-medium mb-2">
                How do I enroll in one of your courses?
              </h3>
              <p className="text-muted-foreground">
                You can enroll in any of our courses by filling out the contact
                form on this page, selecting the course you're interested in, or
                by calling our office directly. Our team will guide you through
                the enrollment process.
              </p>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div className="py-6" variants={fadeIn}>
              <h3 className="text-lg font-medium mb-2">
                What is the typical timeline for a web development project?
              </h3>
              <p className="text-muted-foreground">
                The timeline for web development projects varies depending on
                the scope and complexity. Typically, a small to medium-sized
                website takes 4-8 weeks from concept to launch. Larger projects
                or web applications may take 3-6 months. We'll provide a
                detailed timeline during our initial consultation.
              </p>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div className="py-6" variants={fadeIn}>
              <h3 className="text-lg font-medium mb-2">
                Do you offer support after the project is completed?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer ongoing support and maintenance plans for all our
                web and mobile development projects. Our support plans include
                regular updates, security patches, performance monitoring, and
                technical assistance.
              </p>
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div className="py-6" variants={fadeIn}>
              <h3 className="text-lg font-medium mb-2">
                Are your courses suitable for beginners?
              </h3>
              <p className="text-muted-foreground">
                We offer courses for all skill levels, including complete
                beginners. Our courses are clearly labeled with the required
                skill level. For beginners, we recommend starting with our
                foundational courses before moving on to more advanced topics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
