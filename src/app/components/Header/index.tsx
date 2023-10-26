import Link from 'next/link';
import { FC } from 'react';
import style from './index.module.css'
import ThemeSwitch from '../ThemeSwitch';


// eslint-disable-next-line react/display-name
const Header: FC = () => {
    return (
        <header className={style.header}>
            <nav className={`${style.nav} container`}>
                <ul className={style.navList}>
                    <li>
                        <Link href="/about">g4rv</Link>
                    </li>
                    <li>
                        <Link href="/">blog</Link>
                    </li>
                    <li><ThemeSwitch/></li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;
