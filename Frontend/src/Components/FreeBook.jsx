import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios';

/*import list from "../../public/list.json";*/

function FreeBook() {
   const [book, setBook] = useState([]);
   useEffect(() => {
     const GetBook = async () => {
       try {
         const response = await axios.get("https://oxforlib-bookshop-backend.vercel.app/book");
         
         const GetData = response.data.filter(
           (data) => data.category === "free"
         );
         setBook(GetData);
         //console.log(GetData);
       } catch (error) {
         console.log(error);
       }
     };
     GetBook();
   }, []);
    /*const filterData = list.filter((data)=> data.category === "free");*/
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-2 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
          <p>
            Explore the world of literature without limits—discover, download,
            and enjoy these free reads, because great stories should be shared
            freely with all who seek them.
            <p>
              Join us in celebrating the joy of reading and the power of
              knowledge.
            </p>
          </p>
        </div>

        <div>
          <Slider {...settings}>
        {
            book.map((item)=>(
                <Cards item = {item} key = {item.id}/>
        ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook
