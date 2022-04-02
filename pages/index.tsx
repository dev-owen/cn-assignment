import type { NextPage } from 'next'
import styled from "styled-components";
import Header from "../components/Header";
import ShortCutList from "../components/ShortCutList";
import TodayRevenue from "../components/TodayRevenue";


const Wrapper = styled.div`
  width: 360px;
  flex-direction: column;
  border: 1px solid gray;
  display: flex;
  margin: 0 auto;
  
  p {
    margin: 0;
  }
  
  div.mainContent {
    background-color: #e5e5e5;
    padding: 1rem;
    
    div.homeBanner {
      background-color: #FFF1ED;
      border: 1px solid gray;
      height: 48px;
      vertical-align: center;
      padding: 12px;
      border-radius: 8px;
      font-size: 12px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      
      span.badge {
        background-color: #FF7452;
        color: white;
        padding: 4px;
        border-radius: 4px;
      }
    }
  }
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <ShortCutList/>
      <div className="mainContent">
        <div className="homeBanner">
          <span className="badge" >신청중</span>
          <span>노란우산 공제의 남은 단계가 있습니다</span>
          <img src="/icons/ic__system__chevron_right__outline.svg" alt="화살표"/>
        </div>
        <TodayRevenue />
      </div>
    </Wrapper>
  )
}

export default Home
