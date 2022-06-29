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
            console.log(res.data.Fav);
            setMovies(res.data.Fav)
        }
        fetchData();
    }, []);
    const delet=true
    console.log(movies);
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: "150px" }}>
                {movies && <Grid container spacing={0}>
                    {movies.map(movie => {
                        return (
                            <Grid item xs={3} sx={{ mb: "20px" }}>
                                <FavItem key={movie._id} item={[movie , delet]}  />
                            </Grid>
                        )
                    })}
                </Grid>}
            </Container>
        </div>
    );
}

export default MyList;
