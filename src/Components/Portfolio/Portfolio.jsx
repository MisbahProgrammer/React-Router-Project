import React from 'react'

function Portfolio() {
  return (
    <div className='w-full'>
        <h1 className='text-center text-3xl mt-4 p-4 font-bold font-mono text-cyan-600'>My Portfolio</h1>
        <div className='w-full mx-auto bg-slate-50 mt-5 rounded-lg'>
            <h1 className='text-center font-bold font-sans text-2xl p-4'>React JS Projects</h1>
            <div className='w-[80%] rounded-lg border p-5 mt-5 mb-10 bg-white grid grid-cols-2 gap-5 mx-auto'>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="p1.jpeg" alt="" className='w-full' />
                
                </div>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="p2.jpg" alt="" className='w-full' />
                
                </div>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="p3.jpg" alt="" className='w-full' />
                
                </div>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="p4.jpg" alt="" className='w-full' />
                
                </div>
            </div>
            <h1 className='text-center font-bold font-sans text-2xl p-4'>Wordpress Projects</h1>
            <div className='w-[80%] rounded-lg border p-5 mt-5 mb-10 bg-white grid grid-cols-2 gap-5 mx-auto'>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="wordpress-p1.png" alt="" className='w-full' />
                
                </div>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="wordpress-p2.png" alt="" className='w-full' />
                
                </div>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="bg4.jfif" alt="" className='w-full' />
                
                </div>
                <div className='w-[80%] border rounded-lg p-4 cursor-pointer'>
                    <img src="Components.png" alt="" className='w-full' />
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio