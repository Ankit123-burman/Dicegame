import styled from "styled-components";

export const Button = styled.button`
padding: 10px 18px;
background-color: black;
border-radius: 5px;
color: white;
width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
cursor: pointer;

&:hover{
    background: white;
    color: black;
    border: 1px solid black;
    
}

`;
export const OutlineButton = styled(Button)`
background-color:white;
color: black;
&:hover{
    background: black;
    color: white;
    border: 1px solid black;
    
}



`;