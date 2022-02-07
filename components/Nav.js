import React from 'react';
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
                        <ul className={ navStyle.ul}>
                            <li className={navStyle.active}>
                                <a href=''>Home</a>
                            </li>
                            <li>
                                <a href=''>Buy</a>
                                <box-icon name='caret-down' size="xs"></box-icon>
                                <ul className={navStyle.buy_sub}></ul>
                            </li>
                            <li>
                                <a href=''>Rent</a>
                                <box-icon name='caret-down' size="xs"></box-icon>
                            </li>
                            <li>
                                <a href=''>New Developments</a>
                                <box-icon name='caret-down' size="xs"></box-icon>
                            </li>
                            <li>
                                <a href=''>Agents</a>
                                <box-icon name='caret-down' size="xs"></box-icon>
                            </li>
                            <li>
                                <a href=''>New</a>
                                <box-icon name='caret-down' size="xs"></box-icon>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};
