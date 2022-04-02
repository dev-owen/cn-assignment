import React from 'react';
import * as $ from './style';
import { IRevenueCard } from "./type";

const RevenueCard = ({data}: IRevenueCard) => {
  const {headers, contents, hasSeeMoreButton} = data;
  return (
    <$.Wrapper>
      <div className="topBar">
        {headers.map((el: any, idx: number) => (
          <div className={`topBarLabel ${idx === 0 && 'selected'}`} key={`tb-${idx}`}>{el}</div>
        ))}
      </div>
      <div className="cardContent">
        {contents.map((el: any, idx: number) => (
          <div className="cardItem" key={`card-${idx}`}>
            <span>{el.label}</span>
            <span className={`${el.isBoldBig && 'bigBold'} criteria`}>{el.value}</span>
            <img src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
          </div>
        ))}
      </div>
      {hasSeeMoreButton && (<div className="seeMore">
        더 보기
      </div>)}
    </$.Wrapper>
  );
};

export default RevenueCard;
