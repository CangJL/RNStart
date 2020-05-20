import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import loginReducer from '../pages/login/loginSlice'


const reducers = combineReducers({
  login: loginReducer,
});

const persistConfig = {
  key: 'root',
  storage:AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

const persistor = persistStore(store);

export {store, persistor};
