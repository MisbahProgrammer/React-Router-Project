import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto relative">
                <h2 className="text-3xl w-full font-bold md:text-5xl md:mt-0 bg-orange-400 md:bg-transparent relative rounded-lg">
                    Frontend Developer
                    <span className="text-2xl block md:text-4xl">Misbah ur Rehman</span>
                </h2>

                <Link
                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-cyan-500 rounded-lg hover:opacity-75"
                    to="portfolio"
                >
                    <svg
                        fill="white"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    >
                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                    </svg>
                    &nbsp; Portfolio
                </Link>
            </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96 rounded-lg" src="public/profile1.jpg" alt="image1" />
        </div>
    </aside>

    <div className="grid  place-items-center sm:mt-20">
        <img className="sm:w-96 w-48 rounded-lg" src="/coding.jpg" alt="image2" />
    </div>

    {/* --------------------------Services---------------------------------------- */}
    <div id="services" class="w-full md:scroll-mt-20 px-[12%] py-10">
        <h4 class="text-center text-2xl mb-2">What i offer</h4>
        <h2 class="text-center text-5xl font-semibold ">My Services</h2>
        <p class="text-center max-w-2xl mx-auto mt-5 mb-12 text-xl">I am a Frontend Developer from Pakistan, with over a year of experience in a startup and on freelancing platforms like Guru,Freelancer,People per hour. </p>
        <div class="grid grid-cols-1 md:grid-cols-3 flex-wrap  gap-6 my-10">
            <div class=" flex flex-col items-center justify-center border border-gray-400 rounded-lg  px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
                <img src="webdev.png" alt="" className='w-60'/>
                <h3 class="font-semibold text-xl">Web Development</h3>
                <p>Create custom websites from scratch or redesign existing ones.</p>
                <a href="" class="flex items-center align-middle gap-2 text-xl mt-4 text-cyan-700">Read more <i class="fa-solid fa-arrow-right w-4 pt-1 "></i></a>
            </div>
            <div class="flex flex-col items-center justify-center border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
                <img src="wordpress.png" alt="" className='w-60'/>
                <h3 class="font-semibold text-xl">Wordpress Development</h3>
                <p>Creating and customizing WordPress websites using themes, plugins, and custom code.</p>
                <a href="" class="flex items-center align-middle gap-2 text-xl mt-4 text-cyan-700">Read more <i class="fa-solid fa-arrow-right w-4 pt-1 "></i></a>
            </div>
           
            <div class="flex flex-col items-center justify-center border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
                <img src="code-audit.png" alt=""  className='w-60'/>
                <h3 class="font-semibold text-xl">Frontend Code Audit</h3>
                <p>Review and analyze existing frontend code to identify areas for improvement and optimization.</p>
                <a href="" class="flex items-center align-middle gap-2 text-xl mt-4 text-cyan-700">Read more <i class="fa-solid fa-arrow-right w-4 pt-1 "></i></a>
            </div>
        </div>
     </div>
    
</div>
  )
}

export default Home