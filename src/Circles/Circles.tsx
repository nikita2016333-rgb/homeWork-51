import "./Circles.css";
interface Circles {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
}

const Circles = (props: Circles) => {
  return (
    <div className="circles">
      <div>{props.one} </div>
      <div>{props.two} </div>
      <div>{props.three} </div>
      <div>{props.four} </div>
      <div>{props.five} </div>
    </div>
  );
};

export default Circles;
