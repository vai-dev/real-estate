import React from 'react';
import homeStyle from '../styles/HeaderTop.module.css'
import Image from 'next/image';
import hotlineImage from '../image/hotline-header.png'
import mobileApp from '../image/headertop-mobile.png'
import useFlage from '../image/us-flage.jpg'
import userLogin from '../image/user-login.png'
export const HeaderTop = () => {
    return (
        <div className={homeStyle.header_top}>
            <div className= {homeStyle.header_top_container}>
                <div className={homeStyle.header_top_left}>
                    <div className={ homeStyle.hotline}>
                        <Image src={hotlineImage} width={25} height={25} />
                        <h3>Hotline</h3>
                    </div>
                    <div className={ homeStyle.mobile}>
                        <Image src={mobileApp} width={25} height={25} />
                        <h3>Download App</h3>
                    </div>
                </div>
                <div className={homeStyle.header_top_right}> 
                    <div className={homeStyle.language_container}>
                        <div className={homeStyle.flage}>
                            <Image src={useFlage} width={25} height={15}/>
                        </div>
                        <div className={ homeStyle.languge_name}>English</div>
                    </div>    
                    <div className={homeStyle.header_login}>
                        <div className={homeStyle.flage}>
                            <Image src={userLogin} width={15} height={15}/>
                        </div>
                        <div className={ homeStyle.user_login}>Login</div>
                    </div>    
                    <div className={homeStyle.header_register}>
                        Register
                    </div>    
                </div>
            </div>
        </div>
    )
};
