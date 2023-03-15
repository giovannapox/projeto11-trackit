import styled from "styled-components"
import Topo from "../../components/Topo"
import Menu from "../../components/Menu"

export default function HabitosPage() {
    return (
        <>
            <Topo />
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