import styled from "styled-components";


export const Appcontainer = styled.div `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;


export const GreetinHeader = styled.p `
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
    font-weight: 500px;
`;


export const MainTitle = styled.h2 `
    font-size: 1.3rem;
    color: #333;
    margin-top: 25px;
    margin-bottom: 10px;
`;


export const ObjectivesList = styled.ul `
    list-style-type: disc;
    padding-left: 20px;
    color: #2d3748;
`;


export const ObjectivesItem = styled.li `
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: 500;
`;