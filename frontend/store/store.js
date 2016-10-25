import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';


export default () => createStore(RootReducer, {}, masterMiddleware);
