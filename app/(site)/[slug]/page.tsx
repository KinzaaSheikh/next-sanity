import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page ({ params }: Props) {
    const page = await getPage(params.slug)

    return (
        <div>
            <h1 className="mt-2 font-extrabold text-orange-300 text-5xl drop-shadow">
            {page.title}
            </h1>

            <div className="text-lg text-neutral-300 mt-10">
            <PortableText value={page.content} />
            </div>
        </div>
    )
}