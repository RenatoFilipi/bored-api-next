import styled from 'styled-components'
import { switchProp } from 'styled-tools'

interface IProps {
    size: string
}

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 93vh;
    gap: 2.5rem
`

export const Request = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;

    h1 {
        font-size: 2.5rem;
        color: #fff;
    }

    button {
        width: 10rem;
        height: 2.5rem;
        border: none;
        background-color: #000;
        color: #fff;
        font-weight: 500;
        font-size: 1rem;
        font-family: Poppins;
        border-radius: 3px;
        cursor: pointer;
        transition: .2s;

        :hover {
            background-color: #323232;
        }
        
    }
`

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Text = styled.p<IProps>`
    font-size: 1.2rem;
    margin: .5rem;
    color: #fff;
    font-size: ${switchProp("size", { big: "1.3rem", small: "1rem" })};
`

interface IFooterProps {
    mode: string
}

export const MyFooter = styled.div<IFooterProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
    background-color: ${switchProp("mode", { light: "#fff", dark: "#000" })};
    color: ${switchProp("mode", { light: "#000", dark: "#fff" })};
`