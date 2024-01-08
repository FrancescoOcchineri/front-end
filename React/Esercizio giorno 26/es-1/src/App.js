import './App.css';
import ButtonComp from './components/ButtonComp';
import ImageComp from './components/ImageComp';
import TableComp from './components/TableComp';

const nameB = [{name: 'Click'}]
const nameImg = [{src: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png', alt: 'Logo React'}]

function App() {
  return (
    <div className='App'>
      <h1>Esercizio React</h1>
      <ButtonComp title="buttonComp" list={nameB} />
      <hr />
      <ImageComp title='ImageComp' list={nameImg} />
      <TableComp />
    </div>
  );
}

export default App;
