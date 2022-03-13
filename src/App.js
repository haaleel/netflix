import React, {useState} from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Popups from "./Popups";

import Navs from "./Navs";

function App() {

  const [pop, setPop] = useState(false);
  const handleOpenModal = movie => {
    setPop(true);

  }
  return (
    <div className="App">
      <Navs />
      {pop ?
      <Popups btnclose={() => setPop(!pop)}  /> :null }
     {/* btnclose={setPop(!pop)} */}
      <Banner /> 
      
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        handleClick={movie => handleOpenModal(movie)}
      
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
