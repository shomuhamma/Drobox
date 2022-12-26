import styled from "styled-components";
import {
    black,
    cianBlue,
    orange,
    white,
    red,
    yellow,
    green
} from './colors';

/*-- Containers --*/
export const Container = styled.div`
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin: auto;
    padding: 0 2%;
    text-align: center;

    @media (min-width: 468px) { max-width: 440px; }

    @media (min-width: 568px) { max-width: 540px; }

    @media (min-width: 768px) { max-width: 1280px; }
`;

export const ContainerFlexBetween = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerItemsRes = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;

    @media (min-width: 768px) { justify-content: space-evenly; }
    @media (min-width: 1280px) {
        justify-content: space-between;
        height: 60vh;
    }
`;

export const ContainerForm = styled.aside`
    width: 100%;
    max-width: 300px;
    margin: 32px auto 48px auto;
    padding: 0 2%;
    text-align: center;

    @media (min-width: 768px) { max-width: 400px; }
`;

/*-- Btns & Forms/Inputs --*/
export const Button = styled.button`
    width: 100%;
    max-width: 160px;
    height: 42px;
    border-radius: 10px;
    background-color: ${cianBlue};
    color: ${white};
    font-size: 1rem;
    font-weight: normal;
    margin-top: 24px;
`;

export const BtnAuthSocial = styled.button`
    width: 100%;
    max-width: 180px;
    height: 32px;
    background-color: ${white};
    font-size: 18px;
    color: ${cianBlue};
    margin-top: 24px;
    border: 1px solid ${black};
    border-radius: 10px;
    position: relative;

    @media (min-width: 368px) {
        max-width: 200px;
        height: 42px;
    }
`;

export const ContentBtnAuth = styled.span`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    margin: 48px 0 24px 0;

    @media (min-width: 768px) { max-width: 400px; }
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    border-radius: 10px;
    border: 3px solid ${orange};
    padding-left: 16px;
    font-size: 1rem;
    font-weight: lighter;
    background-color: transparent;
`;

export const FieldSet = styled.fieldset`
    width: 100%;
    border: none;
    text-align: left;
    margin: 16px 0;
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: lighter;
    color: ${black};
    margin-left: 8px;

`;

/*-- Messages --*/

export const Msg = styled.div`
    padding: 12px 2%;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
`;

export const ErrorMsg = styled(Msg)`
    background-color: ${red};
    color: ${white};
    position: absolute;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 768px) { top: 180px; }
`;

export const WarningMsg = styled(Msg)`
    background-color: ${yellow};
    color: ${black};
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -80%);
    z-index: 3;
`;

export const SuccessMsg = styled(Msg)`
    background-color: ${green};
    color: ${white};
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    z-index: 3;
`;

/*-- Fonts --*/
export const TitleBigger = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: ${orange};
    text-align: center;
`;

export const SubTitle = styled.h2`
    font-size: 1.7rem;
    font-weight: bold;
    color: ${orange};
`;

export const SubTitleAuth = styled.h3`
    margin-top: 32px;
    font-size: 1.7rem;
    font-weight: bold;  
    color: ${black};
    text-decoration: underline;
`;

export const Content = styled.p`
    font-size: 1.25rem;
    font-weight: normal;
`;

export const SubContent = styled.p`
    font-size: 1rem;
    font-weight: lighter;
    color: ${white};
`;

/*-- Others --*/

export const LineMobile = styled.hr`
    width: 80%;
    margin: 24px auto;
    border: solid 1px ${orange};

    @media (min-width: 768px) { display: none; }
`;

export const IconAuthImg = styled.img`
    width: 42px;
    height: 100%;
`;

export const BoxPlayerAnimation = styled.div`
    width: 100%;
    max-width: 400px;
    display: none;

    @media (min-width: 768px) { display: block; }
`;
