
import React from 'react'
import { useState  , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './ListItem.css'

const ListItem = ( props ) => {
    const token = localStorage.getItem('token');
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setmovie] = useState(null);
  const {item } =props
  useEffect(() => {
      setmovie(props.item)
     
  }, [item]);
  const handleClick = async (id)=>{
    console.log("here");
    const res = await axios.put("http://localhost:3001/user/fav", {Fav:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })
    console.log(res);
  }  

  const handleDelete =async (id)=>{
    const res = await axios.put("http://localhost:3001/user/delFav", {Fav:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })

  }
  const handleWatch = async (id)=>{
    const res = await axios.put("http://localhost:3001/user/watched", {watched:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })
    console.log(res);
  }
    return (
        <>
            {movie && <div className="MovieBox"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                    <div className="img">
                        {!isHovered &&<img src={movie.img} alt=""/>}
                        {isHovered && <video src={movie.trailer} autoPlay={true} muted loop />}
                    </div>
                    <div className="text">
                        <h4>{movie.title}</h4>
                        <span>{movie.limit}</span>
                        <span style={{marginLeft:"40px"}}>{`(${movie.year})`}</span>
                        <br/>
                    </div>
                    <Link to={`/watch/${movie._id}`}>
                        <button style={{backgroundColor:"rgb(18,198,178)" , }} onClick={()=>handleWatch(movie._id)}>
                            <i className="fa fa-play"></i> PLAY NOW
                        </button>
                    </Link>
                    <button
                    onClick={()=>handleClick(movie._id)}
                    ><FavoriteBorderIcon size="large"/></button>
            </div>}
        </>
    )
}

export default ListItem