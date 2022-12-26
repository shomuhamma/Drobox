import React from 'react';
import Slider from "react-slick";
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

import {
    Container,
    LineMobile,
    TitleBigger,
    SubTitle
} from '../UI';
import {
    ContainerSection,
    ImgSection,
    ContentSection,
    BtnMobile,
    ImgSectionDesktop,
    BtnDesktop,
    BgAlternativeSections,
    AnimationContainer,
    ContainerDots,
    ListDots,
    Dots
} from './style';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cloudFile from '../../assets/svg/cloud-files.svg';
import secureFile from '../../assets/svg/secure-files.svg';
import registerLoginAcccount from '../../assets/svg/register-account.svg';

import Header from '../Header';

export default function Home(){
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <ContainerDots>
                <ListDots>{dots}</ListDots>
            </ContainerDots>
        ),
        customPaging: i => <Dots>{i}</Dots>
    };

    return(
        <>
            <Header />
            <ContainerSection>
                <div>
                    <TitleBigger>My DropBox</TitleBigger>
                </div>
            </ContainerSection>
            <LineMobile />
        
        </>
    );
}