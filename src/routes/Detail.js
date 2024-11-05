import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovie = async (id) => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    return json;
  };

  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <>
      <h1>Detail</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          key={movie?.id?.toString()}
          id={movie?.id?.toString()}
          coverImage={movie?.medium_cover_image}
          title={movie?.title}
        />
      )}
    </>
  );
}

export default Detail;
