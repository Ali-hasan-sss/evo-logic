import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/components/courses/course-data";
import { useToast } from "@/hooks/use-toast";

interface AdminCourse {
  id: string;
  title: string;
  description: string;
  level: string;
  featured: boolean;
}

interface AdminService {
  id: string;
  title: string;
  description: string;
}

const Admin = () => {
  // In a real application, these would be fetched from the API
  const [adminCourses, setAdminCourses] = useState<AdminCourse[]>(
    courses.map((course) => ({
      id: course.id,
      title: course.title,
      description: course.description,
      level: course.level,
      featured: course.featured,
    }))
  );

  const [adminServices, setAdminServices] = useState<AdminService[]>([
    {
      id: "web-development",
      title: "Web Development",
      description: "Web development services",
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Mobile development services",
    },
    {
      id: "consulting",
      title: "Tech Consulting",
      description: "Tech consulting services",
    },
  ]);

  const { toast } = useToast();

  // Simulate fetching from API
  useEffect(() => {
    // In a real app, you would fetch from your API endpoints
    // Example:
    // fetch('http://localhost:3001/api/courses')
    //  .then(res => res.json())
    //  .then(data => setAdminCourses(data));
  }, []);

  // Mock function for handling actions (in a real app, these would make API calls)
  const handleAction = (type: string, action: string, id?: string) => {
    toast({
      title: "Action triggered",
      description: `${action} ${type} ${id || ""}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Manage Courses</h2>
            <Button onClick={() => handleAction("course", "create")}>
              Add New Course
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {adminCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm bg-secondary px-2 py-1 rounded-md">
                        {course.level}
                      </span>
                      {course.featured && (
                        <span className="text-sm bg-primary/20 text-primary ml-2 px-2 py-1 rounded-md">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleAction("course", "edit", course.id)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          handleAction("course", "delete", course.id)
                        }
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Manage Services</h2>
            <Button onClick={() => handleAction("service", "create")}>
              Add New Service
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {adminServices.map((service) => (
              <Card key={service.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleAction("service", "edit", service.id)
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        handleAction("service", "delete", service.id)
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
