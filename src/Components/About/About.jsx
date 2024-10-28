import React from 'react'

function About() {
  return (
    <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center md:justify-center lg:gap-12">
                <div class="flex-1 p-4 md:w-3/5">
                <div className='md:w-full'><img src="about.png" alt="" className='w-[20vw] mx-auto'/></div>
                <p class="mb-10 md:max-w-4xl  mx-auto text-2xl font-mono">I am  a Frontend Developer  with over a year  of professional expertise in the field.Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

                <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li class="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                        <i class="fa-solid fa-code text-3xl mt-4"></i>
                        <h3 class="my-4 font-semibold text-gray-700 text-2xl">Languages</h3>
                        <p class="text-gray-600 break-words text-xl">HTML-CSS-JAVASCRIPT-BOOTSRAP-TAILWIND CSS-REACT JS and Wordpress</p>
                    </li>
                    <li class="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                        <i class="fa-solid fa-graduation-cap text-3xl mt-4"></i>
                        <h3 class="my-4 font-semibold text-gray-700 text-2xl">Education</h3>
                        <p class="text-gray-600 text-xl">Studying in Bachelors in Computer Science [1st Semester]</p>
                    </li>
                    <li class="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                        <i class="fa-solid fa-check-to-slot text-3xl mt-4"></i>
                        <h3 class="my-4 font-semibold text-gray-700 text-2xl">Projects</h3>
                        <p class="text-gray-600  text-xl">Built more than 5 Projects.</p>
                    </li>
            </ul>
            <h4 class="mt-10 mb-4 font-semibold text-3xl">Tools I Use</h4>
            <ul class="flex items-center gap-3 md:gap-6 mx-auto justify-center md:mt-10">
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                    <img src="vscode.png" alt="" className='p-2'/>
                </li>
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                    <img src="github.svg" alt=""  className='p-2'/>
                </li>
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                    <img src="jest.png" alt=""  className='p-2'/>
                </li>
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                   <img src="vercel.svg" alt=""  className='p-2'/> 
                </li>
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                    <img src="vitejs.svg" alt=""  className='p-2'/>
                </li>
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                    <img src="wordpress.png" alt=""  className='p-2'/>
                </li>
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                    <img src="canva.jfif" alt=""  className='p-2'/>
                </li>
                <li class="flex items-center justify-center w-12 md:w-16 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500">
                    <img src="cypress.webp" alt=""  className='p-2'/>
                </li>
            </ul>
            </div>
                </div>
            </div>
        </div>
  )
}

export default About