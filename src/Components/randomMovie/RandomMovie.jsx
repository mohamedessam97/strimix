import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import './RandomMovie.css'
const RandomMovie = (props) => {
    const {movie}=props
    const id = movie._id
    const [time, setTime] = useState(true);
    setTimeout(() => {
        setTime(false)
        
    }, 10000)
    return (
        <div >
            {time && (<>
                <img className='cover' src={movie.img} />
            </>)}
            {!time && (<>
                <video src={movie.video} autoPlay muted width='100%' loop />
            </>)}
            <div className='data'>
                <h1>{movie.title}</h1>
                <span>{movie.desc}</span>
                <div className='buttons'>
                    <Link to={`/watch/${id}`}>
                <Button variant="outlined" startIcon={<PlayArrowIcon sx={{color:'black'}} style={{fontSize:'30px'}}/>}  className='btn' sx={{mr:1}}>
                    Play
                </Button>
                    </Link>
                <Button variant="outlined" startIcon={<InfoIcon sx={{color:'white'}} style={{fontSize:'30px'}}/> } className='btn2'>
                    More Info
                </Button>
                </div>

            </div>

        </div>
    );
}

export default RandomMovie;
