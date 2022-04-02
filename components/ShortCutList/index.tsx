import React from 'react';
import * as $ from './style';

const ShortCutList = () => {
  const shortcuts = [
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
    },
    {
      icon: '/icons/ic__service__accountbook.svg',
      label: '장부'
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
