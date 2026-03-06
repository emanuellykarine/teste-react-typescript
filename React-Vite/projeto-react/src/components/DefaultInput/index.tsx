import styles from './styles.module.css';


type DefaultInputProps = {
    id: string;
    labelText:string;
} & React.ComponentProps<'input'>;

export function DefaultInput({id, type, labelText, ...props}: DefaultInputProps){ //...props captura todas as props passadas
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input className={styles.input} type={type} id={id} {...props}/>
        </>
    );
}