import styled from "styled-components"
import Topo from "../../components/Topo"
import Menu from "../../components/Menu"
import { useContext, useEffect, useState } from "react"
import BotoesSemana from "./BotoesSemana"
import UserContext from "../../context/UserContext"
import axios from "axios"
import TodosHabitos from "./TodosHabitos"

export default function HabitosPage() {
    const { token } = useContext(UserContext)
    const [habito, setHabito] = useState({name:"", days:[]})
    const data = ["D","S","T","Q","Q","S","S"]
    const [display, setDisplay] = useState("none")
    const [listaHabitos, setListaHabitos] = useState([])
    const [habitos, setHabitos] = useState()
    const [disabled, setDisabled] = useState(false)

    console.log("lista habitos", listaHabitos)
    console.log(habito)
    const config = {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promise.then((res) => {
            setListaHabitos(res.data)
            if(res.data.length > 0){
                setHabitos(true)
            } else {
                setHabitos(false)
            }
        })

        promise.catch(err => {
            alert(err.response.data.message)
        })
    }, [listaHabitos])

    function adicionarHabito() {
        setDisplay("flex")
    }

    function cancelarHabito(e) {
        e.preventDefault();
        setDisplay("none")
    }

    function salvarHabito(e) {
        setDisabled(true)
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habito, config)
        promise.then(res => {
            console.log(res)
            setDisplay("none")
            setHabito({name:"",days:[]})
            setDisabled(false)
        })
        promise.catch(err => {
            alert(err.response.data.message)
            setDisabled(false)
        } )
        setHabito({name:"",days:[]})
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
                    <CriarHabito display={display} data-test="habit-create-container">
                        <form>
                            <input 
                            data-test="habit-name-input"  
                            placeholder="nome do hábito"
                            disabled={disabled}
                            value={habito.name}
                            onChange={e => setHabito({...habito, name: e.target.value})}
                            ></input>
                            <DivDias>
                                {data.map((d, i) =>
                                    <BotoesSemana key={d.id} name={d.name} habito={habito} setHabito={setHabito} i={i} dia={d} disabled={disabled}/>
                                )}
                            </DivDias>

                            <Botoes>
                                <BotaoCancelar data-test="habit-create-cancel-btn" onClick={cancelarHabito} disabled={disabled}>Cancelar</BotaoCancelar>
                                <BotaoSalvar data-test="habit-create-save-btn" onClick={salvarHabito} disabled={disabled}>Salvar</BotaoSalvar>
                            </Botoes>
                        </form>
                    </CriarHabito>

                    {(!habitos) ? 
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    :
                    listaHabitos.map((h) => <TodosHabitos key={h.id} nome={h.name} dias={h.days} id={h.id} listaHabitos={listaHabitos} />)
                    }

                    
                </Habitos>
            </TelaHabitos>
            <Menu />
        </>
    )
}

const TelaHabitos = styled.div`
    background-color: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 70px;
    margin-bottom: 70px;
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