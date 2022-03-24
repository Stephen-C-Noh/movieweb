import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import Header from "../components/Header";

function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div>
            <Header />
            {loading ? (
                <h3>Now Loading...</h3>
            ) : (
                <MovieDetail
                    title={detail.title}
                    coverImg={detail.large_cover_image}
                    year={detail.year}
                    description={detail.description_full}
                    genres={detail.genres}
                    rate={detail.rating}
                    runtime={detail.runtime}
                />
            )}
        </div>
    );
}
export default Detail;
