import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres, rating }) {
    return (
        <div className={styles.movie}>
            {coverImg ? (
                <img src={coverImg} alt={title} title={title} className={styles.movie__img} />
            ) : null}
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>
                    {year} | Rating: {rating}
                </h3>
                <p className={styles.summary}>
                    {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
                </p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
