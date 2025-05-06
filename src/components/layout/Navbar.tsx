import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "@/components/ui/theme-provider";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks/useAppSelector";
import GlobalSearch from "@/components/search/GlobalSearch";
import LanguageToggle from "../language/LanguageToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const { t } = useTranslation();
  const { direction } = useAppSelector((state) => state.language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const navLinks = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.services"), path: "/services" },
    { name: t("navbar.courses"), path: "/courses" },
    { name: t("navbar.aboutUs"), path: "/about" },
    { name: t("navbar.contact"), path: "/contact" },
  ];

  const handleContactClick = () => {
    toast({
      title: t("toast.contactUs"),
      description: t("toast.contactDescription"),
    });
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
      dir={direction}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">
                <span className="text-gray-600 dark:text-white">Evo</span> Logic
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <GlobalSearch />
            <LanguageToggle />
            <Button
              variant="outline"
              size="icon"
              className="ml-2"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button onClick={handleContactClick} className="ml-4">
              {t("navbar.getInTouch")}
            </Button>
          </div>

          <div className="flex md:hidden items-center space-x-2 rtl:space-x-reverse">
            <GlobalSearch />
            <LanguageToggle />
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                handleContactClick();
                setIsMenuOpen(false);
              }}
              className="w-full mt-3"
            >
              {t("navbar.getInTouch")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
