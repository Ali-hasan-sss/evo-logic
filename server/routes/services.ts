import express from "express";

// Sample services data (in a real app, this would come from a database)
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Our web development services focus on creating responsive, high-performance websites and web applications.",
    features: [
      "Custom Website Development",
      "E-Commerce Solutions",
      "Progressive Web Apps",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "We develop feature-rich, intuitive mobile applications that engage users and drive business growth.",
    features: [
      "Native App Development",
      "Cross-Platform Solutions",
      "Mobile App Maintenance",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description:
      "Our expert consultants provide strategic guidance to help you navigate the complex technology landscape.",
    features: [
      "Technology Assessment",
      "Digital Transformation",
      "Technical Project Management",
    ],
    technologies: ["Cloud Solutions", "DevOps", "Agile", "System Architecture"],
  },
];

export const servicesRouter = express.Router();

// Get all services
servicesRouter.get("/", (req, res) => {
  res.json(services);
});

// Get service by id
servicesRouter.get("/:id", (req, res) => {
  const service = services.find((service) => service.id === req.params.id);

  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }

  res.json(service);
});

// Create a new service (admin only)
servicesRouter.post("/", (req, res) => {
  // In a real app, you would validate the request and authenticate the user
  const newService = req.body;

  // For now, just return the service as if it was created
  res.status(201).json(newService);
});

// Update a service (admin only)
servicesRouter.put("/:id", (req, res) => {
  const serviceId = req.params.id;
  const updatedService = req.body;

  // In a real app, you would update the service in a database
  res.json(updatedService);
});

// Delete a service (admin only)
servicesRouter.delete("/:id", (req, res) => {
  const serviceId = req.params.id;

  // In a real app, you would delete from a database
  res.json({ message: `Service ${serviceId} deleted` });
});
