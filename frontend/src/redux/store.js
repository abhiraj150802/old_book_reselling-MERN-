import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getProductReducer,getProductDetailsReducer } from './reducer/getProductReducer'



const reducer=combineReducers({
    getProducts:getProductReducer,
    getProductDetails:getProductDetailsReducer
})

const middleware=[thunk]

const store=createStore(  
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
