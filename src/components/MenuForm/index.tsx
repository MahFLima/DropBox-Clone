import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle(){
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }
  
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={handleToggle}>X</button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulario abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à politica de privacidade a aos Termos de serviço.
        </span>
      </Form>
    </Container>
  );
}

export default MenuForm;