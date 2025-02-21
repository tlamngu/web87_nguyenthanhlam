import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Film_card from './components/film_card'
import Film_card_container from './components/film_card_container'

function App() {

  const [topFilms, setTopFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTopFilms = async () => {
      try {
        const response = await fetch('http://localhost:5000/films/top-10');
        if (!response.ok) {
          throw new Error(`err: ${response.status}`);
        }
        const data = await response.json();
        setTopFilms(data);
        setLoading(false);
        console.log(data)
      } catch (e) {
        alert(e)
        setLoading(false);
      }
    };

    fetchTopFilms();
  }, []);
  return (
    <>
      <div className="viewport">
        <h1>Film web</h1>
        <hr />
        <h2>Top best 10 films</h2>

        <Film_card_container>
          {topFilms.map((film, index) => (
            <Film_card 
              img_url={film.images[0]} 
              title={film.name} 
              country={film.country} 
              director={film.director} 
              rating={film.avgRate} 
              episode={film.episodes.length} 

              // episode={film.episode.length()} 
            />
          )
          )}
          
        </Film_card_container>
      </div>
    </>

  )
}

export default App
