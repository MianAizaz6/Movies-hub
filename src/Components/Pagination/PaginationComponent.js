import { createTheme,ThemeProvider } from '@material-ui/core';
import { Pagination } from '@material-ui/lab'
import React from 'react';

const darkTheme = createTheme({
    palette:{
        type:"dark",
    }
})

function PaginationComponent({numOfPages=10,setPage}) {
    const changeHandler = (page) =>{
        setPage(page);
        window.scroll(0,0);
    }
    return (
        <div style={{display:'flex', justifyContent:'center',width:'100%', marginTop:'15px'}}>
            <ThemeProvider theme={darkTheme}>
            <Pagination count={numOfPages} color="primary" onChange={(e)=> changeHandler(e.target.textContent)} />

            </ThemeProvider>
        </div>
    )
}

export default PaginationComponent
