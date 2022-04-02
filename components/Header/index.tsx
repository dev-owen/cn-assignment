import React from 'react';
import * as $ from './style';

const Header = () => {
  return (
    <$.Wrapper>
      <div className="workplace">
        <p>캐시노트 1호점</p>
        <img src="/icons/ic__system__chevron_down__outline.svg" alt="화살표"/>
      </div>
    <button className="setting">
      <img src="/icons/ic__system__settings__outline.svg" alt="설정"/>
      <p>설정</p>
    </button>
    </$.Wrapper>
  );
};

export default Header;
