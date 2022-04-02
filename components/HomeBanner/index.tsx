import React from 'react';
import * as $ from './style'
import { IHomeBanner } from "./type";
import { useRouter } from "next/router";

const HomeNotice = ({data}: IHomeBanner) => {
  const router = useRouter();
  const {type, badge, image}= data;
  return (
    <$.Wrapper>
      {type === 'badge' && badge && (
        <div className="badgeContainer" onClick={() => router.push(badge.url)} style={{background: badge.backgroundColor}}>
          <span className="badge" style={{backgroundColor: badge.badgeColor}}>{badge.label}</span>
          <span className="text">{badge.text}</span>
          <img src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
        </div>
      )}
      {type === 'image' && image && (
        <div className="imageContainer" style={{backgroundColor: image.backgroundColor, color: image.textColor}}>
          <div className="textArea">
            <div className="titleText">{image.title}</div>
            <div className="descriptionText">{image.description}</div>
          </div>
          <img src={image.backgroundImage} alt="이미지"/>
        </div>
      )}
    </$.Wrapper>
  );
};

export default HomeNotice;
