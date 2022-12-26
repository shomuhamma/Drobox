import styled from "styled-components";

import { ContainerFlexBetween, Content, Button } from '../UI';
import { blueDark, white, cianBlue } from "../UI/colors";

export const ContainerSection = styled(ContainerFlexBetween)`
    flex-direction: column;
    gap: 16px;
    margin: 48px auto;

    @media (min-width: 768px) {
        text-align: left;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const ImgSection = styled.img`
    width: 100%;
    max-width: 400px;
    padding: 0 2%;
`;

export const ContentSection = styled(Content)`
    margin-top: 16px;
    text-align: left;

    @media (min-width: 1000px) {
        width: 100%;
        max-width: 400px;
    }
`;

export const BgAlternativeSections = styled.div`
    width: 100%;
    background-color: ${white};
    color: ${white};

    @media (min-width: 768px) {
        background-color: ${blueDark};
        padding: 24px 0;
    }
`;

export const BtnMobile = styled(Button)`
    margin-top: 0;

    @media (min-width: 768px) { display: none; }
`;

export const BtnDesktop = styled(Button)`
    display: none;

    @media (min-width: 768px) { display: block; }
`;

export const ImgSectionDesktop = styled(ImgSection)`
    display: none;

    @media (min-width: 768px) { display: block; }
`;

export const AnimationContainer = styled.aside`
    width: 80%;
    height: 300px;
    margin: auto;
    text-align: center;

    @media (min-width: 368px) {
        width: 100%;
        max-width: 300px;
    }
    @media (min-width: 768px) { max-width: 600px; }
`;

export const ContainerDots = styled.div`
    width: 100%;
    position: relative;
    display: inline-block;
`;

export const ListDots = styled.ul`
    width: 100%;
    max-width: 200px;
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    justify-content: space-evenly;
`;

export const Dots = styled.span`
    width: 32px;
    height: 32px;
    background-color: ${cianBlue};
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 16px;
    display: inline-block;
    transition: all ease-out .3s;

    &:hover { background-color: ${blueDark}; }
`;
