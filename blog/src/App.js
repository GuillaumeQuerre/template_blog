import './css/App.css';
import Header from './Header'
import List from './List';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header/>
      <main>
        <List/>
      </main>
      <Footer/>
     </div>
  );
}

export default App;
