import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Item from '../../Components/Item/Item'
import { useEffect , useState } from 'react';
const WatchList = () => {
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
            setMovies(res.data.watched)
        }
        fetchData();
    }, []);
    const delet =false
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: "150px" ,  mb:"200px" }}>
                {movies.length !== 0 && <Grid container spacing={0}>
                    {movies.map(movie => {
                        return (
                            <Grid item xs={3} sx={{ mb: "20px" }}>
                                <Item key={movie._id} item={[movie , delet]} />
                            </Grid>
                        )
                    })}
                </Grid>}
                {movies.length === 0 && <div style={{
                        color: "white",
                        fontSize: "30px",
                        margin: "216px 441px"
                }}>There is no Watched Movies</div>}
            </Container>
        </div>
    );
}

export default WatchList;
