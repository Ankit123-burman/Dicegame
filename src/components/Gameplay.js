import TotalScore from "./TotalScore";
import Rules from "./Rules";
import NumberSelect from "./NumberSelect";
import styled from "styled-components";
import RoleDice from "./RoleDice"; // Ensure that this import is correct and the RoleDice component is defined elsewhere.
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";

const Gameplay = () => {
    const [score, setScore] = useState(0); // Initialize score to 0 or any starting value
    const [selectedNumber, setSelectedNumber] = useState(null); // Initialize selectedNumber to null or any default value
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => { // Corrected the spelling and removed re-declaration
        if (!selectedNumber) {
            setError("You are not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);



        if (selectedNumber == randomNumber) {
            setScore(prev => prev + randomNumber);
        } else {
            setScore(prev => prev - 2);
        }

        setSelectedNumber(undefined);

    };

    const resetScore = () => {
        setScore(0);
    };

    return (
        <>
            <MainContainer>
                <div className="top">
                    <TotalScore score={score} />
                    <NumberSelect
                        error={error}
                        setError={setError}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber}
                    />
                </div>
                <RoleDice
                    currentDice={currentDice}
                    rollDice={rollDice} // Passing the correct function as a prop
                />
                <div className="btns">
                    <OutlineButton
                        onClick={resetScore}
                    >Reset</OutlineButton>
                    <Button onClick={() => setShowRules(prev => !prev )} >{
                      showRules ? "hide" : "show"  } Rules</Button>

                </div>
                {showRules && <Rules />}
            </MainContainer>
        </>
    );
};

export default Gameplay;

const MainContainer = styled.main`
    padding-top: 70px;
    .top {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }
`;
