import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const { moviesId } = useParams();
    return (
        <div>
            Movie details
            <p>detils</p>
        </div>
    )
}

export default MovieDetailsPage;