import styled from "styled-components"
import Topo from "../../components/Topo"
import Menu from "../../components/Menu"
import check from "../../assets/check.png"
import UserContext from "../../context/UserContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import HabitosDia from "./HabitosDia"

export default function HojePage() {
    const dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const [dados, setDados] = useState([])

    const { token } = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(res => {
            console.log(res.data)
            setDados(res.data)
        })
        promise.catch(err => {
            console.log(err.response.data.message)
        })

    }, []);

    return (
        <>
            <Topo />
            <TelaHabitos>
                <MeusHabitos>
                    <h1 data-test="today">{dia[(dayjs().day())]}, {(dayjs().format('DD/MM'))}</h1>
                    <p data-test="today-counter">Nenhum hábito concluído ainda</p>
                </MeusHabitos>
                <TodosHabitos>
                {dados.map((d, i) => <HabitosDia key={i} nome={d.name} d={d} />)}


                </TodosHabitos>
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

const MeusHabitos = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 28px;
    h1{
        color: #126BA5;
        font-size: 23px;
        margin-left: 17px;
    }
    p{  
        margin-top: 2px;
        color: #BABABA;
        font-size: 18px;
        margin-left: 17px;
    }
`

const TodosHabitos = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
