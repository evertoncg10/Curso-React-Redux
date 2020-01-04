import { combineReducers} from 'redux'

import DashbordReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
      dashboard: DashbordReducer,
      tab: TabReducer,
      billingCycle: BillingCycleReducer
})

export default rootReducer