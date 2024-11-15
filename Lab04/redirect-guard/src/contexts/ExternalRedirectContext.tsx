import { createContext, useContext, ReactNode } from "react";
import { useExternalRedirect } from "../hooks/useExternalRedirect";

const ExternalRedirectContext = createContext<ReturnType<typeof useExternalRedirect> | undefined>(undefined);

export const ExternalRedirectProvider = ({ children }: { children: ReactNode }) => {
    const redirectState = useExternalRedirect();

    return (
        <ExternalRedirectContext.Provider value={redirectState}>
            {children}
        </ExternalRedirectContext.Provider>
    );
};

export const useExternalRedirectContext = () => {
    const context = useContext(ExternalRedirectContext);
    if (!context) {
        throw new Error('useExternalRedirectContext must be used within ExternalRedirectProvider');
    }
    return context;
};