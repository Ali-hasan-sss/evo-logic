import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import "./i18n";
import i18n from "@/i18n";
import { setLanguage } from "@/store/languageSlice";

const LanguageInitializer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "ar" | "en" | null;
    if (savedLang) {
      dispatch(setLanguage(savedLang));
      i18n.changeLanguage(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
  }, [dispatch]);

  return null;
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <LanguageInitializer />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
