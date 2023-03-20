import styled from "styled-components"
import Topo from "../../components/Topo"
import Menu from "../../components/Menu"
import check from "../../assets/check.png"

export default function HojePage() {
    return (
        <>
            <Topo />
            <TelaHabitos>
                <MeusHabitos>
                    <h1>Hoje</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </MeusHabitos>
                <TodosHabitos>
                <Habitos>
                    <h1>Ler 1 capítulo de Livro</h1>
                    <p>Sequência atual:</p>
                    <p>Seu Recorde: </p>
                    <DivCheck>
                        <img src={check} />
                    </DivCheck>
                </Habitos>
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
        color: #666666;
        font-size: 13px;
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
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    img{
        width: 35px;
        height: 28px;
    }
`