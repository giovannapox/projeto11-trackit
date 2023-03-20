import styled from "styled-components"
import { useState } from "react"

export default function BotoesSemana ( {name, habito, setHabito, i, dia, disabled}) {
    const [cor, setCor] = useState(false)

    function selecionarDia(e){
        e.preventDefault();

        if(!habito.days.includes(i)){
            setCor(true)
            setHabito({...habito, days: [...habito.days, i]})
        } else {
            setCor(false)
            let dias = habito.days
            let indice = dias.indexOf(i)
            dias.splice(indice, 1)
            setHabito({...habito, days: [...dias]})
        }
    }

    return (
        <>
            <BotaoDia data-test="habit-day" onClick={selecionarDia} cor={cor} disabled={disabled}>{dia}</BotaoDia>
        </>
    )
}

const BotaoDia = styled.button`
    margin-top: 8px;
    width: 30px;
    height: 30px;
    background-color: ${props => props.cor ? "#CFCFCF":"#FFFFFF"};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    color: ${props => props.cor ? "#FFFFFF":"#DBDBDB"};
    font-size: 20px;
`