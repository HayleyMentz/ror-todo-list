import HomeTitle from './HomeTitle';
import Features from './Features';
import Prices from './Prices';
import { MainTitle, MainImage } from '../../styles/shared';
import ListImg from '../../styles/images/kelly-sikkema--1_RZL8BGBM-unsplash.jpg';

const Home = () => (

<>
<h1 style={{ color: 'green', fontSize: '48px' }}>Hello World</h1>

    
    <h1 style={style.title}>Hello World</h1>
    <h1 style={style.subTitle}>Hello World</h1>

   
    <MainTitle>Hello Mars</MainTitle>

    <MainImage src='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80' />
  
    <MainImage src={ListImg} />

<HomeTitle />
<Features />
<Prices />
</>
)

const style = {
  title: { 
    color: 'blue',
    fontSize: '32px',
    background: 'gold',
  },
  subTitle: {
    color: 'red',
    fontSize: '16px',
  }
}
export default Home;
