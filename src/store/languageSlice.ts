import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Language = "en" | "ar";

interface LanguageState {
  current: Language;
  direction: "ltr" | "rtl";
}

const initialState: LanguageState = {
  current: "ar",
  direction: "rtl",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload;
      state.direction = action.payload === "ar" ? "rtl" : "ltr";
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
