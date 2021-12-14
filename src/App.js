import rock from './rock.png';
import paper from './paper.jpeg';
import scissors from './scissors.jpeg';
import './App.css';
import useUserChoice from './useUserChoice';
import { useState, useEffect} from 'react'

function App() {
  // const [userChoice, setUserChoice] = useUserChoice({ id: 1, name: 'rock', losesTo: 2 })
  // const [ computerChoice, setComputerChoice ] = useState({ id: 1, name: 'rock', losesTo: 2 });
  const [userChoice, setUserChoice] = useUserChoice({ id: 1, name: 'rock', losesTo: 2 })
  const [ computerChoice, setComputerChoice ] = useState({ id: 2, name: 'paper', losesTo: 3 });
  console.log('user choice', userChoice);
  // const [ gameState, setGameState ] = useState(null);

  // useEffect(() => {
  //   setUserChoice();
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  const choices = [
      { id: 1, name: 'rock', losesTo: 2 },
      { id: 2, name: 'paper', losesTo: 3 },
      { id: 3, name: 'scissors', losesTo: 1 }
    ];

  // const choices = ["rock", "paper", "scissors"]
  const randComputerChoice =  choices[Math.floor(Math.random() * choices.length)];
  
  const handleChoice = (choice) => {
    // const theUserChoice = choices.find(c => c.id === choice);
    let currentUserChoice = setUserChoice(choice);
    console.log('user choice', userChoice);
    let currentCompChoice = setComputerChoice(randComputerChoice);
    console.log('comp choice', computerChoice);
    // updateGameState();
  };

  
  

  // const gameState = () => {

  // }

  // const updateGameState = () => {
  //   if (userChoice.losesTo === computerChoice.id) {
  //     setGameState('lose')
  //     console.log('lose');
  //   } else if (computerChoice.losesTo === userChoice.id) {
  //     setGameState('win');
  //     console.log('win')
  //   } else if (computerChoice.id === userChoice.id) {
  //     setGameState('tie');
  //     console.log('tie');
  //   }
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Choose Rock, Paper or Scissors</h1>
        <p>Click a picture below to make your choice:</p>
        <div>
        <img style={{height: '80px', margin: '10px'}} onClick={() => handleChoice("1")} src={rock} alt="rock" />
        <img style={{height: '80px', margin: '10px'}} onClick={() => handleChoice("2")} src={paper} alt="paper" />
        <img style={{height: '80px', margin: '10px'}} onClick={() => handleChoice("3")} src={scissors} alt="scissors" />
        <p style={{color: 'white'}}>{ userChoice.name }</p>
        <p style={{color: 'white'}}>{ computerChoice.name}</p>
       </div>
        {/* <p> Player Score: { playerScore } </p>
        <p> Computer Score: { computerScore } </p> */}

      </header>
    </div>
  );
}

export default App;
