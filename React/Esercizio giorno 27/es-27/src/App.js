import './App.css';
import BooksComp from './components/BooksComp';
import MyFooter from './components/MyFooter';
import MyNavComp from './components/MyNavComp';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <MyNavComp />
      <Welcome />
      <BooksComp />
      <MyFooter />
    </>
  );
}

export default App;
