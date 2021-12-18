import rock from "./rock.png";
import paper from "./paper.jpeg";
import scissors from "./scissors.jpeg";
import "./App.css";
// import useUserChoice from './useUserChoice';
import { useState, useEffect } from "react";

function App() {
  // const [userChoice, setUserChoice] = useUserChoice({ id: 1, name: 'rock', losesTo: 2 })
  // const [ computerChoice, setComputerChoice ] = useState({ id: 1, name: 'rock', losesTo: 2 });
  const [userChoice, setUserChoice] = useState({
    id: 1,
    name: "rock",
    losesTo: 2,
  });
  const [computerChoice, setComputerChoice] = useState({
    id: 2,
    name: "paper",
    losesTo: 3,
  });
  console.log("user choice", userChoice);
  const [gameState, setGameState] = useState(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  // useEffect(() => {
  //   setUserChoice();
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  const choices = [
    { id: 1, name: "rock", losesTo: 2 },
    { id: 2, name: "paper", losesTo: 3 },
    { id: 3, name: "scissors", losesTo: 1 },
  ];

  // const choices = ["rock", "paper", "scissors"]

  const handleChoice = (choice) => {
    const randComputerChoice =
      choices[Math.floor(Math.random() * choices.length)];
    const theUserChoice = choices.find((c) => c.id === choice);
    setUserChoice(theUserChoice);
    console.log("user choice", theUserChoice);
    setComputerChoice(randComputerChoice);
    console.log("comp choice", computerChoice);
    updateGameState(theUserChoice, randComputerChoice);
  };

  const resetGame = () => {
    setGameState("");
    setUserChoice("");
    setComputerChoice("");
  };

  const scoreKeeper = () => {
    if (gameState === "You Lose :(") {
      setLosses(losses + 1);
    } else if (gameState === "You Win :)") {
      setWins(wins + 1);
    } else {
      return;
    }
  };

  const updateGameState = (param1, param2) => {
    if (param1.losesTo === param2.id) {
      setGameState("You Lose :(");
      setLosses(losses + 1);
    } else if (param2.losesTo === param1.id) {
      setGameState("You Win :)");
      setWins(wins + 1);
    } else if (param2.id === param1.id) {
      setGameState("Tie Game!");
      console.log("tie");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Choose Rock, Paper or Scissors</h1>
        <p>Click a picture below to make your choice:</p>
        <div>
          <img
            style={{ height: "80px", margin: "10px" }}
            onClick={() => handleChoice(1)}
            src={rock}
            alt="rock"
          />
          <img
            style={{ height: "80px", margin: "10px" }}
            onClick={() => handleChoice(2)}
            src={paper}
            alt="paper"
          />
          <img
            style={{ height: "80px", margin: "10px" }}
            onClick={() => handleChoice(3)}
            src={scissors}
            alt="scissors"
          />
          <div
            style={{
              backgroundColor: "darkmagenta",
              padding: "10px",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <p>
              Total Wins: {wins} | Total Losses: {losses}
            </p>
          </div>
          <div style={{ display: "flex", fledDirection: "row", justifyContent: 'center', backgroundColor: 'black', margin: '10px', borderRadius: '10px', lineHeight: '5px' }}>
            <div style={{ color: "white", fontSize: "15px", marginRight: '50px' }}>
              <p style={{ margin: "30px"}}>You Chose: </p>
              <p style={{ color: "goldenrod", fontSize: "30px"}}>
                {userChoice.name}
              </p>
            </div>
            <div style={{ color: "white", fontSize: "15px" }}>
              <p style={{ margin: "30px"}}>Computer Chose: </p>
              <p style={{ color: "goldenrod", fontSize: "30px"}}>
                {computerChoice.name}
              </p>
            </div>
          </div>
          <h2 style={{ color: "white" }}>{gameState}</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
        {/* <p> Player Score: { playerScore } </p>
        <p> Computer Score: { computerScore } </p> */}
      </header>
    </div>
  );
}

export default App;
