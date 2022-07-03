
import React from 'react'
import { useState  , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import './Item.css'

const Item = ( props ) => {
    const delet = props.item[1]
    const token = localStorage.getItem('token');
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setmovie] = useState(null);
  const {item } =props
  useEffect(() => {
      setmovie(props.item[0])
    
  }, [item]);
  const handleClick = async (id)=>{
    const res = await axios.put("http://localhost:3001/user/fav", {Fav:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })
    console.log(res)
  }  

  const handleDelete =async (id)=>{
    const res = await axios.put("http://localhost:3001/user/delFav", {Fav:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })
    console.log(res);
    setmovie(null)
  }
  const handleWatch = async (id)=>{
    const res = await axios.put("http://localhost:3001/user/watched", {watched:id} , {
        headers:{
            authorization:JSON.parse(token)
        }
    })
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
                    {delet && <button 
                    className='delete' 
                    onClick={()=>handleDelete(movie._id)}
                    >
                   
                    <DeleteIcon  
                    
                    sx={{ color: 'red' ,fontSize: 30 }}/>

                    </button>}
                    <Link to={`/watch/${movie._id}`}>
                        <button style={{backgroundColor:"rgb(18,198,178)" , }} onClick={()=>handleWatch(movie._id)} className="item">
                            <i className="fa fa-play"></i> PLAY NOW
                        </button>
                    </Link>
                    <button
                    className='icon'
                    onClick={()=>handleClick(movie._id)}
                    ><FavoriteBorderIcon size="large"/></button>
            </div>}
        </>
    )
}

export default Item