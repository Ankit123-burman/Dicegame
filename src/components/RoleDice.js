import styled from "styled-components";

const RoleDice = ({ rollDice, currentDice }) => {
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}> 
                <img src={`./image/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`;
