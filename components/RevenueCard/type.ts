export interface IRevenueCard {
  data: {
    headers: string[],
    contents: [
      label: string,
      value: string,
      isBoldBig: boolean
    ],
    hasSeeMoreButton: boolean
  }
}
