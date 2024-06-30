import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header name = 'Влад' lastName = 'Казанин' />
      <Body/>
      <Footer date="30.06.2024 г." />
    </div>
  );
}

export default App;
