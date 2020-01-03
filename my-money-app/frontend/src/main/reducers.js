import { combineReducers} from 'redux'

import DashbordReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
      dashboard: DashbordReducer,
      tab: TabReducer
})

export default rootReducer