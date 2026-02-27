import React from 'react';
import styles from "./card.module.css";

type CardProps = {
    imagem:string;
    nomeTema:string;
    liderTema:string;
    projetos:string;
};

function Card({imagem, nomeTema, liderTema, projetos}: CardProps) { //Props = propriedades para inicializar o card
    return (
        <div className={styles.card}>
            <img src={imagem} alt={nomeTema} className={styles.imagem}/>
            <h2 className={styles.h2}>{nomeTema}</h2>
            <h3 className={styles.h3}>{liderTema}</h3>
            <h4 className={styles.h4}>{projetos}</h4>
        </div>
    );
}

export default Card;