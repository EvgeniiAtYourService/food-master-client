import './styles/global.css'
import { FoodCardsContainer } from './components/index'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined'
import AddIcon from '@mui/icons-material/Add'
import MediaQuery from 'react-responsive'

function App() {
  return (
    <div className="App">
    <MediaQuery minWidth={415}><h2 className="heading">No Desktop/Tablet version yet</h2></MediaQuery>
    <MediaQuery maxWidth={415}>
      <h2 className="heading">
        <DinnerDiningOutlinedIcon className="pastaIcon" />
        Food Master
      </h2>
      <FoodCardsContainer />
        <AddIcon className="addIcon" />
    </MediaQuery>
    </div>
  )
}

export default App
