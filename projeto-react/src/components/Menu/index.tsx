import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light'; 

export function Menu (){
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes;
        return storageTheme;
    });
    
    const icon = theme === 'light' ? <SunIcon/>  :  <MoonIcon/>;
    
    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    //dps que mudar o valor do theme ele executa essa função 
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a href="/" className={styles.menuLink} aria-label='Ir para a Home' title='Ir para a Home'>
                <HouseIcon/>
            </a>

            <a href="#" className={styles.menuLink} aria-label='Histórico' title='Histórico'>
                <HistoryIcon/>
            </a>

            <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
                <SettingsIcon/>
            </a>

            <a onClick={handleThemeChange} href="/" className={styles.menuLink} aria-label="Modo escuro/Modo claro" title="Modo escuro/Modo claro">
                {icon}
            </a>
        </nav>
    );
}