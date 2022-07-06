import ListItem from '../ListItem/ListItem';
import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const SmapleNextArrow = (props) => {
    const {onClick} = props;

    return (
        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <i className='fas fa-chevron-right' style={{color:"white"}}></i>
            </button>
        </div>
    )
}

const SmaplePrevArrow = (props) => {
    const {onClick} = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <i className='fas fa-chevron-left' style={{color:"white"}}></i>
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
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
       
    };
    return (
        <>
            <section className='upcome'>
                    {list && <div className='container'>
                        <div className='heading flexSB'>
                            <h1 className='title'>{list.title}</h1>
                        </div>
                        <div className='content' style={{height:"250px"}} >
                            <Slider {...settings}>
                                
                                {list.MovieId.map((movie)=>(
                                    <ListItem key={movie._id} item={movie}/>
                                    
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