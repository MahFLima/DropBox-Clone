import React, {useState, useEffect} from 'react';

import { Container } from './styles';

//limite do scrollY
const scrollThreshold = 301;

 /* ----------------------------------------------------------------------------------------- */
declare global{
  interface Window{
    toggleActiveMenu: (() => void) | undefined;
  }
}
 /* ----------------------------------------------------------------------------------------- */

const SideMenu: React.FC = ({children}) => {
  //varivel estado scrollY
  const [scrollY, setScrollY] = useState(0);
  //variavel estado do evento abrir e fechar o side menu
  const [isActive, setIsActive] = useState(false);
  /*
    evento que mostra onde esta o scroll da pagina e faz com que o side menu apareça dependendo do resultado
  */
  useEffect(() => {
    // função que mostra onde esta o scroll em Y da pagina
    function onScroll(){
      setScrollY(window.scrollY);
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll);

    //remove a função
    return() => window.removeEventListener('scroll', onScroll);
  }, [])

  //botão de fechar só sera ativado se o side menu for aberto intencionalmente
  const classes = [
    isActive ? 'open' : '',
    scrollY < scrollThreshold ? 'scrollOpen' : '',
  ];

  const className = classes.join(' ').trim();
  /* ----------------------------------------------------------------------------------------- */
  function toggleActiveMenu(){
    setIsActive(prev => !prev);
  }

  //distribuir via props
  window.toggleActiveMenu = toggleActiveMenu;
  /* ----------------------------------------------------------------------------------------- */

  return (
      <Container className={className}>
          {children}
      </Container>
  );
}

export default SideMenu;