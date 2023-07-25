'use client'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

/**
 * Ads Cost Year Comparison
 * A React functional component to display the comparison in ads cost compared to last year
 */

interface DataItem {
  date: string
  ads_cost: number
  ads_cost_lastyear: number
}

interface AdsCostComparisonProps {
  data: DataItem[]
}

const AdsCostComparison: React.FC<AdsCostComparisonProps> = ({data}) => {
  return (
    <div className="border rounded-lg p-4 w-full">
      <h2 className="text-xl font-bold mb-4">
        Ads Cost Analysis (Present - Last year)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
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
          <Bar dataKey="ads_cost" fill="#8884d8" />
          <Bar dataKey="ads_cost_lastyear" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AdsCostComparison
