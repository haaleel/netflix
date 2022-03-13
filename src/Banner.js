import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Banner.css";

import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
// //   function truncate(str, n) {
// //     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

  return (
    <header
      className="banner"
      
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
        
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.titile || movie?.name || movie?.original_name}
          <div className="bannerbuttons">
            <button className="bannerbutton">play</button>

            <button className="bannerbutton">mylist</button>
            <h1 className="banner__description">{movie?.overview}</h1>
          </div>
        </h1>
      </div>
      <div className="bannerfadeBottom"></div>
    </header>
  );
}

export default Banner;
