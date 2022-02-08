import React from 'react';
import homeBannerStyle from '../styles/HomeBanner.module.css'
export const HomeBanner = () => {
    return (
        <div className={ homeBannerStyle.banner_container}>
            <div className={ homeBannerStyle.banner}>
                <h2 className={ homeBannerStyle.banner_title}>
                    Good home sold here</h2>
                <h4 className={ homeBannerStyle.banner_description}>Selling, buying and renting with the leading real estate portal in Cambodia</h4>
                <div className={homeBannerStyle.search_container}>
                    <ul className={ homeBannerStyle.search_nav}>
                        <li><a href=''>Buys</a></li>
                        <li><a href=''>Rent</a></li>
                        <li><a href=''>New Development</a></li>
                    </ul>
                    <div className={homeBannerStyle.search_box}>
                        <input type='text' placeholder='Search by point of interest'/>
                        <button className={ homeBannerStyle.banner_search_btn}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
