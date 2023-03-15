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
                    <CriarHabito>
                        <form>
                            <input placeholder="nome do hábito"></input>
                            <BotoesSemana>D</BotoesSemana>
                            <Botoes>
                                <BotaoCancelar>Cancelar</BotaoCancelar>
                                <BotaoSalvar>Salvar</BotaoSalvar>
                            </Botoes>
                        </form>
                    </CriarHabito>
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
        margin-left: 20px;
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

const CriarHabito = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 20px;
    form{
        margin-top: 18px;
        display: flex;
        flex-direction: column;
    }
    input{
        align-self: center;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        color: #AFAFAF;
        font-size: 20px;
        padding-left: 11px;
        ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 20px;
        line-height: 25px;
        }
        :focus{
        border: 1px solid #D4D4D4;
        outline: 0;
        font-family: 'Lexend Deca', sans-serif;
        color: #AFAFAF;
        font-size: 20px;
        padding-left: 11px;
        }
    }
`

const BotoesSemana = styled.button`
    margin-top: 8px;
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    color: #DBDBDB;
    font-size: 20px;
    margin-left: 17px;
`
const Botoes = styled.div`
    margin-top: 29px;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    gap: 23px;
`

const BotaoCancelar = styled.button`
    width: 84px;
    height: 35px;
    background-color: #FFFFFF;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-size: 16px;
`

const BotaoSalvar = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    color: #FFFFFF;
    font-size: 16px;  
    border-radius: 5px;  
`

const Habitos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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