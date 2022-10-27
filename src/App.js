import './App.css';
import { MainPage } from './pages/main_page/MainPage';
import { QuestionsPage}  from './pages/questions_page/QuestionsPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<MainPage />} />
        <Route path='/questions' element={<QuestionsPage />} />
      </Routes>
    </Router>
  )
}

export default App;
