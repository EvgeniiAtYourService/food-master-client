import './styles/global.css'
import { FoodCardsContainer } from './components/index'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined'
import AddIcon from '@mui/icons-material/Add'

function App() {
  return (
    <div className="App">
      <h2 className="heading">
        <DinnerDiningOutlinedIcon className="pastaIcon" />
        Food Master
      </h2>
      <FoodCardsContainer />
        <AddIcon className="addIcon" />
    </div>
  )
}

export default App
