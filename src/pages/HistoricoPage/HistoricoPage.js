import styled from "styled-components"
import Topo from "../../components/Topo"
import Menu from "../../components/Menu"

export default function HistoricoPage() {
    return (
        <>
            <Topo />
            <TelaHabitos>
                <MeusHabitos>
                    <h1>Histórico</h1>
                </MeusHabitos>
                <Habitos>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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