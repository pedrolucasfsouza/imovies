import { Container } from './styles'


export default function Menu() {
return(
    <Container>
        <ul>
    <li><a className="ncurado" href="/">FILMES NÃO CURADOS</a></li>
    <li><a href="/liked">FILMES CURTIDOS</a></li>
    <li><a href="/noliked">FILMES NÃO CURTIDOS</a></li>
    </ul>

    </Container>
)
}