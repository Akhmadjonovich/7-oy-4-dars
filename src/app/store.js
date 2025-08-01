import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./features/userSlice";
export let store = configureStore({
    reducer: {
        user: useReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["user/login"],
            ignoredPaths: ["user.user"],
          },
        }),
})