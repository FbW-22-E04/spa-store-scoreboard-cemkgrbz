import { ScoreContext } from "../contexts/ScoreContext";
import React, { useContext } from "react";

function Scoreboard() {

    const { score, plusScore, minusScore } = useContext(ScoreContext);

    return ( 
        <div className="border border-slate-600 text-center mt-20 w-80  m-auto rounded">
            <h1 className="bg-slate-600 text-white p-3 font-bold text-2xl">Score Board</h1>
            <p className="bg-slate-300 p-3 text-xl font-bold">Your Current Score is {score}</p>
            <div className="flex justify-center gap-5">
              <button className="bg-slate-600 w-5 rounded m-2 text-white" onClick={() => plusScore()}>+</button>
              <button className="bg-slate-600 w-5 rounded m-2 text-white" onClick={() => minusScore()}>-</button>
            </div>  
            <h3 className="bg-slate-600 p-2 text-white"> {score < 100 ? "Let's make it over 100!" : "Good job"} </h3>
           </div>
     );
}

export default Scoreboard;