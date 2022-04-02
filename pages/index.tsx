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
import HomeNotice from "../components/HomeBanner";


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
  const [home, setHome] = useState<any>([]);
  const [bottomSheet, setBottomSheet] = useState<any>([]);
  useEffect(() => {
    fetch('https://ma.kcd.partners/staging/mmp/v2/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"id_type":"user_business","id":"-1","placement_group":"fe_project_home"}'
    }).then(r => r.json()).then(data => setHome([...data.placements]));
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
        <HomeNotice data={homeDummy1}/>
        <RevenueCard data={todayRevenueData} />
        <RevenueCard data={weeklyRevenueData} />
        <RevenueCard data={assetManage} />
        <RevenueCard data={costManage} />
        <HomeNotice data={homeDummy2}/>
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
