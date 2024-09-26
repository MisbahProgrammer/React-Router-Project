import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                    Frontend Developer
                    <span className="hidden sm:block text-4xl">Misbah ur Rehman</span>
                </h2>

                <Link
                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-cyan-500 rounded-lg hover:opacity-75"
                    to="/"
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

    <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Languages</h1>
    <div class="flex-1 p-4 md:w-3/5">
                <p class="mb-10 md:max-w-2xl">I am  a Frontend Developer  with over a year  of professional expertise in the field.Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

                <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li class="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                        <i class="fa-solid fa-code text-3xl mt-4"></i>
                        <h3 class="my-4 font-semibold text-gray-700">Languages</h3>
                        <p class="text-gray-600 text-sm break-words">HTML-CSS-JAVASCRIPT-BOOTSRAP-TAILWIND CSS-REACT JS and Wordpress</p>
                    </li>
                    <li class="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                        <i class="fa-solid fa-graduation-cap text-3xl mt-4"></i>
                        <h3 class="my-4 font-semibold text-gray-700">Education</h3>
                        <p class="text-gray-600 text-sm">Studying in Bachelors in Computer Science [1st Semester]</p>
                    </li>
                    <li class="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                        <i class="fa-solid fa-check-to-slot text-3xl mt-4"></i>
                        <h3 class="my-4 font-semibold text-gray-700">Projects</h3>
                        <p class="text-gray-600 text-sm">Built more than 5 Projects.</p>
                    </li>
            </ul>
            <h4 class="mt-4 mb-4 font-semibold">Tools I Use</h4>
            <ul class="flex items-center gap-3 md:gap-6">
                
                <li class="flex items-center justify-center w-12 md:w-14 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
        
                </li>
                <li class="flex items-center justify-center w-12 md:w-14 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
        
                </li>
                <li class="flex items-center justify-center w-12 md:w-14 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
        
                </li>
                <li class="flex items-center justify-center w-12 md:w-14 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
        
                </li>
                <li class="flex items-center justify-center w-12 md:w-14 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">

                </li>
            </ul>
            </div>
</div>
  )
}

export default Home