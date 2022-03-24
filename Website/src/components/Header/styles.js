import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    background: transparent;
    height: 12vh;    
`;

export const Wrapper = styled.div`
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1vw;
`;

export const Logo = styled.img`

`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;