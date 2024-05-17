import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axiosCreate from "../../axios/config";
import MovieCardHorizontal from "../../components//Movies/JavaScript/MovieCardHorizontal";
import { LanguageContext } from "../../context/Language";

export default function Details() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    axiosCreate
      .get(`/movie/${params.id}`, {
        params: {
          language: language,
        },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => console.log(error));
  }, [language]);

  return (
    <div
      className="row d-flex justify-content-center align-content-center"
      style={{ width: "80%", margin: "0px" }}
    >
      <div
        className="card m-2 d-flex justify-content-center align-content-center"
        style={{
          borderRadius: "20px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="row">
          <div className="col-md-4 p-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="card-img"
              alt={movie.title}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <MovieCardHorizontal key={movie.id} movie={movie} />
        </div>
      </div>
    </div>
  );
}
