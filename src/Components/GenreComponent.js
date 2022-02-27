import { Chip } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect,  } from 'react'

function GenreComponent({type,genre,setgenre,selectedGenre,setselectedGenre,setPage}) {
   
    const handleAdd = (genres) => {
        setselectedGenre([...selectedGenre, genres]);
        setgenre(genre.filter((g) => g.id !== genres.id));
    }
    const handleRemove = (genres) => {
        setselectedGenre(selectedGenre.filter((selected) => selected.id !== genres.id));
        setgenre([...genre, genres]);
    }
    const fetchGenre = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        setgenre(data.genres);
       
    }
    console.log(genre)
useEffect(()=>{
    fetchGenre();
 
    return ()=>{
        fetchGenre({});
    }
},[])

    return (
        <div style={{padding:'8px 0px'}}>
             {
                 selectedGenre && 
                selectedGenre.map((genre) => (
                    <Chip label={genre.name} size="small"
                     color="primary"
                     style={{margin:4}}
                      onDelete={()=> handleRemove(genre)} />
                ))
            }
            {
                genre.map((genre) => (
                    <Chip label={genre.name} size="small" 
                    style={{margin:4}} 
                    key={genre.id}
                    onClick={()=> handleAdd(genre)} 
                   
                    />
                ))
            }
        </div>
    )
}

export default GenreComponent
