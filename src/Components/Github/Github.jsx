import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setdata] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/nishant-Tiwari24")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data);
    //     })
    // },[])    

    const data = useLoaderData();

  return (
    <div className='bg-gray-600 p-5 flex justify-center gap-10'>
    <img src={data.avatar_url} alt="github pic" width={300} srcset="" />
    <div className=' text-center text-white text-3xl'>Github followers: {data.followers}</div>
    <div className=' text-center text-white text-3xl'>Github following: {data.following}</div>
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/nishant-Tiwari24');
  return response.json()
}
