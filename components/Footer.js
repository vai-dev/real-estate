import footer from '../styles//Footer.module.css'
import Image from 'next/image';
import Link from 'next/link'
import faceBook from '../image/facebook.png'
import youtube from '../image/youtube.png'
import telegram from '../image/telegram.png'
import linkedin from '../image/linkedin.png'
import wechat from '../image/wechat.png'
import apple from '../image/apple-logo.png'
import playstore from '../image/play-store.png'
export const Footer = () => {
    return (
        <>
            <div className={ footer.footer_container}>
                <div className={ footer.footer_top}>
                    <div className={footer.social_container}>
                        <div className={footer.social_flex}>
                            <Link href=''>
                                <div className={footer.social}>
                                    <Image src={faceBook}width={20} height={ 20}/>
                                </div>
                            </Link>
                            <Link href=''>
                            <div className={footer.social}>
                                <Image src={wechat} width={20} height={ 20}/>
                            </div>
                            </Link>
                            <Link href=''>
                            <div className={footer.social}>
                                <Image src={youtube} width={20} height={ 20}/>
                            </div>
                            </Link>
                            <Link href=''>
                            <div className={footer.social}>
                                <Image src={telegram} width={20} height={ 20}/>
                            </div>
                            </Link>
                            <Link href=''>
                            <div className={footer.social}>
                                <Image src={linkedin} width={20} height={ 20}/>
                            </div>
                            </Link>                       
                        </div>
                        <div className={footer.app_download}>
                            <div className={ footer.ios}>
                                <div className={footer.apple}>
                                    <Image src={apple} width={40} height={ 40}/>
                                </div>
                                <p>Download on the App  Store</p>
                            </div>
                            <div className={ footer.ios}>
                                <div className={footer.apple}>
                                    <Image src={playstore} width={40} height={ 40}/>
                                </div>
                                <p>Download on the Play Store</p>
                            </div>
                        </div>
                    </div>
                    <div className={ footer.footer_nav}>
                        <ul>
                            <li><Link href=''>About Us</Link></li>
                            <li><Link href=''>Feedback</Link></li>
                            <li><Link href=''>User Agreement</Link></li>
                            <li><Link href=''>Privacy Policy</Link></li>
                            <li><Link href=''>Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={footer.copy_right}>
                Copyright © 2021 DIGITAL LIFE TECHNOLOGY CO.,LTD.
                </div>
                
            </div>
            <div className={footer.footer_bottom}>
            </div>
        </>
    )
};
