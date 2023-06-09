import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My portfolio website',
  description: 'Generated by create Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 



{

  const pages = await getPages();


  return (
    <html lang="en">
      <body 
      className=
        "max-w-6xl mx-auto py-10"
        
      >

        <header className='flex items-center justify-between'>

          <Link href='/'
            className='bg-gradient-to-r from-purple-400 via-orange-300 to bg-red-500 bg-clip-text text-transparent text-3xl'>
              KINZA
          </Link>

          <div className='flex items-center gap-5 text-neutral-300 text-lg'>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>
                { page.title }
              </Link>
            ))}
          </div>

        </header>


        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
