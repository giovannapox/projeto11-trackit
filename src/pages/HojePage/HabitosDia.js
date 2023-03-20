import styled from "styled-components"
import check from "../../assets/check.png"
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import axios from "axios"

export default function HabitosDia({nome, d}) {
    const { token } = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function marcarHabito(){
        if(d.done === false){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${d.id}/check`, null, config)
            promise.then(res => {
                console.log(res.data)
            });
            promise.catch()
        } else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${d.id}/uncheck`, null, config)
            promise.then(res => {
                console.log(res.data)
            });
            promise.catch()
        }
    }

    return (
        <Habitos data-test="today-habit-container" done={d.done} sequence={d.currentSequence} highest={d.highestSequence}>
            <h1 data-test="today-habit-name" >{nome}</h1>
            <p data-test="today-habit-sequence" >Sequência atual: {d.currentSequence} <span></span></p>
            <p data-test="today-habit-record">Seu Recorde: <span>{d.highestSequence}</span></p>
            <DivCheck data-test="today-habit-check-btn" onClick={marcarHabito} done={d.done}>
                <img src={check} />
            </DivCheck>
        </Habitos>
    )
}

const Habitos = styled.div`
    position: relative;
    border-radius: 5px;
    background-color: #ffffff;
    width: 340px;
    height: 94px;
    h1{ 
        margin-top: 13px;
        margin-left: 17px;
        margin-right: 20px;
        color: #666666;
        font-size: 18px;
    }
    p{  
        margin-top: 7px;
        margin-left: 15px;
        font-size: 13px;
    }
    p:nth-child(2){
        color: ${(props) => (props.done ? "#8FC549" : "#666666")};
    }
    p:nth-child(3) {
    color: ${(props) => (props.highest === props.sequence && props.sequence > 0 ? "#8FC549" : "#666666")};
  }
`

const DivCheck = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    right: 13px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 69px;
    background-color: ${(props) => (props.done ? "#8FC549" : "#EBEBEB")};
    border: 1px solid ${(props) => (props.done ? "#8FC549" : "#E7E7E7")};
    border-radius: 5px;
    img{
        width: 35px;
        height: 28px;
    }
`