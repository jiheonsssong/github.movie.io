import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Movie({ id, coverImage, title }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img key={id} src={coverImage} alt={title} />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
