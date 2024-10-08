import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';

function StartGame({toggle})  {
  return (
    <Container>
        <div>
        <img src="./image/dices.png" alt="dice" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>
                Play Now
            </Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;
overflow: hidden;


.content{
    h1{
       font-size : 92px;
       white-space: nowrap
    }
}

`;
