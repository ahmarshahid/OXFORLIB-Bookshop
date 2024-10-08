import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';


function Logout() {
    const [authUser,setAuthUser]= useAuth()
    const LogoutHandling=()=>{
        try {
            setAuthUser({
                ...authUser,
                user : null,
            })
            localStorage.removeItem("Users")
            toast.success('You have successfully logged out!',{
                duration:2000,
            });
            
             setTimeout(() => {
      window.location.reload();
    }, 2000);
            
        } 
    catch (error) {
            toast.error("Error: " + error.message);
        }
    }
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-800"
      onClick={LogoutHandling}
      >Logout</button>
    </div>
  )
}

export default Logout
