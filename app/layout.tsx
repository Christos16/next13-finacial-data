import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import {ReactChildren} from '@/lib/interface'
import {Metadata} from 'next'
import './globals.css'
import Sidebar from '@/components/UI/Sidebar'

/**
 * Default metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata
 */
export const metadata: Metadata = {
  title: 'Christos Test',
  description: 'This is a coding test to display some financial data'
}

/**
 * The homepage root layout.
 *
 */
export default function RootLayout({children}: ReactChildren) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen flex flex-col">
        <Header />
        <div className="md:flex flex-1">
          <Sidebar />
          <main className="md:ml-[104px] md:mt-[0px] mt-[20px] flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
