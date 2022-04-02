import { IRevenueData } from "../components/RevenueCard/type";
import { IHomeBannerData } from "../components/HomeBanner/type";

export const todayRevenueData: IRevenueData = {
  headers: ['오늘 매출', '어제 매출', '포스 매출'],
  contents: [
    {
      label: '오늘 (00:00 ~ 14:51)',
      value: '4,102,500원',
      isBoldBig: true
    },
    {
      label: '카드매출',
      value: '4,102,500원',
      isBoldBig: false
    },
    {
      label: '세금계산서 (발급일 기준)',
      value: '수집불가',
      isBoldBig: false
    },
  ],
  hasSeeMoreButton: false
}

export const weeklyRevenueData: IRevenueData = {
  headers: ['주간 매출', '월간 매출'],
  contents: [
    {
      label: '이번주 총 매출',
      value: '12,102,500원',
      isBoldBig: false
    },
    {
      label: '지난주 총 매출',
      value: '14,539,600원',
      isBoldBig: false
    },
    {
      label: '작년 5월 2주차 총 매출',
      value: '14,539,600원',
      isBoldBig: false
    },
  ],
  hasSeeMoreButton: false
}

export const assetManage: IRevenueData = {
  headers: ['자산 관리'],
  headerCriteria: '4.19 기준',
  contents: [
    {
      label: '내 매장 신용점수',
      value: '950건',
      isBoldBig: false
    },
    {
      label: '내 대출',
      value: '157,671,000원',
      isBoldBig: false
    }
  ],
  hasSeeMoreButton: false
}

export const costManage: IRevenueData = {
  headers: ['비용 관리'],
  contents: [
    {
      label: '최근 7일간 세금계산서',
      value: '30건',
      isBoldBig: false
    },
    {
      label: '6월 현금영수증 매입',
      value: '302,900원',
      isBoldBig: false
    },
    {
      label: '6월 카드 지출',
      value: '1,239,000원',
      isBoldBig: false
    },
    {
      label: '6월 예상 급여',
      value: '확인하기',
      isBoldBig: false
    }
  ],
  hasSeeMoreButton: false
}

export const accountManage: IRevenueData = {
  headers: ['계좌 관리'],
  headerCriteria: '17:31 기준',
  contents: [
    {
      label: '전체',
      value: '26,719,710원',
      isBoldBig: true
    },
    {
      label: '신한은행',
      value: '19,380,400원',
      isBoldBig: false
    },
    {
      label: '우리은행',
      value: '잔액보기',
      isBoldBig: false
    },
    {
      label: '하나은행',
      value: '7,339,310원',
      isBoldBig: false
    }
  ],
  hasSeeMoreButton: true
}

export const homeDummy1: IHomeBannerData = {
  type: 'badge',
  badge: {
    label: '추천글',
    badgeColor: 'mint',
    backgroundColor: '#FF7452',
    text: "네, 제가 주인입니다(2)",
    url: 'https://offline.cashnote.kr/content_pages/13514?business_id={public_id}&utm_source=main_tab'
  }
}

export const homeDummy2: IHomeBannerData = {
  type: 'image',
  image: {
    title: '최대 100만원 이자지원!',
    description: '사장님 대출이자 대신 내드립니다.',
    textColor: '#292929',
    backgroundColor: '#EBECF0',
    backgroundImage: 'https://bluebird-production.s3.amazonaws.com/uploads/image/image/4795/%EC%9D%B4%EC%9E%90%EC%A7%80%EC%9B%90%EC%9D%B4%EB%B2%A4%ED%8A%B8_home_top.png',
    url: 'https://offline.cashnote.kr/finance?utm_source=cashnote_service&utm_medium=home_top_banner&utm_campaign=finance_page_support_interest&utm_content=max_million'
  },
}
