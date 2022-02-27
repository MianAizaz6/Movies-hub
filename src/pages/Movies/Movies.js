import axios from 'axios';
import React,{useState,useEffect} from 'react';
import SingleContent from '../../Components/SingleContent/SingleContent';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';
import GenreComponent from '../../Components/GenreComponent';
import useGenres from '../../Hooks/useGenres';



function Movies() {
    const [content, setcontent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setnumOfPages] = useState();
    const [selectedGenre, setselectedGenre] = useState([]);
    const [genre, setgenre] = useState([]);
    const genresForURL = useGenres(selectedGenre);

    const fetchMovies = async() =>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genresForURL}`);
        setcontent(data.results);
        setnumOfPages(data.total_pages);
        console.log(data.results);
    }

    useEffect(()=>{
        fetchMovies();
        
    },[page,genresForURL]);
    return (
        <div>
            <span className="pageTitle">Movies</span>
            <GenreComponent type="movie" genre={genre} setPage={setPage} setgenre={setgenre} selectedGenre={selectedGenre} setselectedGenre={setselectedGenre}/>
            <div className="trending">
                {
                    content.map((movie) => (
                        <SingleContent key={movie.id} id={movie.id} 
                            title={movie.title || movie.name}
                            poster={movie.poster_path}
                            media_type='Movie' 
                            vote_average={movie.vote_average}
                            date={movie.first_air_date || movie.release_date}
                          />
                    ))
                }
             </div>
             {numOfPages > 1 && (
                 <PaginationComponent setPage={setPage}  numOfPages={numOfPages}/>

             )}
        </div>
    )
}

export default Movies
