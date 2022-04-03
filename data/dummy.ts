import { IRevenueData } from "../components/RevenueCard/type";
import { IHomeBannerData } from "../components/HomeBanner/type";

export const todayRevenueData: IRevenueData = {
  headers: [{label: '오늘 매출'}, {label: '어제 매출'}, {label: '포스 매출'}],
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
  headers: [{label: '주간 매출', hasRedDot: true}, {label: '월간 매출'}],
  contents: [
    {
      label: '이번주 총 매출',
      value: '12,102,500원',
      isBoldBig: false,
      description: '5.10 (월) ~ 5.13 (목)'
    },
    {
      label: '지난주 총 매출',
      value: '14,539,600원',
      isBoldBig: false,
      description: '5.3 (월) ~ 5.9 (일)'
    },
    {
      label: '작년 5월 2주차 총 매출',
      value: '14,539,600원',
      isBoldBig: false,
      description: '2020.5.2 (월) ~ 5.8 (일)'
    },
  ],
  hasSeeMoreButton: false
}

export const assetManage: IRevenueData = {
  headers: [{label: '자산 관리', isNew: true}],
  headerCriteria: '4.19 기준',
  contents: [
    {
      label: '내 매장 신용점수',
      value: '950점',
      isBoldBig: false,
      hasRedDot: true,
      description: '새로운 변동이력이 있습니다'
    },
    {
      label: '내 대출',
      value: '157,671,000원',
      isBoldBig: false,
      description: '4.19 기준'
    }
  ],
  hasSeeMoreButton: false
}

export const costManage: IRevenueData = {
  headers: [{label: '비용 관리'}],
  contents: [
    {
      label: '최근 7일간 세금계산서',
      value: '30건',
      isBoldBig: false,
      hasRedDot: true,
      description: '발급일 기준'
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
  headers: [{label: '계좌 관리'}],
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
      isBoldBig: false,
      description: '281**12321',
      iconSrc: '/icons/shinhan.svg'
    },
    {
      label: '우리은행',
      value: '잔액보기',
      isBoldBig: false,
      description: '100**95702',
      iconSrc: '/icons/woori.svg'
    },
    {
      label: '하나은행',
      value: '7,339,310원',
      isBoldBig: false,
      description: '381**02912',
      iconSrc: '/icons/hana.svg'
    }
  ],
  hasSeeMoreButton: true
}
