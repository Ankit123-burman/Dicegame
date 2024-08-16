import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import Gameplay from "./components/Gameplay";




function App() {
  const [isGameStarted, setIsGameStaered] = useState(false);
  const toggleGamePlay = () =>{
setIsGameStaered(prev => !prev);
  };
  return (
    <>
   {isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}
   </>
  );
}

export default App;
