import type { NextPage } from 'next'
import styled from "styled-components";
import Header from "../components/Header";
import ShortCutList from "../components/ShortCutList";
import RevenueCard from "../components/RevenueCard";
import { useEffect, useState } from "react";
import { accountManage, assetManage, costManage, todayRevenueData, weeklyRevenueData } from "../data/dummy";
import { IHomeBannerData } from "../components/HomeBanner/type";
import HomeBanner from '../components/HomeBanner';
import { useBottomSheet } from "../hooks/useBottomSheet";
import BottomSheetModal from "../components/BottomSheetModal";
import { useRouter } from "next/router";


const Wrapper = styled.div`
  width: 360px;
  flex-direction: column;
  display: flex;
  margin: 0 auto;

  p {
    margin: 0;
  }

  .mainContent {
    background-color: #f5f5f5;
    padding: 0 1rem 1rem;
  }

  .addButton {
    margin-top: 16px;
    background-color: #ececec;
    width: 100%;
    padding: 12px 0;
    border-radius: 12px;
    text-align: center;

    span {
      position: relative;
      bottom: 6px;
      font-size: 14px;
    }
  }

  .MMPSheetContainer {
    padding: 16px;
    text-align: center;

    .title {
      font-size: 21px;
      font-weight: 700;
      color: #292929;
      margin-bottom: 16px;
    }

    .description {
      font-size: 14px;
      color: #5e5e5e;
      margin-bottom: 16px;
    }

    img {
      width: 100%;
      border-radius: 8px;
    }

    button {
      font-weight: 600;
      width: 100%;
      border: 0;

      :hover {
        cursor: pointer;
      }

      &.seeMore {
        border-radius: 16px;
        background-color: #00B1BB;
        color: white;
        padding: 16px 0;
        margin-bottom: 16px;
      }

      &.notShow {
        font-size: 13px;
        color: #c6c6c6;
        background-color: white;
      }
    }
  }
  
  .workplaceSheet {
    
    .title {
      color: #1C1C1C;
      font-weight: bold;
      font-size: 19px;
      position: relative;
      top: -20px;
    }
    
    .workplaceName {
      display: flex;
      justify-content: space-between;
      padding: 16px 0;
      
      span {
        color: #1C1C1C;
      }
    }
    
    .addWorkspace {
      display: flex;
      align-items: center;
      padding: 16px 0;
      color: #00B1BB;
    }
  }
`

const Home: NextPage = () => {
  const [home, setHome] = useState<IHomeBannerData[]>([]);
  const [bottomSheet, setBottomSheet] = useState<any>([]);
  const {toggle, isOpenBottomSheet} = useBottomSheet();
  const [modalType, setModalType] = useState<'bottomSheet' | 'workplace'>('bottomSheet')
  const router = useRouter();

  const closeHandler = () => {
    localStorage.setItem('bottomSheet', 'close');
    toggle(false);
  }

  const workplaceHandler = () => {
    setModalType('workplace');
    toggle(true);
  }

  useEffect(() => {
    fetch('https://ma.kcd.partners/staging/mmp/v2/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"id_type":"user_business","id":"-1","placement_group":"fe_project_home"}'
    }).then(r => r.json()).then(data => setHome([...data.placements.map((el: any) => {
      const template = el?.creatives[0]?.template;
      if (template?.badge) {
        return {
          type: 'badge',
          badge: {
            label: template.badge.text,
            badgeColor: template.badge.color === 'mint' ? '#23D6DC' : template.badge.color,
            backgroundColor: '#EDFFFF',
            text: template.text,
            url: template.url
          }
        }
      } else if (template?.backgroundImage) {
        return {
          type: 'image',
          image: {
            title: template.title,
            description: template.description,
            textColor: template.textColor,
            backgroundColor: template.backgroundColor,
            backgroundImage: template.backgroundImage,
            url: template.url
          }
        }
      } else return {type: 'none'}
    })]));
    fetch('https://ma.kcd.partners/staging/mmp/v2/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"id_type":"user_business","id":"-1","placements":["fe_project_bottomsheet"]}'
    }).then(r => r.json()).then(data => setBottomSheet([...data.placements]));
  }, []);
  useEffect(() => {
    if (localStorage.getItem('bottomSheet') !== 'close') {
      setModalType('bottomSheet')
      toggle(true);
    } else setModalType('workplace')
  }, []);
  return (
    <Wrapper>
      <BottomSheetModal isOpenBottomSheet={isOpenBottomSheet} toggle={toggle}>
        {modalType === 'bottomSheet' && (<div className="MMPSheetContainer">
          <div className="title">{bottomSheet[0]?.creatives[0]?.template?.title}</div>
          <div className="description">{bottomSheet[0]?.creatives[0]?.template?.description}</div>
          <img src={bottomSheet[0]?.creatives[0]?.template?.image} alt="이미지"/>
          <button className="seeMore"
                  onClick={() => router.push(bottomSheet[0]?.creatives[0]?.template?.button?.url || '')}>{bottomSheet[0]?.creatives[0]?.template?.button?.label || ''}</button>
          <button className="notShow" onClick={closeHandler}>오늘 그만보기</button>
        </div>)}
        {modalType === 'workplace' && (
          <div className="workplaceSheet">
            <div className="title">사업장 선택</div>
            <div className="workplaceName">
              <span>캐시노트 1호점</span>
              <img src="/icons/ic__system__check_circle__filled.svg" alt="원"/>
            </div>
            <div className="addWorkspace">
              <img src="/icons/ic__system__plus_outline.svg" alt="+"/>
              <span>새 사업장 추가</span>
            </div>
          </div>
        )}
      </BottomSheetModal>
      <Header clickHandler={workplaceHandler}/>
      <ShortCutList/>
      <div className="mainContent">
        {home.length >= 2 && <HomeBanner data={home[1]}/>}
        <RevenueCard data={todayRevenueData}/>
        {home.length >= 1 && <HomeBanner data={home[0]}/>}
        <RevenueCard data={weeklyRevenueData}/>
        {home.length >= 3 && <HomeBanner data={home[2]}/>}
        <RevenueCard data={assetManage}/>
        <RevenueCard data={costManage}/>
        <RevenueCard data={accountManage}/>
        <div className="addButton">
          <img src="/icons/add-fill.svg" alt="+"/>
          <span>추가하기</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Home
