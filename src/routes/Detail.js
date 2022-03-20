import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    console.log(detail);
    return (
        <div>
            <h1>Detail for {detail.title}</h1>
            {loading ? <h3>Now Loading...</h3> : null}
        </div>
    );
}
export default Detail;
