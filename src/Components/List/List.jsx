// import React from 'react';
// import Stack from '@mui/material/Stack';
import ListItem from '../ListItem/ListItem';
// import './List.css'

// const List = () => {
//     return (
//         <div className="list">
//             <div className="listTitle">Continue to watch</div>
//             <Stack direction="row" spacing={1} className='list' mb={5} >
//                 <ListItem index={0}/>
//                 <ListItem index={2}/>
//                 <ListItem index={2}/>
//                 <ListItem index={2}/>
//                 <ListItem index={2}/>
//                 <ListItem index={2}/>
//             </Stack>
//         </div>
//     );
// }

// export default List;
import React from 'react'
// import Ucard from './Ucard'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const SmapleNextArrow = (props) => {
    const {onClick} = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <i className='fas fa-chevron-right'></i>
            </button>
        </div>
    )
}

const SmaplePrevArrow = (props) => {
    const {onClick} = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <i className='fas fa-chevron-left'></i>
            </button>
        </div>
    )
}

const List = ({list}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />,
        responsive:[
            {
                breakpoint:800,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                },
            },
        ]
    };
    return (
        <>
            <section className='upcome'>
                    {list && <div className='container'>
                        <div className='heading flexSB'>
                            <h1>{list.title}</h1>
                        </div>
                        <div className='content'>
                            <Slider {...settings}>
                            {/* <ListItem index={0}/><ListItem index={0}/><ListItem index={0}/><ListItem index={0}/><ListItem index={0}/><ListItem index={0}/> */}
                                {list.MovieId.map((movie)=>(
                                    <ListItem key={movie._id} item={movie}/>
                                    
                                        // <Ucard key={item.id} item={item} />
                                    )
                                )}
                            </Slider>
                        </div>
                    </div>}
            </section>
        </>
    )
}

export default List