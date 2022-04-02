export interface IRevenueCard {
  data: IRevenueData
}

export interface IRevenueData {
  headers: {
    label: string,
    isNew?: boolean,
    hasRedDot?: boolean
  }[],
  headerCriteria?: string,
  contents: {
      label: string,
      description?: string,
      value: string,
      isBoldBig: boolean,
      hasRedDot?: boolean
      iconSrc?: string
    }[],
  hasSeeMoreButton: boolean
}
