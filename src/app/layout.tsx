import { Footer } from './components/Shared/Layout/Footer'
import { Navbar } from './components/Shared/Layout/Navbar'
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col gap-10 justify-between'>
        <div className='flex flex-col gap-10'>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}