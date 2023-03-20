import styled from "styled-components"
import Topo from "../../components/Topo"
import Menu from "../../components/Menu"
import { dias } from "../../constants/dias"
import { useEffect, useState } from "react"
import BotoesSemana from "./BotoesSemana"
import lixeira from "../../assets/lixeira.png"

export default function HabitosPage() {
    const dias = ["D","S","T","Q","Q","S","S"]
    const [display, setDisplay] = useState("none")

    /*const config = {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    }*/

    /*useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    })*/

    function adicionarHabito() {
        setDisplay("flex")
    }

    function cancelarHabito(e) {
        e.preventDefault();
        setDisplay("none")
    }

    function salvarHabito(e) {
        e.preventDefault();
        alert("salvarHabito")
    }

    return (
        <>
            <Topo />
            <TelaHabitos>
                <MeusHabitos>
                    <h1>Meus Hábitos</h1>
                    <button data-test="habit-create-btn"  onClick={adicionarHabito}>+</button>
                </MeusHabitos>
                <Habitos>
                    <CriarHabito display={display} data-test="habit-create-container" >
                        <form>
                            <input data-test="habit-name-input"  placeholder="nome do hábito"></input>
                            <DivDias>
                                {dias.map((d) =>
                                    <BotoesSemana key={d.id} name={d.name} />
                                )}
                            </DivDias>

                            <Botoes>
                                <BotaoCancelar data-test="habit-create-cancel-btn" onClick={cancelarHabito}>Cancelar</BotaoCancelar>
                                <BotaoSalvar data-test="habit-create-save-btn" onClick={salvarHabito}>Salvar</BotaoSalvar>
                            </Botoes>
                        </form>
                    </CriarHabito>
                    <Habito data-test="habit-container" >
                        <div>
                            <h1 data-test="habit-name">Ler 1 capitulo de livro</h1>
                            <img data-test="habit-delete-btn" src={lixeira} alt="deletar" />
                        </div>
                        <DivBotao>
                        {dias.map((e,i) => <Button data-test="habit-day" i={i} disabled>{e}</Button>)}
                        </DivBotao>
                    </Habito>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Habitos>
            </TelaHabitos>
            <Menu />
        </>
    )
}

const TelaHabitos = styled.div`
    height: 80vh;
    background-color: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 70px;
`
const Habito = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 20px;
    h1{
        color: #666666;
        font-size: 20px;
        margin-top: 13px;
        margin-left: 15px;
    }
    img{
        width: 13px;
        height: 15px;
        margin-top: 11px;
        margin-right: 11px;
    }
    div{
        display: flex;
        justify-content: space-between;
    }
`
const DivBotao = styled.div`
    width: 100px;
    margin-left: 15px;
    margin-top: 8px;
`

const Button = styled.button`
    margin-right: 4px;
    width: 30px;
    height: 30px;
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
    display: ${props => props.display};
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
        margin-left: 17px;
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
const DivDias = styled.div`
    display: flex;
    gap: 4px;
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