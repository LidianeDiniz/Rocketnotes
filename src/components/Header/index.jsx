import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){

    return(
        <Container>

        <Profile>
            <img src="https://github.com/lidianediniz.png" 
            alt="Foto do usuário" />
            <div>
                <span>Bem vindo,</span>
                <strong>Lidiane Diniz</strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>
        </Container>
    );
}