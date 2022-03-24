import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import styles from "../css/Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=50`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);

        // The following code do the same as code above.

        // const response = await fetch(
        //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        // );
        // const json = await response.json();
        // setMovies(json.data.movies);
        // setLoading(false);
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
                ) : (
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
                )}
            </section>
        </div>
    );
}
export default Home;
