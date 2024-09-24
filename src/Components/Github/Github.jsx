import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/misbahprogrammer')
        .then(Response => Response.json())
        .then(data =>{
            console.log(data)
            setdata(data)
        })
    },[])
  return (
    <div className='bg-slate-600 text-white text-3xl p-5'>Public Repos: {data.public_repos}
    <img src={data.avatar_url} alt="" className='max-w-2xl' />
    </div>

  )
}

export default Github