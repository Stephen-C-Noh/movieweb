import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/movie";
import Header from "../components/Header";
import styles from "../css/Search.module.css";

function Search() {
    const { keyword } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${keyword}`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <Header />
            <section className={styles.container}>
                {loading ? (
                    <div className={styles.loader}>
                        <span>Loading....</span>
                    </div>
                ) : null}
                {movies ? (
                    <div className={styles.movies}>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                genres={movie.genres}
                                rating={movie.rating}
                            />
                        ))}
                    </div>
                ) : (
                    <span className={styles.searchError}>
                        Sorry, There is no match for {keyword}...
                    </span>
                )}
            </section>
        </div>
    );
}

export default Search;
