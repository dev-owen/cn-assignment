import type { NextPage } from 'next'
import styled from "styled-components";
import Header from "../components/Header";
import ShortCutList from "../components/ShortCutList";


const Wrapper = styled.div`
  width: 360px;
  flex-direction: column;
  border: 1px solid gray;
  display: flex;
  margin: 0 auto;
  
  p {
    margin: 0;
  }
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <ShortCutList/>
    </Wrapper>
  )
}

export default Home
