import UserContext from "../../context/UserContext"
import { useContext } from "react"
import axios from "axios"
import styled from "styled-components"
import lixeira from "../../assets/lixeira.png"

export default function TodosHabitos( {nome, dias, id} ) {
    const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const { token } = useContext(UserContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    function deletarHabito() {
        if (window.confirm("Tem certeza que deseja remover o hábito?") == true) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promise.then((res) => {
                alert("Hábito deletado")
            })
          } else {
          }
    }

    return (
        <Habito>
            <div>
                <h1 data-test="habit-name">{nome}</h1>
                <img data-test="habit-delete-btn" onClick={deletarHabito} src={lixeira} alt="deletar" />
            </div>
            <DivBotao>
                {diasSemana.map((e, i) => <Button data-test="habit-day" i={i} dias={dias} disabled key={i}>{e}</Button>)}
            </DivBotao>
        </Habito>
    )
}

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
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    background-color: ${props => !(props.dias.includes(props.i)) ? "#FFFFFF": "#CFCFCF"};
    color: ${props => !(props.dias.includes(props.i)) ? "#CFCFCF" : "#FFFFFF"};
`