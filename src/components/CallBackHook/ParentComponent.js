import React, { useState, useCallback } from "react";
import Title from "./Title";
import CountComp from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, addAge] = useState(20);
  const [salary, addSalary] = useState(50000);

  const IncrementAge = useCallback(() => {
    addAge(age + 1);
  }, [age]);
  const IncrementSalary = useCallback(() => {
    addSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />

      <CountComp text='age' count={age} />
      <Button handleclick={IncrementAge}>Increament Age</Button>

      <CountComp text='salary' count={salary} />
      <Button handleclick={IncrementSalary}>Increament Salary</Button>
    </div>
  );
}

export default ParentComponent;
