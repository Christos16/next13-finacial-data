'use client'

import React, {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

const Sidebar = () => {
  const pathname = usePathname()
  const [selectedPage, setSelectedPage] = useState<string>('P&L')

  useEffect(() => {
    const path = pathname
    // Use the path to determine the selected page and update the state
    if (path === '/') setSelectedPage('/')
    else if (path === '/ads-cost-analysis') setSelectedPage('Ads Analysis')
    else if (path === '/best-seller-analysis') setSelectedPage('Best Seller')
    else if (path === '/profit-and-loss-projection')
      setSelectedPage('P&L Projection')
    else if (path === '/profit-and-loss') setSelectedPage('P&L')
  }, [pathname])

  return (
    <div
      className={`${'bg-[#3f3f3f]'} p-[23px] md:w-40 w-full p-4 border-[1px] rounded-lg flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center">
        <Link href="/" className="w-full">
          <div
            onClick={() => setSelectedPage('/')}
            className={`${
              selectedPage === '/'
                ? 'bg-gray-400'
                : 'bg-gray-600 hover:bg-gray-200'
            } text-white p-2 rounded-lg inline-block cursor-pointer w-full`}
          >
            <div className="flex items-center">
              <p className="text-xs">Home</p>
            </div>
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
        <Link href="/profit-and-loss" className="w-full">
          <div
            onClick={() => setSelectedPage('P&L')}
            className={`${
              selectedPage === 'P&L'
                ? 'bg-gray-400'
                : 'bg-gray-600 hover:bg-gray-200'
            } cursor-pointer my-4 p-2 rounded-lg inline-block w-full`}
          >
            <div className="flex items-center">
              <p className="text-xs">P&L</p>
            </div>
          </div>
        </Link>
        <Link href="/ads-cost-analysis" className="w-full">
          <div
            onClick={() => setSelectedPage('Ads Analysis')}
            className={`${
              selectedPage === 'Ads Analysis'
                ? 'bg-gray-400'
                : 'bg-gray-600 hover:bg-gray-200'
            } cursor-pointer my-4 p-2 rounded-lg inline-block w-full`}
          >
            <div className="flex items-center">
              <p className="text-xs">Ads Analysis</p>
            </div>
          </div>
        </Link>
        <Link href="/best-seller-analysis" className="w-full">
          <div
            onClick={() => setSelectedPage('Best Seller')}
            className={`${
              selectedPage === 'Best Seller'
                ? 'bg-gray-400'
                : 'bg-gray-600 hover:bg-gray-200'
            } cursor-pointer my-4 p-2 rounded-lg inline-block w-full`}
          >
            <div className="flex items-center">
              <p className="text-xs">Best Seller</p>
            </div>
          </div>
        </Link>
        <Link href="/profit-and-loss-projection" className="w-full">
          <div
            onClick={() => setSelectedPage('P&L Projection')}
            className={`${
              selectedPage === 'P&L Projection'
                ? 'bg-gray-400'
                : 'bg-gray-600 hover:bg-gray-200'
            } cursor-pointer my-4 p-2 rounded-lg inline-block w-full`}
          >
            <div className="flex items-center">
              <p className="text-xs">Profit & Loss Projection</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
