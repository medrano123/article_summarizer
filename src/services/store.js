import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}, // allows us to get a specific slice of the cake
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});