import React from 'react';

import { Container, Content, HeaderWraper, Header, DropboxLogo } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle(){
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    //Cada container tem um header proprio(um header em cima do outro) 
    <Container className={variant}>
      <HeaderWraper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>
          <button onClick={handleToggle}>{buttonVariant === 0 ? 'Acessar' : 'Interagir'}</button>
        </Header>
      </HeaderWraper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
}

export default Section;