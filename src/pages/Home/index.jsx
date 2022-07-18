import {FiPlus} from 'react-icons/fi';


import {Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Section} from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

export function Home(){
    return(
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

           

            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
               

             

            </Menu>

            <Search>
                <Input placeholder ="Pesquisar por título"/>
            </Search>

            <Content>

              <Section title= "Minhas notas ">
                <Note data={{ title: 'React', tags: [{id: '1', name: 'React'},
                {id: '2', name: 'Rocketseat'}
            ]}} />

              </Section>

            </Content>

            <NewNote>
                <FiPlus/>
                Criar nota 
            
            </NewNote>


        </Container>
    );
}