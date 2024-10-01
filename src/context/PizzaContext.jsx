
import  { createContext, useState, useEffect } from 'react';
export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState([]);

  const url = "http://localhost:5000/api/pizzas";

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPizzaData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzaData }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
