import { combineReducers} from 'redux'

import DashbordReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
      dashboard: DashbordReducer
})

export default rootReducer