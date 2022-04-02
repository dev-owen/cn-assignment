import type { NextPage } from 'next'
import styled from "styled-components";
import Header from "../components/Header";
import ShortCutList from "../components/ShortCutList";
import RevenueCard from "../components/RevenueCard";
import { useEffect, useState } from "react";
import {
  accountManage,
  assetManage,
  costManage,
  homeDummy1,
  homeDummy2,
  todayRevenueData,
  weeklyRevenueData
} from "../data/dummy";
import { IHomeBannerData } from "../components/HomeBanner/type";
import HomeBanner from '../components/HomeBanner';


const Wrapper = styled.div`
  width: 360px;
  flex-direction: column;
  border: 1px solid gray;
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
  }
`

const Home: NextPage = () => {
  const [home, setHome] = useState<IHomeBannerData[]>([]);
  const [bottomSheet, setBottomSheet] = useState<any>([]);
  useEffect(() => {
    fetch('https://ma.kcd.partners/staging/mmp/v2/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"id_type":"user_business","id":"-1","placement_group":"fe_project_home"}'
    }).then(r => r.json()).then(data => setHome([...data.placements.map((el: any) => {
      const template = el?.creatives[0]?.template;
      if(template?.badge) {
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
      } else if(template?.backgroundImage) {
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
      } else return { type: 'none' }
    })]));
    fetch('https://ma.kcd.partners/staging/mmp/v2/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"id_type":"user_business","id":"-1","placements":["fe_project_bottomsheet"]}'
    }).then(r => r.json()).then(data => setBottomSheet([...data.placements]));
  }, []);
  console.log(home);
  console.log(bottomSheet);
  return (
    <Wrapper>
      <Header />
      <ShortCutList/>
      <div className="mainContent">
        {home.length >= 1 && <HomeBanner data={home[0]}/>}
        <RevenueCard data={todayRevenueData} />
        {home.length >= 2 && <HomeBanner data={home[1]}/>}
        <RevenueCard data={weeklyRevenueData} />
        {home.length >= 3 && <HomeBanner data={home[2]}/> }
        <RevenueCard data={assetManage} />
        <RevenueCard data={costManage} />
        <RevenueCard data={accountManage} />
        <div className="addButton">
          <img src="/icons/add-fill.svg" alt="+"/>
          <span>추가하기</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Home
