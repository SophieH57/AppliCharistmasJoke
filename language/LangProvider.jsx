import React, { useState, useContext } from 'react';

export const LangContext = React.createContext('{}');

export default function LangProvider(props) {
    
  return (
    <LangContext.Provider value='us'>
        {props.children}
    </LangContext.Provider>
  );
}

export function useLangContext(){
    return useContext(LangContext);
}