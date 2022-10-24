import { ScoreContext } from "../contexts/scoreContext";
import { useContext } from "react";

function Infoboard(){

  const { score } = useContext(ScoreContext);

  return (
    <>
      <h3> {score < 100 ? "Let's make it over 100!" : "Good job"} </h3>
    </>
  );
};

export default Infoboard;