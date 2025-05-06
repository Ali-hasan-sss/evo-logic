import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLanguage } from "@/store/languageSlice";
import { Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.language);

  const toggleLanguage = () => {
    const newLang = current === "en" ? "ar" : "en";
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    localStorage.setItem("language", newLang); // ✅ حفظ اللغة هنا
  };

  const isArabic = current === "ar";

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex items-center gap-2">
        <span
          className={`text-xs ${
            !isArabic ? "font-medium text-primary" : "text-muted-foreground"
          }`}
        >
          EN
        </span>
        <Switch
          className="w-10"
          checked={isArabic}
          onCheckedChange={toggleLanguage}
        />
        <span
          className={`text-xs ${
            isArabic ? "font-medium text-primary" : "text-muted-foreground"
          }`}
        >
          AR
        </span>
      </div>
    </div>
  );
};

export default LanguageToggle;
