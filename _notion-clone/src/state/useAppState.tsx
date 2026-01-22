import { createContext, useContext } from "react";
import type { usePageState } from "./usePageState";


export type AppStateContextType = ReturnType<typeof usePageState>

export const AppStateContext = createContext<AppStateContextType>(
    {} as AppStateContextType
);

export const useAppState = () => useContext(AppStateContext);