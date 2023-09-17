import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IMDB from "../Assets/imdb.png";
import Tomato from "../Assets/tomato.svg";


const Card = ({ movie }) => {

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 1500)
  }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
        <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
        </SkeletonTheme>
    </div>
:
    <article className="card poster_card" data-testid="movie-card">
        <img
              src={`https://image.tmdb.org/t/p/w500${movie?movie.poster_path: ""}`}
              alt={movie?movie.title:""}
              data-testid="movie-poster"
            />
            <div className="movie_dt">
              <small data-testid="movie-release-date">
                {`USA ${movie?movie.release_date: ""}`}
              </small>
              <Link
                to={`/movie/${movie.id}`}
                className="movie_title"
                data-testid="movie-title"
              >
                {movie?movie.title:""}
              </Link>
            </div>
            <div className="header__imdb-and-to imdb-and-to">
              <div className="imdb feat_imdb">
                <div className="imdb_img">
                  <img src={IMDB} alt="" />
                </div>
                <small>86.0/100</small>
              </div>
              <div className="tomato feat_tomato">
                <div className="tomato_img">
                  <img src={Tomato} alt="" />
                </div>
                <small>96%</small>
              </div>
            </div>
            <div className="movie_genres">
                      <small className="movie_genre">
                    Action Adventure Drama
                      </small>
                 
            </div>
      </article>
      }
      </>;
  
  };
  
  export default Card;