import { Container } from './styles'
import logo from "../../assets/images/logo.svg"
import Menu from "../menu/index"

export default function Header() {
return(
    <Container>
        <img src={logo}></img>
        <Menu></Menu>
    </Container>
)
}