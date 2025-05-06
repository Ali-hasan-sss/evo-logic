import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks";

// Define the search result type
interface SearchItem {
  title: string;
  description: string;
  url: string;
  section?: string;
}

// Mock search data - in a real app, this would come from an API
const searchData: SearchItem[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies.",
    url: "/services#web-development",
    section: "services",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    url: "/services#mobile-development",
    section: "services",
  },
  {
    title: "Tech Education",
    description: "Comprehensive courses in modern web and mobile technologies.",
    url: "/courses",
    section: "courses",
  },
  {
    title: "Modern React Development",
    description:
      "Learn to build powerful, interactive web applications with React.",
    url: "/courses#react",
    section: "courses",
  },
  {
    title: "TypeScript Mastery",
    description: "Master TypeScript to build robust, scalable applications.",
    url: "/courses#typescript",
    section: "courses",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for inquiries and collaborations.",
    url: "/contact",
    section: "contact",
  },
  {
    title: "About Us",
    description: "Learn more about our company and our mission.",
    url: "/about",
    section: "about",
  },
];

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { direction } = useAppSelector((state) => state.language);

  useEffect(() => {
    // Focus input when dialog opens
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      // Reset search when closed
      setSearchTerm("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    // Simulate search delay
    setIsSearching(true);
    const timer = setTimeout(() => {
      const filteredResults = searchData.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setResults(filteredResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && results.length > 0) {
      navigateToResult(results[0]);
    }
  };

  const navigateToResult = (result: SearchItem) => {
    setOpen(false);
    navigate(result.url);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline-block">
            {t("search.searchSite")}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-md sm:max-w-xl p-0 gap-0 top-[15%] translate-y-0"
        dir={direction}
      >
        <div className="flex items-center border-b p-4">
          <Search className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
          <Input
            ref={inputRef}
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none placeholder:text-muted-foreground"
            placeholder={t("search.placeholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 rounded-full"
            onClick={() => setSearchTerm("")}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4">
          {isSearching ? (
            <div className="flex items-center justify-center py-8 text-muted-foreground">
              {t("search.searching")}
            </div>
          ) : searchTerm.trim() !== "" && results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
              <p className="mb-2">{t("search.noResults")}</p>
              <p>
                <strong>"{searchTerm}"</strong>
              </p>
            </div>
          ) : results.length > 0 ? (
            <div>
              <h3 className="text-sm font-medium mb-3">
                {t("search.results")}
              </h3>
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="cursor-pointer p-3 rounded-md hover:bg-muted transition-colors"
                    onClick={() => navigateToResult(result)}
                  >
                    <h4 className="font-medium">{result.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {result.description}
                    </p>
                    <div className="mt-1 text-xs text-primary">
                      {result.url}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalSearch;
