import { Card, GreetingText, Divider } from "../styles/BemvindoStyles";

export default function BemVindo(props) {
    <Card>
        <GreetingText>
            Bem-vindo(a) <span>{props.nome} {props.sobrenome}</span>
        </GreetingText>
        <Divider/>
    </Card>
}