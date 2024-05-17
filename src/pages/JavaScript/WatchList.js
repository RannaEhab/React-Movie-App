import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import MovieCardHorizontal from "../../components/Movies/JavaScript/MovieCardHorizontal";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
function WatchList() {
  const watchList = useSelector((state) => state.watchList.watchListValues);
  const { language } = useContext(LanguageContext);

  return watchList.length === 0 ? (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <FontAwesomeIcon
        icon={faHeartCrack}
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
        {language === "en" ? "Your watchlist is empty" : "قائمة المفضلة فارغة"}
      </h4>
    </div>
  ) : (
    <div className="row row-cols-md-2 d-flex justify-content-center">
      {watchList.map((movie) => (
        <div
          className="card m-2"
          style={{
            maxWidth: "550px",
            borderRadius: "20px",
            boxShadow: "2px 2px 10px lightgray",
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
      ))}
    </div>
  );
}
export default WatchList;
