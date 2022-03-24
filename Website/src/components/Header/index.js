import React from 'react'
import { Container, Wrapper, Logo, Menu } from './styles'

function Header() {
  return (
    <Container>
        <Wrapper>
            <Logo>Logotipo</Logo>
            <Menu>
                <Link>INÍCIO</Link>
                <Link>SOBRE NÓS</Link>
                <Link>PRODUTOS</Link>
                <Link>ONDE COMPRAR</Link>
                <Link>CONTATO</Link>
            </Menu>
        </Wrapper>
    </Container>
  )
}

export default Header