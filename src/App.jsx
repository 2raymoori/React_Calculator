import { useState, useCallback } from "react";
import { Layout } from "./components/Layout";
import { ExpressionInput } from "./components/ExpressionInput";
import { Results } from "./components/Results";
import Calculation from "./logic/calculation";

export const App = () => {
  const [result, setResult] = useState("");

  const calculateResult = useCallback(
    (input) => {
      const ans = new Calculation(input).calculate() ?? "Wrong input!";
      if(ans === "Wrong input!"){ // Check if the return value from Calucator is a wrong result to display Wrong Input in the result. 
        setResult("Wrong input!"); // update the result variable to Wrong Input. 
      }else{
        if(isNaN(new Calculation(input).calculate())){ // Check and confirm if the result in the calculate is NaN. Which also result to a Wrong Input!;
          setResult("Wrong input!"); // Set The result variable to Wrong Input if it the case that Calculation result is NaN
        }
        else{
          setResult(input+" = "+new Calculation(input).calculate()); // Setting the result to the actual Result. 
        }
      }
    },
    [setResult]
  );
      return (
        <Layout>
          <ExpressionInput  handleSubmit={calculateResult} />
          <Results content={result} />
        </Layout>
      );
};
