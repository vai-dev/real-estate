import Image from 'next/image';
import pL from '../styles/PopularLocation.module.css'
import carImage from '../image/card-image.jpg'
export const PopularLocation = () => {
    return (
        <div className={pL.popular_location}>
            <div className={ pL.container}>
                <h1 className={pL.title}>Popular Locations</h1>
                <div className={ pL.card_container}>
                    <div className={ pL.cards}>
                        <div className={pL.image}>
                            <div className={ pL.location}>
                                Phnome Penh
                            </div>
                            <Image src={carImage} width={270} height={200} objectFit='cover' />
                        </div>
                        <div className={pL.rent_sale}>
                            <div className={pL.rent}>
                                <p>Rent</p>
                                <h4>453</h4>
                            </div>
                            <div className={pL.sale}>
                                <p>Sale</p>
                                <h4>887</h4>
                            </div>
                        </div>
                    </div>
                    <div className={ pL.cards}>
                        <div className={pL.image}>
                        <div className={ pL.location}>
                                Preah Sihanouk
                            </div>
                            <Image src={carImage} width={270} height={200} objectFit='cover' />
                        </div>
                        <div className={pL.rent_sale}>
                            <div className={pL.rent}>
                                <p>Rent</p>
                                <h4>235</h4>
                            </div>
                            <div className={pL.sale}>
                                <p>Sale</p>
                                <h4>465</h4>
                            </div>
                        </div>
                    </div>
                    <div className={ pL.cards}>
                        <div className={pL.image}>
                        <div className={ pL.location}>
                                Siem Reap
                            </div>
                            <Image src={carImage} width={270} height={200} objectFit='cover' />
                        </div>
                        <div className={pL.rent_sale}>
                            <div className={pL.rent}>
                                <p>Rent</p>
                                <h4>956</h4>
                            </div>
                            <div className={pL.sale}>
                                <p>Sale</p>
                                <h4>464</h4>
                            </div>
                        </div>
                    </div>
                    <div className={ pL.cards}>
                        <div className={pL.image}>
                        <div className={ pL.location}>
                                Kompot
                            </div>
                            <Image src={carImage} width={270} height={200} objectFit='cover' />
                        </div>
                        <div className={pL.rent_sale}>
                            <div className={pL.rent}>
                                <p>Rent</p>
                                <h4>346</h4>
                            </div>
                            <div className={pL.sale}>
                                <p>Sale</p>
                                <h4>234</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
