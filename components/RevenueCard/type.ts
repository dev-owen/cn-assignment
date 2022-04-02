export interface IRevenueCard {
  data: IRevenueData
}

export interface IRevenueData {
  headers: string[],
  headerCriteria?: string,
  contents: {
      label: string,
      value: string,
      isBoldBig: boolean
    }[],
  hasSeeMoreButton: boolean
}
