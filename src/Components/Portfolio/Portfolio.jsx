import React from 'react'

function Portfolio() {
  return (
    <div className='w-full'>
        <h1 className='text-center text-3xl mt-4 p-4 font-bold font-mono text-cyan-600'>My Portfolio</h1>
        <div className='w-full mx-auto bg-slate-50 mt-5 rounded-lg'>
            <h1 className='text-center font-bold font-sans text-2xl p-4'>React JS Projects</h1>
            <div className="w-[90%] max-w-7xl mx-auto p-5 bg-white rounded-lg border mt-5 mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
  {/* Project 1 */}
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
    <img src="p1.jpeg" alt="Project 1" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">Project 1</p>
  </a>

  {/* Project 2 */}
  <a href="#" target="_blank" rel="noopener noreferrer" className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
    <img src="coffee-project.png" alt="Coffee Project" className="w-full rounded-lg mb-2" />
    <img src="coffee-project2.png" alt="Coffee Project - Screenshot 2" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">Coffee Project</p>
  </a>

  {/* Project 3 */}
  <a href="#" target="_blank" rel="noopener noreferrer" className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
    <img src="p3.jpg" alt="Project 3" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">Project 3</p>
  </a>

  {/* Project 4 */}
  <a href="#" target="_blank" rel="noopener noreferrer" className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
    <img src="p4.jpg" alt="Project 4" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">Project 4</p>
  </a>
</div>

            <h1 className='text-center font-bold font-sans text-2xl p-4'>Wordpress Projects</h1>
            <div className="w-[90%] max-w-7xl mx-auto p-5 bg-white rounded-lg border mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
  {/* Project 1 */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
  >
    <img src="wordpress-p1.png" alt="WordPress Project 1" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">WordPress Project 1</p>
  </a>

  {/* Project 2 */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
  >
    <img src="wordpress-p2.png" alt="WordPress Project 2" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">WordPress Project 2</p>
  </a>

  {/* Project 3 */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
  >
    <img src="m4ktraders.png" alt="M4K Traders Project" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">M4K Traders</p>
  </a>

  {/* Project 4 */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
  >
    <img src="global.png" alt="Global Project" className="w-full rounded-lg" />
    <p className="mt-2 text-center font-semibold">Global Project</p>
  </a>
</div>

        </div>
    </div>
  )
}

export default Portfolio