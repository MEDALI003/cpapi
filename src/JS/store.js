import { createStore } from "redux";
import { rootReducer } from ".";

export const store=createStore(rootReducer)