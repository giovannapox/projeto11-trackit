import styled from "styled-components"
import logo from "../assets/tracklist.svg"
import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Topo() {
    const { image } = useContext(UserContext)
    
    return (
        <>
            <TopoContainer data-test="header">
                {console.log(image)}
                <img src={logo} alt="logo" />
                <img src={image} alt="user icon"/>
            </TopoContainer>
        </>
    )
}

const TopoContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    z-index: 1;
    img:nth-child(1){
        width: 97px;
        height: 49px;
        margin-left: 18px;
    }
    img:nth-child(2){
        width: 51px;
        height: 51px;
        border-radius: 50px;
        margin-right: 10px;
    }
`