import { createContext, useContext, useMemo, useEffect } from "react";
import { getData } from "../api/index";

const initialState = {};
const TechnicalTest = createContext(initialState);

export const useTechnicalTest = () => useContext(TechnicalTest);

export const TechnicalTestContextProvider = ({ children }) => {
  useEffect(() => {
    console.log("se ejecuta el fetch");
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = useMemo(() => ({}), []);

  return (
    <TechnicalTest.Provider value={state}>{children}</TechnicalTest.Provider>
  );
};

export default TechnicalTest;
