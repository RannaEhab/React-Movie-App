import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./../Styles/NotFound.css"; // Import the CSS file
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";

function NotFound() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ marginTop: "100px" }}
    >
      <FontAwesomeIcon icon={faBan} className="custom-icon" />
      <h4 className="custom-heading m-3">
        {language === "en" ? "Page not found" : "صفحة غير موجودة"}
      </h4>
      <button
        type="button"
        className="custom-btn"
        onClick={() => navigate("/")}
      >
        {}
        {language === "en" ? "Go to Home" : "الذهاب للرئيسية"}
      </button>
    </div>
  );
}
export default NotFound;
