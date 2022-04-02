import React from 'react';
import * as $ from './style';

const TodayRevenue = () => {
  return (
    <$.Wrapper>
      <div className="topBar">
        <div className="topBarLabel selected">오늘매출</div>
        <div className="topBarLabel">어제매출</div>
        <div className="topBarLabel">포스매출</div>
      </div>
      <div className="cardContent">
        <div className="cardItem">
          <span>오늘(00:00 ~ 14:51)</span>
          <span className="bigBold criteria">4,102,500원</span>
          <img src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
        </div>
        <div className="cardItem">
          <span>카드매출</span>
          <span className="criteria">4,102,500원</span>
          <img src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
        </div>
        <div className="cardItem">
          <span>세금계산서(발급일 기준)</span>
          <span className="criteria">수집불가</span>
          <img src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
        </div>
      </div>
    </$.Wrapper>
  );
};

export default TodayRevenue;
