import React, {createContext, ReactNode, useState} from 'react';

type IsLoggedContextType = {
    isLogged: boolean;
    toggleIsLogged?: () => void;
};

type IsLoggedProviderProps = {
    children: ReactNode;
};

const IsLoggedContext = createContext<IsLoggedContextType  | undefined>(undefined);

const IsLoggedProvider = (props: IsLoggedProviderProps) => {
    const {children} = props;

    const [isLogged, setLogged] = useState(false);
    const toggleIsLogged = () => setLogged((prevState) => !prevState);

    return (
        <IsLoggedContext.Provider value={{isLogged, toggleIsLogged}}>
            {children}
        </IsLoggedContext.Provider>
    );
};

export {IsLoggedProvider, IsLoggedContext};
