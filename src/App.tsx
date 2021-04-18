import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

// iteração com a section(dados ficam no data)
import data from './data';

export default function App() {
  return (
    <div>
      {/* cada section tem uma variant, um titulo e uma descrição que são passadas como parametros atraves das props */}
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description} 
      />
      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description} 
      />
      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description} 
      />
      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description} 
      />
      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description} 
      />
      <GlobalStyles/>
      <SideMenu>
        <MenuForm/>
      </SideMenu>
    </div>
  );
}

