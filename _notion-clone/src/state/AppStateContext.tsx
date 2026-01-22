import { usePageState } from "./usePageState";
import { type Page } from "../utils/types";
import { withInitialState } from "./withInitialState";
import { AppStateContext } from "./useAppState";

type AppStateProviderProps = {
    children: React.ReactNode;
    initialState: Page;
} 

export const AppStateProvider = withInitialState<AppStateProviderProps>(({children, initialState}: AppStateProviderProps) => {
    const pageStateHandlers = usePageState(initialState);

    return (
        <AppStateContext.Provider value={pageStateHandlers}>
            {children}    
        </AppStateContext.Provider> 
    )
})

