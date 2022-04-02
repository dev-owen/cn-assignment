import React from 'react';
import * as $ from './style';
import { IRevenueCard } from "./type";

const RevenueCard = ({data}: IRevenueCard) => {
  const {headers, contents, hasSeeMoreButton, headerCriteria} = data;
  return (
    <$.Wrapper hasHeaderCriteria={!!headerCriteria}>
      <div className="topBar">
        {headers.map((el: any, idx: number) => (
          <div className={`topBarLabel ${idx === 0 && 'selected'}`} key={`tb-${idx}`}>{el.label}{el?.isNew &&
          <img className="isNew" src="/icons/isNew.svg" alt="N"/>}{el?.hasRedDot &&
          <img className="bigRedDot" src="/icons/bigRedDot.svg" alt="점"/>}</div>
        ))}
        {headerCriteria && (
          <div className="headerCriteria">{headerCriteria}</div>
        )}
      </div>
      <div className="cardContent">
        {contents.map((el: any, idx: number) => (
          <div className="cardItem" key={`card-${idx}`}>{
            el?.description ? (
              <>
              {el?.iconSrc && <img className="icon" src={el.iconSrc} alt="아이콘"/>}
                <div className="textContainer">
                  <div className="title">{el.label}</div>
                  <div className="description">{el.description}</div>
                </div>
                <div className="valueContainer" style={{marginLeft: !!el?.iconSrc ? 'auto' : '0'}}>
                  <span className={`${el.isBoldBig && 'bigBold'} criteria`}>{el?.hasRedDot &&
                  <img src="/icons/reddot.svg" alt="점"/>}{el.value}</span>
                  <img className="arrowDown" src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
                </div>
              </>
            ) : (
              <>
                <span style={{lineHeight: !!el?.isBoldBig ? '25px' : ''}}>{el.label}</span>
                <span className={`${el.isBoldBig && 'bigBold'} criteria`}>{el?.hasRedDot &&
                <img src="/icons/reddot.svg" alt="점"/>}{el.value}</span>
                <img src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
              </>
            )
          }
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
