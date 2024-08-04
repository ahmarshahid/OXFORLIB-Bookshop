import React, { useEffect, useState } from 'react'
/*import list from "../../public/list.json"*/
import Cards from './Cards';
import {Link} from "react-router-dom"
import axios from "axios";

function Course() {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const GetBook = async()=>{
      try {
      const response = await axios.get("http://localhost:4001/book");
      console.log(response.data)
      setBook(response.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    GetBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-2 px-4">
        <div className="mt-28 items-center justified-center text-center">
          <h1 className="Text-2xl  md:text-3xl">
            Unlock Your
            <span className="gradient-text"> Potential </span>
            with Our
            <span className="gradient-text"> Comprehensive </span>
            Course Books <i class="fas fa-smile c text-yellow-500 text-3xl"></i>
          </h1>
          <p className="justified-center mt-12">
            Welcome to our comprehensive course offerings designed to unlock
            your full potential. Whether you're looking to enhance your
            professional skills, dive deep into a new subject, or simply explore
            your passions, our expertly curated courses provide you with the
            knowledge and tools you need to succeed. Each course is crafted by
            industry experts and includes a wealth of resources, interactive
            elements, and practical exercises to ensure a rich and engaging
            learning experience. Start your journey with us today and discover a
            world of endless possibilities.
          </p>
        
        <Link to = "/">
        <button className="btn btn-outline btn-error mt-10 text-xl cursor-pointer ">
            Back
          </button>
        </Link>
    </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
          {book && book.map((item) => <Cards key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Course
