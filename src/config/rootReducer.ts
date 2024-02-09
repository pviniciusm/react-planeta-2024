import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import atracoesSlice from "./modules/atracoes.slice";
import themeSlice from "./modules/theme.slice";

const rootRecucer = combineReducers({
    atracoes: atracoesSlice,
    theme: themeSlice,
});

export const persistedReducer = persistReducer(
    {
        key: "atlantida",
        storage: storage,
    },
    rootRecucer
);
