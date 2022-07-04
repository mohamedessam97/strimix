import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FavItem from '../../Components/favItem/FavItem'
import { useEffect , useState } from 'react';
const MyList = () => {
    const token =localStorage.getItem('token')
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/user/getuser" ,{
                headers:{
                    authorization:JSON.parse(token)
                }
            })
            setMovies(res.data.Fav)
        }
        fetchData();
    }, []);
    const delet=true
    const filter =()=>{

    }
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: "150px" , mb:"200px"}}>
                {movies.length !==0 && <Grid container spacing={0}>
                    {movies.map(movie => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: "20px" }}>
                                <FavItem key={movie._id} item={[movie , delet]} setMovies={setMovies} movies={movies} />
                            </Grid>
                        )
                    })}
                </Grid>}
                {movies.length === 0 && <div style={{
                        color: "white",
                        fontSize: "30px",
                        margin: "216px 514px"
                }}>There is no Movies</div>}
                
            </Container>
        </div>
    );
}

export default MyList;
