import React, { useState , useEffect} from 'react';
import RandomMovie from '../../Components/randomMovie/RandomMovie';
import List from '../../Components/List/List';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import ListItem from '../../Components/ListItem/ListItem'
import Item from '../../Components/Item/Item';
import './Home.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

const HomeA = () => {
    const Movies = useSelector((state) => state.movies)
    console.log(Movies);

    const [random , setRandom]=useState(null)
    const [lists ,setLists]=useState(null)
    useEffect(() => {
        async function fetchData() {
            const random = await axios.get('http://localhost:3001/movie/random')
            setRandom(random.data[0])
            const response = await axios.get('http://localhost:3001/list/all')
            setLists(response.data)
            
          }
          fetchData();
    }, []);
    const delet =false
    return (
        <div className="home">
         {!Movies.length?<>
        <div className="random">
            {random && <RandomMovie movie={random} />}
            
        </div>
        {lists&&(lists.map(list=>{
                return(
                    <List key={list._id} list={list}/>
                    )
                }))
            }
            </>:(<div>
            <Container maxWidth="xl" sx={{ mt: "150px" }}>
                {Movies && <Grid container spacing={0}>
                    {Movies.map(movie => {
                        const delet =false
                        return (
                            <Grid item xs={3} sx={{ mb: "20px" ,zIndex: 'tooltip'}} >
                                <Item key={movie._id} item={[movie , delet]} />
                            </Grid>
                        )
                    })}
                </Grid>}
            </Container>
            </div>)}   
        </div>
    );
}

export default HomeA;
