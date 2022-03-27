import styles from "../css/MovieDetail.module.css";

function MovieDetail({ title, coverImg, year, description, genres, rate, runtime }) {
    return (
        <div className={styles.container}>
            <div className={styles.detail__header}></div>

            <div className={styles.detail}>
                <img src={coverImg} alt={title} title={title} className={styles.detail__img} />
                <div>
                    <h1 className={styles.detail__title}>{title}</h1>
                    <h3 className={styles.detail__year}> ({year})</h3>
                    <hr />
                    <span className={styles.detail__infoName}>Genres</span>
                    <ul className={styles.detail__genres}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    <span className={styles.detail__infoName}>Rating</span>
                    <div className={styles.detail__info}>{rate}</div>
                    <span className={styles.detail__infoName}>Runtime</span>
                    <div className={styles.detail__info}>
                        {runtime}
                        {" minutes"}
                    </div>
                    <div className={styles.detail__infoName}>Description</div>
                    <textarea
                        className={styles.detail__text}
                        rows="10"
                        cols="80"
                        value={description}
                        readOnly={true}
                    />
                </div>
                <span></span>
            </div>
        </div>
    );
}

export default MovieDetail;
