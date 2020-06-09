import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'counter',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, {}, devToolsEnhancer());

export const persistor = persistStore(store);
