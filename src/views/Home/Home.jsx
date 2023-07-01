import { useEffect, useState } from "react";
import MovieService from "../../api/MovieService.js";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";

const Home = ({searchValueProp}) => {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const {
            data: { results },
        } = await MovieService.getMovies();
        setMovies(results);
    }

    useEffect(() => {
        getMovies();
    }, []);

    async function searchMovie(movieString){
        const {
            data: { results },
        } = await MovieService.searchMovies(movieString);
        setMovies(results);
    }

    useEffect(()=>{
        if(searchValueProp){
            searchMovie(searchValueProp);
        }
    },[searchValueProp])

    return (
        <section className="Home">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </section>
    );
};

export default Home;
