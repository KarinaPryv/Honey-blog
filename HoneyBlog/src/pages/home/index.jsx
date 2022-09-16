import '../home/home.scss';
import React from 'react';
import { useSelector } from 'react-redux';

import StepsProgress from './stepsProgress/stepsProgress';
import { useTranslation } from '../../common/_hooks/useTranslation';
import { selectTheme } from '../../redux/userSettings/userSettingsSlice';

export const Home = () => {
    const theme = useSelector(selectTheme);
    const translate = useTranslation();

    return (
        <div className={theme}>
            <section className='introduction-block'>
                <div className=' muted-container'>
                    <div className='square-large' />
                    <div className='square-small' />
                    <h3>WEBSITES &nbsp;&gt;&nbsp; BLOGGING</h3>
                    <h2>
                        <span>{translate('introductionTitle')}</span>
                        <span className='text-orange'> BLOG</span>
                    </h2>
                    <p className='introduction-block-info'>
                        <span>{translate('introductionInfo')}</span>
                        <span className='text-orange'> HoneyBlog's </span> 
                        <span>{translate('introductionInfoAddition')}</span>
                    </p>
                </div>
            </section>
            <section className='d-flex steps-block'>
                <div className='steps-block-description'>
                    <h2>{translate('stepsTitle')}</h2>
                    <a href="https://www.blogger.com" target="blank">
                        <h3>GET STARTED &gt;&gt;&gt;</h3>
                    </a>
                    <div className='square-large' />
                    <div className='square-small' />
                </div>
                <div className='steps-block-progress'>
                    <StepsProgress />
                </div>
            </section>
        </div>
    )
}