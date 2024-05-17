import { useContext, useState } from "react";
import { LanguageContext } from "../../context/Language";
import { useDispatch, useSelector } from "react-redux";
import { setRegistrationData } from "../../store/Slices/registeration";
import { useNavigate } from "react-router-dom";



export default function Registertion() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const { registration } = useSelector(
    (state) => state.registeration.registration
  );
  const dispatch = useDispatch();
  const fullNameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const userNameRegex = /^[a-zA-Z0-9]{6,20}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const [registrationData, setRegistration] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
  });

  const [registrationError, setRegistrationError] = useState({
    fullName: " ",
    email: " ",
    userName: " ",
    password: " ",
    confirmPassword: " ",
  });

  function handleRegistration(event) {
    setRegistration({
      ...registrationData,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "fullName") {
      setRegistrationError({
        ...registrationError,
        fullName: !fullNameRegex.test(event.target.value)
          ? language === "en"
            ? "Invalid FullName"
            : "الاسم غير صالح"
          : !event.target.value
          ? language === "en"
            ? "Required Field"
            : "مطلوب"
          : "",
      });
    } else if (event.target.name === "email") {
      setRegistrationError({
        ...registrationError,
        email: !emailRegex.test(event.target.value)
          ? language === "en"
            ? "Invalid Email"
            : "البريد الالكتروني غير صالح"
          : !event.target.value
          ? language === "en"
            ? "Required Field"
            : "مطلوب"
          : "",
      });
    } else if (event.target.name === "userName") {
      setRegistrationError({
        ...registrationError,
        userName: !userNameRegex.test(event.target.value)
          ? language === "en"
            ? "Invalid UserName"
            : "اسم المستخدم غير صالح"
          : !event.target.value
          ? language === "en"
            ? "Required Field"
            : "مطلوب"
          : "",
      });
    } else if (event.target.name === "password") {
      setRegistrationError({
        ...registrationError,
        password: !passwordRegex.test(event.target.value)
          ? "Invalid Password"
          : !event.target.value
          ? language === "en"
            ? "Required Field"
            : "مطلوب"
          : "",
      });
    } else if (event.target.name === "confirmPassword") {
      setRegistrationError({
        ...registrationError,
        confirmPassword:
          event.target.value !== registrationData.password
            ? language === "en"
              ? "Invalid Password"
              : "كلمة المرور غير متطابقة"
            : !event.target.value
            ? language === "en"
              ? "Required Field"
              : "مطلوب"
            : "",
      });
    }
  }

  function handleSubmit(event) {
    if (
      registrationError.fullName ||
      registrationError.email ||
      registrationError.userName ||
      registrationError.password
    ) {
      alert(language === "en" ? "Invalid Data" : "البيانات غير صحيحة");
    } else {
      event.preventDefault();
      dispatch(setRegistrationData(registrationData));
      // alert(language === "en" ? "Registration Successful" : "تم التسجيل بنجاح");
      // console.log(registrationData);
      navigate("/user");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ fontFamily: "cursive" }}
      to="./"
    >
      <div
        className="p-0 my-4"
        style={{
          borderBottom: "1px solid black",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: "bolder" }}>
          {language === "en" ? "Registration" : "التسجيل"}
        </h2>
      </div>
      <div className="row w-100 mx-0 my-2">
        <label className="col col-form-label p-0">
          {language === "en" ? "Full Name" : "الاسم الكامل"}
        </label>
        <div className="col-sm-10 p-0">
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={registrationData.name}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.fullName ? registrationError.fullName : ""}
          </span>
        </div>
      </div>
      <div className="row w-100 mx-0 my-2">
        <label className="col col-form-label p-0">
          {language === "en" ? "Email" : "البريد الالكتروني"}
        </label>
        <div className="col-sm-10 p-0">
          <input
            type="email"
            className="form-control"
            name="email"
            value={registrationData.email}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.email ? registrationError.email : ""}
          </span>
        </div>
      </div>
      <div className="row w-100 mx-0 my-2">
        <label className="col col-form-label p-0">
          {language === "en" ? "User Name" : "اسم المستخدم"}
        </label>
        <div className="col-sm-10 p-0">
          <input
            type="text"
            className="form-control"
            name="userName"
            value={registrationData.userName}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.userName ? registrationError.userName : ""}
          </span>
        </div>
      </div>
      <div className="row w-100 mx-0 my-2">
        <label className="col col-form-label p-0">
          {language === "en" ? "Password" : "كلمة المرور"}
        </label>
        <div className="col-sm-10 p-0">
          <input
            type="password"
            className="form-control"
            name="password"
            value={registrationData.password}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.password ? registrationError.password : ""}
          </span>
        </div>
      </div>
      <div className="row w-100  mx-0 my-2">
        <label className="col col-form-label p-0">
          {language === "en" ? "Confirm Password" : "تأكيد كلمة المرور"}
        </label>
        <div className="col-sm-10 p-0">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.confirmPassword
              ? registrationError.confirmPassword
              : ""}
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-secondary"
        style={{
          borderRadius: "10px",
          color: "white",
          marginTop: "20px",
          width: "50%",
        }}
      >
        {language === "en" ? "Register" : "تسجيل"}
      </button>
    </form>
  );
}
