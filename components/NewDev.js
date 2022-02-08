import React from 'react';
import newDev from '../styles/NewDev.module.css'
import Image from 'next/image';
import cardImage from '../image/card-image.jpg'
import heartIcon from '../image/heart-gray.png'
import viewIcon from '../image/view.png'
export const NewDev = () => {
    return (
        <div className={ newDev.container}>
            <div className={newDev.new_dev_container}>
                <h2 className={newDev.new_dev_title}>New Developments</h2>
                <div className={newDev.card_container}>
                    <div className={ newDev.cards}>
                        <div className={newDev.image} >
                            <div className={newDev.for_sale}>For Sale</div>
                            <div className={newDev.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ newDev.number_view}>799</div>
                            </div>
                            <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={newDev.property_name}>Morgan EnMaison</div>
                        <div className={newDev.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={newDev.property_details}>Condominium | 44-110m²</div>
                        <div className={newDev.property_price}>＄3,050,000</div>
                        <div className={newDev.property_date_post_container}>
                            <div className={newDev.property_date_post}>2022-01-12 15:36</div>
                            <div className={newDev.loveIcon}>
                                <Image src={heartIcon} width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className={ newDev.cards}>
                        <div className={newDev.image} >
                        <div className={newDev.for_sale}>For Sale</div>
                            <div className={newDev.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ newDev.number_view}>799</div>
                            </div>
                        <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={newDev.property_name}>Morgan EnMaison</div>
                        <div className={newDev.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={newDev.property_details}>Condominium | 44-110m²</div>
                        <div className={newDev.property_price}>＄3,050,000</div>
                        <div className={newDev.property_date_post_container}>
                            <div className={newDev.property_date_post}>2022-01-12 15:36</div>
                            <div className={newDev.loveIcon}>
                                
                                <Image src={heartIcon} width={25} height={ 25} />
                            </div>
                        </div>
                    </div>
                    <div className={ newDev.cards}>
                        <div className={newDev.image} >
                        <div className={newDev.for_sale}>For Sale</div>
                            <div className={newDev.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ newDev.number_view}>799</div>
                            </div>
                        <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={newDev.property_name}>Morgan EnMaison</div>
                        <div className={newDev.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={newDev.property_details}>Condominium | 44-110m²</div>
                        <div className={newDev.property_price}>＄3,050,000</div>
                        <div className={newDev.property_date_post_container}>
                            <div className={newDev.property_date_post}>2022-01-12 15:36</div>
                            <div className={newDev.loveIcon}>
                                <Image src={heartIcon} width={25} height={ 25} />
                            </div>
                        </div>
                    </div>
                    <div className={ newDev.cards}>
                        <div className={newDev.image} >
                        <div className={newDev.for_sale}>For Sale</div>
                            <div className={newDev.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ newDev.number_view}>799</div>
                            </div>
                        <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={newDev.property_name}>Morgan EnMaison</div>
                        <div className={newDev.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={newDev.property_details}>Condominium | 44-110m²</div>
                        <div className={newDev.property_price}>＄3,050,000</div>
                        <div className={newDev.property_date_post_container}>
                            <div className={newDev.property_date_post}>2022-01-12 15:36</div>
                            <div className={newDev.loveIcon}>
                                <Image src={heartIcon} width={25} height={ 25} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={newDev.view_more}>
                    <a href=''>View More </a>
                    <box-icon name='chevron-right' size='md' color='gray'></box-icon> 
                </div>
            </div>
        </div>
    )
};
