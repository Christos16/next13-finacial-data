import ProfitAndLoss from '@/components/UI/ProfitAndLoss'
import {formatDate} from '@/lib/functions'
import {SalesData} from '@/lib/interface'
import {Metadata} from 'next'
import {notFound} from 'next/navigation'

/**
 * Default metadata.
 *
 */
export const metadata: Metadata = {
  title: 'Profasee - Christos Financial Data',
  description: 'This is the profit and loss page'
}

/**
 * The homepage.
 *
 */
async function getData() {
  const res = await fetch(`${process.env.API_URL}`)

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const formattedSalesData = data?.payload?.results
    .slice(0, 6)
    .map((item: SalesData) => ({
      ...item,
      date: formatDate(new Date(item.date))
    }))

  // Access and return the results directly from the payload
  return formattedSalesData // Return a maximum of 6 items
}

export default async function HomePage() {
  const salesData = await getData()

  if (!salesData) {
    notFound()
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <ProfitAndLoss data={salesData} />
    </div>
  )
}
