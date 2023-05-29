import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return <div>

        <header className="flex items-center justify-between">
            <h1 className="mt-2 font-extrabold text-orange-300 text-5xl drop-shadow">
                { project.name }
            </h1>

            <a href={project.url} 
            title="View Project" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-800 rounded-lg text-neutral-200 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-900 transition "
            >
                View Project
            </a>
        </header>

        {/* Content */}

        <div className="text-lg text-neutral-300 mt-6">
           <PortableText value={ project.content } />
        </div>

        {/* Image */}
        <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-400 object-cover rounded-xl "
        />
        
    </div>
}