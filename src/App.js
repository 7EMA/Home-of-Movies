import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Card from "./Components/Card";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Movie from "./Components/Movie"

const apiURL = "http://api.tvmaze.com/shows";
function App() {

  const [movie, setMovie] = useState(null);
  const loadMovie = async () => {
    const x = await axios.get(apiURL);
    setMovie(x.data);
  }
  
  useEffect(() => {
    loadMovie();
  }, {});
  return (
    <>
    <div className="nav-container">
    <Header/>
    </div>
      <BrowserRouter>
      <div className="section">
        {
          movie &&
          <div className="movie-card">
            {movie.map (el => {
              return(
                <Link to={`/${el.id}`}>
                  <Card
                  image={el.image.medium}
                  name={el.name}
                  />
                  
                  <Switch>
                    <Route exact path={`/${el.id}`}>
                    <Movie
                    image={el.image.medium}
                    name={el.name}
                    summary={el.summary}
                    />
                    </Route>
                  </Switch>
                </Link>
              )
            })}
          </div>
        }
      </div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
