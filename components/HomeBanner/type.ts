export interface IHomeBanner {
  data: IHomeBannerData
}

export interface IHomeBannerData {
  type: 'badge' | 'image'
  badge?: {
    label: string,
    badgeColor: string,
    backgroundColor: string,
    text: string,
    url: string
  },
  image?: {
    title: string,
    description: string,
    textColor: string,
    backgroundColor: string,
    backgroundImage: string,
    url: string
  }
}
