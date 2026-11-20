import Circles from "./Circles/Circles";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState<Circles[]>([
    { one: 5, two: 11, three: 16, four: 23, five: 32 },
  ]);

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
      <button className="btn">Нажми</button>
    </>
  );
};

export default App;
