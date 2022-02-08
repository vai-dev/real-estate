import Link from 'next/link';
import navStyle from '../styles/Nav.module.css'
import Image from 'next/image';
import navLogo from '../image/header-logo.png'
export const Nav = () => {
    return (
        <div className={ navStyle.nav_header}>
            <div className={navStyle.nav_container}>
                <div className={navStyle.nav_left}>
                    <Image src={navLogo} />
                </div>
                <div className={navStyle.nav_right}>
                    <nav>
                        <ul className={navStyle.ul}>
                            <li>
                                <Link href='/'>Home</Link>
                            </li> 
                            <li>
                                <Link href='/buy'>Buy</Link>
                                <box-icon type='solid' name='chevron-down' size='xs'></box-icon>
                            </li> 
                            <li>
                                <Link href='/rent'>Rent</Link>
                                <box-icon type='solid' name='chevron-down' size='xs'></box-icon>
                            </li> 
                            <li>
                                <Link href='/new'>New Development</Link>
                                <box-icon type='solid' name='chevron-down' size='xs'></box-icon>
                            </li> 
                            <li>
                                <Link href='/agents'>Agents</Link>
                                <box-icon type='solid' name='chevron-down' size='xs'></box-icon>
                            </li> 
                            <li>
                                <Link href='/news'>News</Link>
                                <box-icon type='solid' name='chevron-down' size='xs'></box-icon>
                            </li> 
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};
