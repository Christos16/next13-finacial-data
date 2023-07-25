'use client'
import React from 'react'

/**
 * ProfitAndLoss Component
 * A React functional component to display the profit and loss data in a table format.
 */
interface ProfitAndLossProps {
  data: Array<{
    date: string
    units: string
    units_lastyear: string
    revenue: string
    revenue_lastyear: string
    cogs: string
    cogs_lastyear: string
    ads_cost: number
    ads_cost_lastyear: number
  }>
}

const ProfitAndLoss: React.FC<ProfitAndLossProps> = ({data}) => {
  // Simple calculation to estimate profit or loss for each entry based on revenue - cost of good sold - ads cost
  return (
    <div className="border rounded-lg p-4 w-full overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Profit and Loss (in thousands)</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Units</th>
            <th>Revenue</th>
            <th>COGS</th>
            <th>Ads Cost</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const revenue = Number(item.revenue)
            const cogs = Number(item.cogs)
            const adsCost = Number(item.ads_cost)
            const profitLoss = revenue - cogs - adsCost
            const resultColor =
              profitLoss >= 0 ? 'text-green-600' : 'text-red-600'

            // Calculate differences for last year's data
            const revenueLastYear = Number(item.revenue_lastyear)
            const cogsLastYear = Number(item.cogs_lastyear)
            const adsCostLastYear = Number(item.ads_cost_lastyear)
            const profitLossLastYear =
              revenueLastYear - cogsLastYear - adsCostLastYear

            const profitLossDifference = profitLoss - profitLossLastYear
            const profitLossExplanation =
              profitLossDifference >= 0
                ? `Improved by $${profitLossDifference.toFixed(
                    2
                  )} compared to the same date last year.`
                : `Decreased by $${Math.abs(profitLossDifference).toFixed(
                    2
                  )} compared to the same date last year.`

            return (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.units}</td>
                <td>{item.revenue}</td>
                <td>{item.cogs}</td>
                <td>{item.ads_cost}</td>
                <td className={resultColor}>
                  {profitLoss >= 0 ? 'Profit' : 'Loss'}
                </td>
                <td>{profitLoss.toFixed(2)}</td>
                <td>{profitLossExplanation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProfitAndLoss
