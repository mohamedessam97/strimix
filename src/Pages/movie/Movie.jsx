// import ReactNetflixPlayer from '../../components/ReactNetflixPlayer';
import ReactNetflixPlayer from '../../Components/ReactNetflixPlayer/index'
import { useParams } from 'react-router-dom';
import {useState , useEffect } from 'react';
import axios from "axios"
const Movie = (props) => {
    let { id } = useParams();
    console.log(id);
    const [movie, setmovie] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3001/movie/${id}`)
      .then(function (response) {
          setmovie(response.data.video)
        }).catch(function (error) {
            console.log(error);
        })
    }, []);
        console.log(movie);
    return (
        <ReactNetflixPlayer src={movie} autoPlay={true}/>
    );
}

export default Movie;
