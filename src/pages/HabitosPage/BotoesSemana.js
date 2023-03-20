import styled from "styled-components"
import { useState } from "react"

export default function BotoesSemana ( {name}) {
    const [cor, setCor] = useState("#FFFFFF")
    const [corTexto, setCorTexto] = useState("#DBDBDB")

    function selecionarDia(e, id){
        e.preventDefault();
        if(cor === "#FFFFFF"){
            setCor("#CFCFCF")
            setCorTexto("#FFFFFF")
        } else {
            setCor("#FFFFFF")
            setCorTexto("#DBDBDB")
        }
    }

    return (
        <>
            <BotaoDia data-test="habit-day" onClick={selecionarDia} cor={cor} corTexto={corTexto}>{name}</BotaoDia>
        </>
    )
}

const BotaoDia = styled.button`
    margin-top: 8px;
    width: 30px;
    height: 30px;
    background-color: ${props => props.cor};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    color: ${props => props.corTexto};
    font-size: 20px;
`