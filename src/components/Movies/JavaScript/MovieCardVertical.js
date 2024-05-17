import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../../../store/Slices/watchlist";
import { LanguageContext } from "../../../context/Language";
import "./../Styles/MovieCardVertical.css";

export default function MovieCardVertical(props) {
  const [liked, setLiked] = useState(false); // Initialize liked state as false
  const watchList = useSelector((state) => state.watchList.watchListValues);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  const movieReleaseDate = new Date(props.movie.release_date);
  const months =
    language === "ar"
      ? [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

  useEffect(() => {
    // Check if the movie is in the watchlist and update liked state accordingly
    if (watchList.some((movie) => movie.id === props.movie.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [props.movie, watchList]);

  function handleWatchList() {
    if (liked) {
      dispatch(removeMovie(props.movie.id));
    } else {
      dispatch(addMovie(props.movie));
    }
  }

  return (
    <div className="col my-0" style={{ fontFamily: "cursive" }}>
      <div className="card h-100" style={{ border: "none" }}>
        <span className="badge rounded-pill text-bg-light">
          {Number(props.movie.vote_average).toFixed(1)}/10
        </span>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          className="card-img-top my-0"
          alt={props.movie.title}
        />
        <div className="card-body" style={{ padding: "5%" }}>
          <NavLink className="card-title" to={`/details/${props.movie.id}`}>
            <h6 className="card-title">{props.movie.title}</h6>
          </NavLink>
          <div className="d-flex">
            <p className="card-text" style={{ fontSize: "12px" }}>
              {months[movieReleaseDate.getMonth()]} {movieReleaseDate.getDate()}
              , {movieReleaseDate.getFullYear()}
            </p>
            <FontAwesomeIcon
              className="fontAwesome"
              icon={liked ? faHeartSolid : faHeartRegular}
              onClick={handleWatchList}
              style={{ color: liked ? "rgb(124, 124, 224)" : "lightgray" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
