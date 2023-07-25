// interfaces.ts
export interface SalesData {
  date: string;
  units: string;
  units_lastyear: string;
  revenue: string;
  revenue_lastyear: string;
  cogs: string;
  cogs_lastyear: string;
  ads_cost: number;
  ads_cost_lastyear: number;
  best_sellers_rank: string;
  best_sellers_rank_lastyear: string;
  ppc_revenue_adjusted: string;
  ppc_revenue_adjusted_lastyear: string;
  ads_cost_adjusted: string;
  ads_cost_adjusted_lastyear: string;
  units_dd: string;
  revenue_dd: string;
  cogs_dd: string;
  ads_dd: number;
  best_sellers_rank_dd: string;
  units_projected: number;
  revenue_projected: number;
  cogs_projected: number;
  best_sellers_rank_projected: string;
  ppc_revenue_dd: number;
  ppc_revenue: number;
  ppc_revenue_lastyear: number;
  ppc_revenue_projected: number;
  ads_cost_projected: number;
}

export interface ReactChildren {
  children: React.ReactNode
}



