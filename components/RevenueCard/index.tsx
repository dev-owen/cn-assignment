import React from 'react';
import * as $ from './style';
import { IRevenueCard } from "./type";

const RevenueCard = ({data}: IRevenueCard) => {
  const {headers, contents, hasSeeMoreButton, headerCriteria} = data;
  return (
    <$.Wrapper hasHeaderCriteria={!!headerCriteria}>
      <div className="topBar">
        {headers.map((el: any, idx: number) => (
          <div className={`topBarLabel ${idx === 0 && 'selected'}`} key={`tb-${idx}`}>{el.label}{el?.isNew && <img className="isNew" src="/icons/isNew.svg" alt="N"/>}{el?.hasRedDot && <img className="bigRedDot" src="/icons/bigRedDot.svg" alt="점"/>}</div>
        ))}
        {headerCriteria && (
          <div className="headerCriteria">{headerCriteria}</div>
        )}
      </div>
      <div className="cardContent">
        {contents.map((el: any, idx: number) => (
          <div className="cardItem" key={`card-${idx}`}>
            <span>{el.label}</span>
            <span className={`${el.isBoldBig && 'bigBold'} criteria`}>{el?.hasRedDot && <img src="/icons/reddot.svg" alt="점"/>}{el.value}</span>
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
