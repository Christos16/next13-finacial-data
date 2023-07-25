import {SalesData} from '@/lib/interface'
import React from 'react'

interface ProfitLossProjectionProps {
  data: SalesData[]
}

const ProfitLossProjection: React.FC<ProfitLossProjectionProps> = ({data}) => {
  // Calculate the total revenue and total cost for the projected year
  const totalRevenue = data.reduce(
    (total, item) => total + Number(item.revenue_projected),
    0
  )
  const totalCost = data.reduce(
    (total, item) =>
      total + Number(item.cogs_projected) + Number(item.ads_cost_projected),
    0
  )

  // Check if totalRevenue is a valid number before proceeding
  if (isNaN(totalRevenue)) {
    return <div>Error: Invalid data for total revenue.</div>
  }

  // Check if totalCost is a valid number before proceeding
  if (isNaN(totalCost)) {
    return <div>Error: Invalid data for total cost.</div>
  }

  // Calculate the estimated profit or loss
  const estimatedProfitLoss = totalRevenue - totalCost

  // Determine if it's a profit or loss
  const isProfit = estimatedProfitLoss >= 0

  // Calculate the absolute value of the estimated profit or loss
  const absoluteProfitLoss = Math.abs(estimatedProfitLoss)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Profit/Loss Projection for Next Year
      </h2>
      <p>Total Revenue (Projected): ${totalRevenue.toFixed(2)}</p>
      <p>Total Cost (Projected): ${totalCost.toFixed(2)}</p>
      <p>
        Estimated {isProfit ? 'Profit' : 'Loss'} (Projected): $
        {estimatedProfitLoss.toFixed(2)}
      </p>
      <p>Is Profit? (Projected): {isProfit ? 'Yes' : 'No'}</p>
      <p>Absolute Profit/Loss (Projected): ${absoluteProfitLoss.toFixed(2)}</p>
    </div>
  )
}

export default ProfitLossProjection
