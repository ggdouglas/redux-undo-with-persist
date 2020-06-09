import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, {}, devToolsEnhancer());

export const persistor = persistStore(store, null, () => {
  store.dispatch(UndoActionCreators.clearHistory());
});
