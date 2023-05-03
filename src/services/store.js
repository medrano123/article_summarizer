import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    }, // allows us to get a specific slice of the cake
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});