import { Container, Content, RadioBox } from './styles'
import nolike from "../../assets/images/n-curti.png"
import like from "../../assets/images/curti.png"

export default function Buttons() {
return(
    <Container>
        <Content>
            <RadioBox
             type="button">
                <img src={nolike}></img>
                <span>NÃO CURTI!</span>
            </RadioBox>

            <RadioBox
             type="button">
                 
                <span className="pular">PULAR</span>
            </RadioBox>

            <RadioBox
             type="button">
                <img src={like}></img>
                <span>CURTI!</span>
            </RadioBox>


        </Content>
    </Container>
)
}