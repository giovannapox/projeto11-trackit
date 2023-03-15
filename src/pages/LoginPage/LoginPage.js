import styled from "styled-components"
import logo from "../../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function LoginPage() {
    const navigate = useNavigate()
    const [login, setLogin] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    console.log(login)
    console.log(loading)

    function fazerLogin(e) {
        e.preventDefault();
        setLoading(true)
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(url, login)
        promise.then(() => {
            navigate("/hoje")
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setLoading(false)
        })
    }


    return (

        <TelaLogin>
            <img src={logo} />
            <DivForm>
                <form onSubmit={fazerLogin}>
                    <input
                        type="email"
                        placeholder="email"
                        required
                        value={login.email}
                        onChange={e => setLogin({ ...login, email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="senha"
                        required
                        value={login.password}
                        onChange={e => setLogin({ ...login, password: e.target.value })}
                    />

                    {!loading ?
                        <button type="submit">Entrar</button>
                        :
                        <BotaoLoading disabled>
                            <ThreeDots
                                height="50"
                                width="50"
                                radius="9"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </BotaoLoading>
                    }

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
    box-sizing: border-box;
::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    color: #DBDBDB;
    font-size: 20px;
    line-height: 25px;
    padding-left: 11px;
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
button {
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background-color: #52B6FF;
    border: none;
    font-size: 20.98px;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const BotaoLoading = styled.button`
    opacity: 0.7;
`
