import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-log.svg'

//console.log(igniteLogo)

export function Header () {
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" /> {/*Importa a imagem do Logo { } é usada para declarar variáveis dentro do html */}
        </header>
    );
}