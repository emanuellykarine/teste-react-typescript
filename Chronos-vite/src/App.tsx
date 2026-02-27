import React from 'react';
import styles from './app.module.css';
import Card from './componentes/Card';
import CardProjeto from './componentes/CardProjeto';

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

      <CardProjeto
        nomeProjeto="Uso Racional de Papel"
        nomeTema="Uso Racional de Recursos"
        nomeLider="Wanderley"
        statusImagem="/iconeAtencao.svg"
        status="Informações incompletas"/>

    </div>
  );
}

export default App;

