import React from 'react';
import * as $ from './style';

const ShortCutList = () => {
  const shortcuts = [
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__client.svg',
      label: '거래처'
    },
    {
      icon: '/icons/ic__service__tax.svg',
      label: '세금'
    },
    {
      icon: '/icons/ic__service__pos.svg',
      label: '포스'
    },
    {
      icon: '/icons/ic__service__review.svg',
      label: '리뷰'
    },
    {
      icon: '/icons/ic__service__delivery.svg',
      label: '배달'
    },
    {
      icon: '/icons/ic__service__staff.svg',
      label: '직원'
    },
    {
      icon: '/icons/ic__service__all_view.svg',
      label: '전체보기'
    }
  ]
  return (
    <$.Wrapper>
      {shortcuts.map((el, idx) => (
        <div className="shortcut" key={`sc-${idx}`}>
          <img src={el.icon} alt="아이콘"/>
          <label>{el.label}</label>
        </div>
      ))}
    </$.Wrapper>
  );
};

export default ShortCutList;
