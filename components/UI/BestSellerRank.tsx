'use client'
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

interface DataItem {
  date: string
  best_sellers_rank: string
}

interface BestSellersRankAnalysisProps {
  data: DataItem[]
}

const BestSellersRankAnalysis: React.FC<BestSellersRankAnalysisProps> = ({
  data
}) => {
  // Calculate the percentage change in Best Sellers Rank compared to the last date
  const calculatePercentageChange = (
    currentRank: number,
    previousRank: number
  ) => {
    if (previousRank === 0) {
      return 'N/A'
    }
    const change = ((currentRank - previousRank) / Math.abs(previousRank)) * 100
    return change.toFixed(2) + '%'
  }

  // Convert data into a format suitable for Recharts
  const chartData = data.map((item) => ({
    date: item.date,
    rank: Number(item.best_sellers_rank)
  }))

  return (
    <div className="border rounded-lg p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Best Sellers Rank Analysis</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="rank"
            name="Best Sellers Rank"
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">
          Best Sellers Rank Trends:
        </h3>
        <ul className="list-disc list-inside">
          {data.map((item, index) => {
            if (index === 0) {
              return (
                <li key={item.date}>
                  {item.date}: {item.best_sellers_rank}
                </li>
              )
            } else {
              const previousRank = Number(data[index - 1].best_sellers_rank)
              const percentageChange = calculatePercentageChange(
                Number(item.best_sellers_rank),
                previousRank
              )
              return (
                <li key={item.date}>
                  {item.date}: {item.best_sellers_rank} (Change:{' '}
                  {percentageChange})
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default BestSellersRankAnalysis
