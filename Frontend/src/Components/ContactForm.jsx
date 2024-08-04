import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


const heading = 'Contact Us';

function Contact(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
   const MessageInfo = {
    fullname : data.fullname,
    email : data.email,
    message : data.message, 
   }
   await axios.post("http://localhost:4001/contact", MessageInfo)
   
  // Resolve Promise
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      toast.success("Message Sent Successfully")
    }
    localStorage.setItem("Contacts",JSON.stringify(res.data.Contact));
   })

  // Reject Promise
  .catch((err)=>{
    if(err.response){
      toast.error("Error: "+ err.response.data.message);
      console.log("ErrorL "+ err);
    }
  })
  };

    return (
            <div className="bg-white-50 max-w-screen-2x1  mx-auto md:px-2 px-4  flex-col  my-10">
                <div id="Contact" className="mx-auto flex flex-col min-h-screen justify-center items-center">

                        <h1 className="text-3xl font-bold leading-tight text-yellow-900 text-center">{heading}</h1>

                    <form onSubmit={handleSubmit(onSubmit)}
                    className="w-2/3 md:w-1/3 space-y-8 flex flex-col">
                        <div>
                            <input
                                type="text"
                                name="name"
                                className=" border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform hover:border-b-2"
                                placeholder="Name"
                                 {...register("fullname", { required: true })}
                            />
                             <br />
                {errors.fullname && (
                  <span className="text-sm text-red-600 justified">
                    This field is required !
                  </span>
                )}
                            
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                      <br />
                {errors.email && (
                  <span className="text-sm text-red-600 justified">
                    This field is required !
                  </span>
                )}
                        </div>
      <div>
        <textarea
          name="message"
          className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
          rows="4"
          placeholder="Message"
          {...register("message", { required: "You can't submit an empty response!" })}
        />
        {errors.message && (
          <span className="text-sm text-red-600">
            You can't a submit an empty response !
          </span>
        )}
      </div>
                        <button
                            type="submit"
                            className="bg-amber-950 text-yellow-400 mx-auto mt-4 p-2 w-48 hover:bg-black"
                        >
                            Submit
                        </button>
                      
                    </form>

                </div>
                
            </div>

    );
}

export default Contact;