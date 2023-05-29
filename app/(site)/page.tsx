import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className='text-7xl font-extrabold text-neutral-100'>Hello I'm <span className='bg-gradient-to-r from-purple-400 via-orange-300 to bg-red-500 bg-clip-text text-transparent'>Kinza</span>!</h1>

      <p className='mt-3 text-xl text-gray-200'>
        Thanks for visiting my website. Check out my projects:
      </p>

      <h2 className="mt-24 font-bold text-gray-50 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link 
          href={`/projects/${project.slug}`}
          key={project._id} 
          className='border border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition'>

          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover w-full h-44 rounded-lg border border-gray-500"
              />
          )}
          <div className="mt-2 font-extrabold text-orange-300 text-center object-none">{project.name}</div>
          
        </Link>
        
      ))} 
      </div>
    </div>
  )
}
