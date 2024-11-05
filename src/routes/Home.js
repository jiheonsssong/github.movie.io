import Movie from "../components/Movie";
import style from "../App.module.css";
import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        console.log(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className={style.title}>M!</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies?.map((item) => (
            <Movie
              key={item.id.toString()}
              id={item.id.toString()}
              coverImage={item.medium_cover_image}
              title={item.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
