import React, { useEffect, useState } from 'react';
import axios from "axios"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Item from '../../Components/Item/Item'

import './movies.css'
const Movies = () => {

    const [movies, setMovies] = useState(null)
    const [data, setData] = useState([])
    const [genr , setGenre] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/movie/all")
            setData(res.data)
            setMovies(res.data)
        }
        fetchData();
    }, [data]);



    const handleChange =(e)=>{
        setGenre(e.target.value)
    }
    useEffect(()=>{
        if(genr === 'All'){
            setMovies(data)
        }else{
            const m =data.filter(d=>{
                return d.genre.includes(genr)
            })
            setMovies(m)
        }
    },[genr])
    const delet =false
    return (
        <div>
            {data&&(<Container maxWidth="xl" sx={{ mt: "150px" }}>
                <div className="category">
                    <span>Movies</span>
                    <select
                        name="genre"
                        id="genre"
                        onChange={handleChange}
                    >
                        <option value="All" defaultValue>All</option>
                        <option value="Horror">Horror</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Drama">Drama</option>
                    </select>
                </div>

                { movies &&(<Grid container spacing={0} >
                    {movies.map(movie => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}   sx={{ mb: "20px"  ,height:"250px" }}>
                                <Item key={movie._id} item={[movie , delet]} />
                            </Grid>
                        )
                    })}
                </Grid>)}
            </Container>)}
        </div>
    );
}

export default Movies;
