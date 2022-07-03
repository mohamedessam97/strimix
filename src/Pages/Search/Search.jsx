import React, { useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '../../Components/Item/Item';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const {q}=useParams();
    const [Movies , setMovies]=useState([])

    useEffect(() => {
        let x = setTimeout(async ()=>{
            try{

                const res = await axios.post(`http://localhost:3001/movie/search` , {q})
                setMovies(res.data)
            }catch(err){
            }
        

        },1000)
        return () => {
            clearTimeout(x)
        };
    }, [q]);

    
    return (
        <>
            <Container maxWidth="xl" sx={{ mt: "150px" }}>
                {Movies !=="there is no result match"?( <Grid container spacing={0}>
                    {Movies.map(movie => {
                        const delet =false
                        return (
                            <Grid item xs={3} sx={{ mb: "20px" ,height:"250px" }} >
                                <Item key={movie._id} item={[movie , delet]} />
                            </Grid>
                        )
                    })}
                </Grid>):<div style={{
                        color: "white",
                        fontSize: "30px",
                        margin: "216px 473px"
                }}>there is no result match</div>}
            </Container>
        </>
    );
}

export default Search;
