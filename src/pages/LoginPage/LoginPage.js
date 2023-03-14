import styled from "styled-components"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <TelaLogin>
            <img src={logo} />
            <DivForm>
                <form>
                    <input 
                    type="email" 
                    placeholder="email"
                    required
                    />

                    <input 
                    type="password" 
                    placeholder="senha"
                    required
                    />
                    <button>Entrar</button>
                </form>
            </DivForm>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </TelaLogin>
    )
}

const TelaLogin = styled.div`
margin-top: 68px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
img {
    width: 180px;
    height: 178px;
}
a{
    margin-top: 25px;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
}
`

const DivForm = styled.div`
margin-top: 33px;
form{
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
}
input{
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
} 
input::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    color: #DBDBDB;
    font-size: 20px;
    line-height: 25px;
    padding-left: 11px;
}
button {
    width: 310px;
    height: 45px;
    border-radius: 5px;
    background-color: #52B6FF;
    border: none;
    font-size: 20.98px;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
}
`