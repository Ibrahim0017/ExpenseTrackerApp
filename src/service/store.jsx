import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../service/userReducer'
import { employeeRTK } from "./employee/EmployeeRTK";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { expenseRTK } from "./expense/ExpenseRTK";
import { commentRTK } from "./comment/BranchRTK";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const user_reducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        user_reducer,
        [employeeRTK.reducerPath]: employeeRTK.reducer,
        [expenseRTK.reducerPath]: expenseRTK.reducer,
        [commentRTK.reducerPath]: commentRTK.reducer
    },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(employeeRTK.middleware,expenseRTK.middleware,commentRTK.middleware)
});

export default store;
