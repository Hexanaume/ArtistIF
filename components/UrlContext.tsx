// components/UrlContext.tsx
import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';

interface UrlContextProps {
    url: string;
    setUrl: Dispatch<SetStateAction<string>>;
}

const UrlContext = createContext<UrlContextProps | undefined>(undefined);

interface UrlProviderProps {
    children: ReactNode;
}

export const UrlProvider: React.FC<UrlProviderProps> = ({ children }) => {
    const [url, setUrl] = useState('');

    return (
        <UrlContext.Provider value={{ url, setUrl }}>
            {children}
        </UrlContext.Provider>
    );
};

export const useArtistUrl = (): UrlContextProps => {
    const context = useContext(UrlContext);
    if (!context) {
        throw new Error('useArtistUrl must be used within a UrlProvider');
    }
    return context;
};
