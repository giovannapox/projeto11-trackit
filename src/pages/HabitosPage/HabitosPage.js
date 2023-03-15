import styled from "styled-components"
import logo from "../../assets/tracklist.svg"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function HabitosPage() {
    return (
        <>
            <TopoContainer>
                <img src={logo} />
                <img src="https://images.alphacoders.com/120/thumb-1920-120091.jpg" />
            </TopoContainer>
            <TelaHabitos>
                <MeusHabitos>
                    <h1>Meus Hábitos</h1>
                    <button>+</button>
                </MeusHabitos>
                <Habitos>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Habitos>
            </TelaHabitos>
            <MenuContainer>
                <Link to="/habitos">Hábitos</Link>
                <Link to="/hoje">
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
                <Link to="/historico">Histórico</Link>
            </MenuContainer>
        </>
    )
}

const TopoContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    z-index: 1;
    img:nth-child(1){
        width: 97px;
        height: 49px;
        margin-left: 18px;
    }
    img:nth-child(2){
        width: 51px;
        height: 51px;
        border-radius: 50px;
        margin-right: 10px;
    }
`

const TelaHabitos = styled.div`
    height: 80vh;
    background-color: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 70px;
`

const MeusHabitos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 28px;
    h1{
        color: #126BA5;
        font-size: 23px;
        margin-left: 17px;
    }
    button{
        width: 40px;
        height: 35px;
        font-size: 27px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        margin-right: 18px;
    }
`

const Habitos = styled.div`
    p{
        margin-left: 17px;
        margin-right: 20px;
        margin-top: 28px;
        color: #666666;
        font-size: 18px;
    }
`

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