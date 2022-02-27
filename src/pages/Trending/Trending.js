import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleContent from '../../Components/SingleContent/SingleContent';
import '../../Components/SingleContent/singleContent.css';
import '../../App.css';

import PaginationComponent from '../../Components/Pagination/PaginationComponent';



function Trending() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async() =>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        console.log(data.results);
        setContent(data.results);
    }
    useEffect(()=> {
        fetchTrending();
    },[page]);
    return (
        <div>
             <span className="pageTitle">Trending</span>
             <div className="trending">
                {
                    content.map((movie) => (
                        <SingleContent key={movie.id} id={movie.id} 
                            title={movie.title || movie.name}
                            poster={movie.poster_path}
                            media_type={movie.media_type} 
                            vote_average={movie.vote_average}
                            date={movie.first_air_date || movie.release_date}
                          />
                    ))
                }
             </div>

             <PaginationComponent setPage={setPage} />
        </div>
    )
}

export default Trending
