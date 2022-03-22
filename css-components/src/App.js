import { BrowserRouter as Router, Route } from 'react-router-dom';
import TableOfContents from './pages/TableOfContents';
import Background1 from './pages/Background1';
import Background2 from './pages/Background2';
import CardsPage from './pages/CardsPage';
import BGM from './pages/BGM';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={TableOfContents} exact />
        <Route path="/background1" component={Background1} />
        <Route path="/background2" component={Background2} />
        <Route path="/cards" component={CardsPage} />
        <Route path="/bgm" component={BGM} />
      </div>
    </Router>
  );
}

export default App;
