import './App.css';
import AllTheBoooks from './components/AllTheBoooks';
import MyFooter from './components/MyFooter';
import MyNavComponents from './components/MyNavComponents';
import WelcomeComponents from './components/WelcomeComponents';

function App() {
  return (
    <>
      <MyNavComponents />
      <WelcomeComponents />
      <AllTheBoooks />
      <MyFooter />
    </>
  );
}

export default App;
