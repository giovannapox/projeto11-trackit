import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { Link } from "react-router-dom"
import 'react-circular-progressbar/dist/styles.css';

export default function Menu () { 
    return (
        <>
            <MenuContainer data-test="menu">
                <Link data-test="habit-link" to="/habitos">Hábitos</Link>
                <Link data-test="today-link" to="/hoje">
                    <CircularProgress>
                        <CircularProgressbar
                            value={66}
                            text={"Hoje"}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent",
                                textSize: "18px",
                            })}
                        />
                    </CircularProgress>
                </Link>
                <Link data-test="history-link" to="/historico">Histórico</Link>
            </MenuContainer>
        </>
    )
}

const MenuContainer = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;
    z-index: 1;
    a{
        font-family: 'Lexend Deca', sans-serif;
        text-decoration: none;
        color: #52B6FF;
        margin-right: 36px;
        margin-left: 36px;
    } 
`

const CircularProgress = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
    width:91px;
    height: 91px;
`