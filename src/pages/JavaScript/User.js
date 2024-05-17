import { useContext } from "react";
import { LanguageContext } from "../../context/Language";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function User() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <FontAwesomeIcon
        icon={faCircleCheck}
        style={{
          color: "lightgray",
          width: "200px",
          height: "200px",
          marginTop: "100px",
        }}
      />
      <h4
        className="custom-heading m-3"
        style={{
          color: "black",
          fontFamily: "cursive",
          fontWeight: "bolder",
          margin: "20px",
        }}
      >
        {language === "en" ? "Registered in successfully" : "تم التسجيل بنجاح"}
      </h4>
    </div>
  );
}
