import './styles/global.css'
import { FoodCardsContainer } from './components/index'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';

function App() {
  return <div className="App">
  <h2 className="heading"><DinnerDiningOutlinedIcon className="pastaIcon"/>Food Master</h2>
    <FoodCardsContainer />
  </div>
}

export default App
