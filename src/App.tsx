import Circles from "./Circles/Circles";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState<Circles[]>([
    { one: 5, two: 11, three: 16, four: 23, five: 32 },
  ]);

  const randomNumbers = () => {
    const numbers: number[] = [];

    while (numbers.length < 5) {
      const random = Math.floor(Math.random() * 36) + 1;

      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }

    numbers.sort((a, b) => a - b);
    setNumber([
      {
        one: numbers[0],
        two: numbers[1],
        three: numbers[2],
        four: numbers[3],
        five: numbers[4],
      },
    ]);
  };

  return (
    <>
      <h1>Лотерея !</h1>
      <Circles
        one={number[0].one}
        two={number[0].two}
        three={number[0].three}
        four={number[0].four}
        five={number[0].five}
      ></Circles>
      <button className="btn" onClick={randomNumbers}>
        New numbers
      </button>
    </>
  );
};

export default App;
