import React from 'react';
import { createTheme,ThemeProvider } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@material-ui/icons/Search'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../../Components/SingleContent/SingleContent';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';


const darkTheme = createTheme({
    palette:{
        type:'light',
        primary:{
            main:'#fff',
        },
    },
})
function Search() {
    

        const [type, setType] = useState(0);
        const [Page, setPage] = useState(1);
        const [content, setcontent] = useState([]);
        const [numOfPage, setnumOfPage] = useState();
        const [searchtext, setsearchtext] = useState("");

        const fetchSearch = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
                  process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchtext}&page=${Page}&include_adult=false`
              );
            setcontent(data.results);
            setnumOfPage(data.total_pages);
            console.log(data.results);
        }

       useEffect(() => {
            fetchSearch()
       }, [Page, searchtext]) 

    return (
        <div>
             <span className="pageTitle">Search</span>
            <ThemeProvider theme={darkTheme}>
                <div style={{display:'flex'}}>
                <TextField style={{flex:1, backgroundColor:'white'}}  className="searchBox"
                 label="search" variant="filled"
                    onChange={(e) => setsearchtext(e.target.value)}
                 />
                    <Button variant="contained" style={{marginLeft:'10px'}} onClick={fetchSearch}>
                        
                        <SearchIcon/>
                    </Button>
                </div>

                <Tabs   value={type}
                style={{paddingBottom:10, marginTop:'20px'}}
                 indicatorColor="primary"
                 textColor="white" 
                    onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1);}}
                    > 
                    <Tab style={{width:'50%'}} label="Search Movies" />
                    <Tab style={{width:'50%'}} label="Search TV Series" />

                </Tabs>
            </ThemeProvider>

            <div className="trending">
                {
                    content.map((movie) => (
                        <SingleContent key={movie.id} id={movie.id} 
                            title={movie.title || movie.name}
                            poster={movie.poster_path}
                            media_type={type ? 'tv' : 'movie'} 
                            vote_average={movie.vote_average}
                            date={movie.first_air_date || movie.release_date}
                          />
                    ))
                }
                 {searchtext  &&
          !content  &&
          (type ? <h2 style={{color:'wheat'}}>No Series Found</h2> : <h2>No Movies Found</h2>)}
             </div>
            
             {numOfPage > 1 && (
                 <PaginationComponent setPage={setPage}  numOfPage={numOfPage}/>

             )}

        </div>
    )
}

export default Search
