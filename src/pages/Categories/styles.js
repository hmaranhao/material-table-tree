import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: #000;
    overflow-x: hidden;
`;

export const TopBar = styled.div `
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #323131;
    padding: 0 0.8rem;
`;

export const Title = styled.h2 `
    color: #FB7A00;
    font-size: 1.6rem;
`;

export const List = styled.div `
    padding: 0.8rem;
`;

export const Input = styled.input `
    border: 1px solid #FB7A00;
    border-radius: 0.4rem;
    width: 100%;
    height: 2.4rem;
    padding: 0 0.8rem;
    margin-top: 0.8rem;
`;

export const Select = styled.select `
    border: 1px solid #FB7A00;
    border-radius: 0.4rem;
    width: 100%;
    height: 2.4rem;
    padding: 0 0.8rem;
    margin-top: 0.8rem;
`;

export let Option = styled.option `
    background-color: #000;
    color: #FB7A00;    
`;

export const Label = styled.label `
    color: #FB7A00;
`;

export const DivInputBlock = styled.div `
    margin: 0.8rem;
`;

export const ButtonPrimary = styled.button `
    border: 0;
    background-color: #FB7A00;
    color: #fff;  
    border-radius: 0.4rem;
    cursor: pointer;
    min-height: 1.6rem;
    min-width: 5rem;
    font-weight: bold;
    transition: background-color 1s;
    &:hover {
        background-color: #9e4e02;
    }
`;