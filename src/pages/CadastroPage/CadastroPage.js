import styled from "styled-components"
import logo from "../../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function CadastroPage() {
    const navigate = useNavigate()
    const [cadastro, setCadastro] = useState({email: "", name: "", image: "", password:""})
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    console.log(cadastro)

    function fazerCadastro (e) {
        e.preventDefault();
        setLoading(true)
        setDisabled(true)
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(url, cadastro)
        promise.then(() => {
            navigate("/")
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setLoading(false)
            setDisabled(false)
        })
    }
    
    return (
        <TelaLogin>
            <img src={logo} />
            <DivForm>
                <form onSubmit={fazerCadastro}>
                    <input 
                    data-test="email-input"
                    type="email" 
                    placeholder="email"
                    required
                    disabled={disabled}
                    value={cadastro.email}
                    onChange={e => setCadastro({...cadastro, email: e.target.value})}
                    />

                    <input 
                    data-test="password-input"
                    type="password" 
                    placeholder="senha"
                    required
                    disabled={disabled}
                    value={cadastro.password}
                    onChange={e => setCadastro({...cadastro, password: e.target.value})}
                    />

                    <input 
                    data-test="user-name-input"
                    type="text" 
                    placeholder="nome"
                    required
                    disabled={disabled}
                    value={cadastro.name}
                    onChange={e => setCadastro({...cadastro, name: e.target.value})}
                    />

                    <input 
                    data-test="user-image-input"
                    type="url" 
                    placeholder="foto"
                    required
                    disabled={disabled}
                    value={cadastro.image}
                    onChange={e => setCadastro({...cadastro, image: e.target.value})}
                    />

                    {!loading ?
                        <button data-test="signup-btn"  type="submit">Cadastrar</button>
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

            <Link data-test="login-link" to="/">Já tem uma conta? Faça login!</Link>
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
button {
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background-color: #52B6FF;
    border: none;
    font-size: 20.98px;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
}
`

const BotaoLoading = styled.button`
    opacity: 0.7;
`