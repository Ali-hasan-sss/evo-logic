import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks";

const SearchServices = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  const { direction } = useAppSelector((state) => state.language);

  const services = [
    {
      title: t("navbar.services"),
      description: t(
        "services.description",
        "Custom websites and web applications"
      ),
      category: "development",
    },
    {
      title: t("services.mobile"),
      description: t(
        "services.mobileDescription",
        "iOS and Android applications"
      ),
      category: "development",
    },
    {
      title: t("services.consulting"),
      description: t(
        "services.consultingDescription",
        "Strategic technology guidance"
      ),
      category: "consulting",
    },
    {
      title: t("services.ecommerce"),
      description: t(
        "services.ecommerceDescription",
        "Online store development"
      ),
      category: "development",
    },
    {
      title: t("services.pwa"),
      description: t("services.pwaDescription", "App-like web experiences"),
      category: "development",
    },
    {
      title: t("services.digital"),
      description: t(
        "services.digitalDescription",
        "Business process modernization"
      ),
      category: "consulting",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4" dir={direction}>
      <div className="relative">
        <Input
          placeholder={t("navbar.searchServices")}
          value={search}
          onClick={() => setOpen(true)}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-background"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground rtl:right-auto rtl:left-3" />
      </div>

      {open && (
        <div
          className="absolute mt-2 w-full max-w-2xl rounded-lg border bg-popover shadow-md z-50"
          dir={direction}
        >
          <Command>
            <CommandInput
              placeholder={t("navbar.searchServices")}
              value={search}
              onValueChange={setSearch}
            />
            <CommandList>
              <CommandEmpty>
                {t("services.noResults", "No results found.")}
              </CommandEmpty>
              <CommandGroup
                heading={t("services.availableServices", "Available Services")}
              >
                {services
                  .filter(
                    (service) =>
                      service.title
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      service.description
                        .toLowerCase()
                        .includes(search.toLowerCase())
                  )
                  .map((service) => (
                    <CommandItem
                      key={service.title}
                      onSelect={() => {
                        setValue(service.title);
                        setOpen(false);
                        // Scroll to the section if it exists
                        const element = document.getElementById(
                          service.category
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`flex flex-col ${
                        direction === "rtl" ? "items-end" : "items-start"
                      }`}
                    >
                      <p
                        className={cn(
                          "text-sm font-medium",
                          value === service.title ? "text-primary" : ""
                        )}
                      >
                        {service.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {service.description}
                      </p>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default SearchServices;
