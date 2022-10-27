import './App.css';
import { MainPage } from './pages/main_page/MainPage';
import { QuestionsPage}  from './pages/questions_page/QuestionsPage'
import { CardsPage } from './pages/cards_page/CardsPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<MainPage />} />
        <Route path='/questions' element={<QuestionsPage />} />
        <Route path='/cards' element={<CardsPage />} />
      </Routes>
    </Router>
  )
}

export default App;
