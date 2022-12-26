import React, { createContext, useState, useEffect } from 'react';

export const ErrorMsgContext = createContext({});

export const ErrorMsgProv = (props) => {
    const [isError, setIsError] = useState(false);
    const [msgError, setMsgError] = useState("");
    const pathName = document.location.pathname;

    useEffect(() => {
        setIsError(false);
        setMsgError("");
    }, [pathName]);

    return(
        <ErrorMsgContext.Provider value={{
            isError,
            setIsError,
            msgError,
            setMsgError
        }}>
            {props.children}
        </ErrorMsgContext.Provider>
    );
};