type HeadingProps = {
    children: React.ReactNode;
};

import styles from './styles.module.css';

export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>;
}