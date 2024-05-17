import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Layout/JavaScript/Navbar";
import RoutesConfig from "./routes/RoutesConfig";
import { LanguageContext } from "./context/Language";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");
  const dirction = language === "en" ? "ltr" : "rtl";

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div dir={dirction} >
          <Navbar />
          <div
            className="container my-4 d-flex"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: "50px" }}></div>
            <RoutesConfig />
          </div>
        </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}
