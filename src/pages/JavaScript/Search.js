import React, { useState, useEffect, useContext } from "react";
import MovieCardVertical from "../../components/Movies/JavaScript/MovieCardVertical";
import { useSearchParams } from "react-router-dom";
import axiosCreate from "../../axios/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./../Styles/Search.css";
import { LanguageContext } from "../../context/Language";

export default function Search() {
  const [params] = useSearchParams();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const query = params.get("query");

    if (!query) {
      setFilteredMovies([]);
      return;
    }
    axiosCreate
      .get(`/search/movie`, {
        params: {
          query: query,
          language: language,
        },
      })
      .then((response) => {
        setFilteredMovies(response.data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [params, language]);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ borderBottom: "1px solid black", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
            {language === "en" ? "Search Results" : "نتائج البحث"}
          </h2>
        </div>
      </div>
      {filteredMovies.length !== 0 ? (
        <div
          className="row row-cols-1 row-cols-md-6 g-4"
          style={{ marginTop: "20px" }}
        >
          {filteredMovies.map((movie) => (
            <MovieCardVertical key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <FontAwesomeIcon icon={faEyeSlash} class={"custom-icon"} />
          <h4 class={"custom-heading"}>
            {language === "en" ? "No results found" : "لا يوجد نتائج"}
          </h4>
        </div>
      )}
    </>
  );
}
