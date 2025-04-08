import React from 'react';
import styles from './app.module.css';
import Card from './componentes/Card';

function App() {
  return (
    <div className={styles.app}>
      <Card 
        imagem="/fotoCard.svg"
        nomeTema="Relacionamento com a comunidade"
        liderTema="Kercia"
        projetos="5 projetos"/>
      <Card
        imagem="/fotoCard2.svg"
        nomeTema="Saúde e Qualidade de Vida no Trabalho"
        liderTema="Bárbara"
        projetos="3 projetos"/>
    </div>
  );
}

export default App;

