import React from 'react';
import homeBuy from '../styles/HomeBuy.module.css'
import Image from 'next/image';
import cardImage from '../image/card-image.jpg'
import heartIcon from '../image/heart-gray.png'
import viewIcon from '../image/view.png'
export const HomeBuy = () => {
    return (
        <div className={ homeBuy.container}>
            <div className={homeBuy.new_dev_container}>
                <h2 className={homeBuy.new_dev_title}>Buys</h2>
                <div className={homeBuy.card_container}>
                    <div className={ homeBuy.cards}>
                        <div className={homeBuy.image} >
                           
                            <div className={homeBuy.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ homeBuy.number_view}>799</div>
                            </div>
                            <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={homeBuy.property_name}>Morgan EnMaison</div>
                        <div className={homeBuy.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={homeBuy.property_details}>Condominium | 44-110m²</div>
                        <div className={homeBuy.property_price}>＄3,050,000</div>
                        <div className={homeBuy.property_date_post_container}>
                            <div className={homeBuy.property_date_post}>2022-01-12 15:36</div>
                            <div className={homeBuy.loveIcon}>
                                <Image src={heartIcon} width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className={ homeBuy.cards}>
                        <div className={homeBuy.image} >
                       
                            <div className={homeBuy.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ homeBuy.number_view}>799</div>
                            </div>
                        <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={homeBuy.property_name}>Morgan EnMaison</div>
                        <div className={homeBuy.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={homeBuy.property_details}>Condominium | 44-110m²</div>
                        <div className={homeBuy.property_price}>＄3,050,000</div>
                        <div className={homeBuy.property_date_post_container}>
                            <div className={homeBuy.property_date_post}>2022-01-12 15:36</div>
                            <div className={homeBuy.loveIcon}>
                                
                                <Image src={heartIcon} width={25} height={ 25} />
                            </div>
                        </div>
                    </div>
                    <div className={ homeBuy.cards}>
                        <div className={homeBuy.image} >
                       
                            <div className={homeBuy.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ homeBuy.number_view}>799</div>
                            </div>
                        <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={homeBuy.property_name}>Morgan EnMaison</div>
                        <div className={homeBuy.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={homeBuy.property_details}>Condominium | 44-110m²</div>
                        <div className={homeBuy.property_price}>＄3,050,000</div>
                        <div className={homeBuy.property_date_post_container}>
                            <div className={homeBuy.property_date_post}>2022-01-12 15:36</div>
                            <div className={homeBuy.loveIcon}>
                                <Image src={heartIcon} width={25} height={ 25} />
                            </div>
                        </div>
                    </div>
                    <div className={ homeBuy.cards}>
                        <div className={homeBuy.image} >
                       
                            <div className={homeBuy.view}>
                                <Image src={viewIcon} width={15} height={15} />
                                <div className={ homeBuy.number_view}>799</div>
                            </div>
                        <Image src={cardImage} width={270} height={170} objectFit='cover'/>
                        </div>
                        <div className={homeBuy.property_name}>Morgan EnMaison</div>
                        <div className={homeBuy.location}>Chroy Chongva , Chroy Chongva </div>
                        <div className={homeBuy.property_details}>Condominium | 44-110m²</div>
                        <div className={homeBuy.property_price}>＄3,050,000</div>
                        <div className={homeBuy.property_date_post_container}>
                            <div className={homeBuy.property_date_post}>2022-01-12 15:36</div>
                            <div className={homeBuy.loveIcon}>
                                <Image src={heartIcon} width={25} height={ 25} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={homeBuy.view_more}>
                    <a href=''>View More </a>
                    <box-icon name='chevron-right' size='md' color='gray'></box-icon> 
                </div>
            </div>
        </div>
    )
};
