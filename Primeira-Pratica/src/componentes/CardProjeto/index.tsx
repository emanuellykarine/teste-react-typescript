import styles from "./cardProjeto.module.css"
type CardProjetoProps = {
    nomeProjeto: string;
    nomeTema: string;
    nomeLider: string;
    statusImagem:string;
    status: string;
};

function CardProjeto({nomeProjeto, nomeTema, nomeLider, statusImagem, status}: CardProjetoProps) {
    return (
        <div className={styles.cardProjeto}>
            <h1 className={styles.h1}>{nomeProjeto}</h1>

            <div className={styles.div}>
                <img src="/iconeTema.svg" alt="Icone do tema" />
                <p><strong>Tema:</strong> {nomeTema}</p>
            </div>

            <div className={styles.div}>
                <img src="/iconeLider.svg" alt="Icone do lider" />
                <p><strong>Líder(es):</strong> {nomeLider}</p>
            </div>

            <div className={styles.div}>
                <img src={statusImagem} alt="Status do processo" />
                <p>{status}</p>
            </div>
            

        </div>
    );
}

export default CardProjeto;