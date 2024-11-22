import { createContext, useState } from "react";

export const appContext = createContext();
export function AppContextProvider ({children}) {


  const [apiURL, setAPIURL] = useState("localhost:5173");


  // Updating new URL if given,

  const updateAPIURL = (newURL) => setAPIURL(newURL);

  return (
    <appContext.Provider value={{apiURL}}>
      {children}
    </appContext.Provider>
  );

}