import FavoriteIndicator from './FavoriteIndicator';
import style from './style.module.scss';
import menu from '/icons/Menu.svg'
import logo from '/logo-small.svg'

const Header = () => {
  return (
    <header className={style.container}>
        <nav className={style.logoContainer}>
            <img src={menu} />
            <img src={logo} />
        </nav>
        <nav className={style.links}>
            <FavoriteIndicator />
        </nav>
    </header>
  )
}

export default Header