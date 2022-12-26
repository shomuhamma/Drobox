import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

import optionsIcon from '../../assets/img/options-icon.png';
import zoomExpand from '../../assets/img/zoomExpand.png';
import { SubContent, SuccessMsg } from '../UI';
import {
    black,
    cianBlue,
    white,
    orange,
    blueDark,
    green
} from '../UI/colors';

export const NavAccount = styled.nav`
    width: 100%;
    max-width: 300px;
    height: 42px;
    margin: 32px auto;
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 368px) { max-width: 400px; }
    @media (min-width: 768px) {
        max-width: 1280px;
        height: 62px;
    }
`;

export const FilterContainerFlex = styled.section`
    width: 100%;
    max-width: 300px;
    margin: 32px auto;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 368px) { max-width: 400px; }
    @media (min-width: 768px) { max-width: 1280px; }
`;

export const BoxInputSearch = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 0 2%;
    height: 42px;
    position: relative;
`;

export const BoxFilter = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${black};
`;

export const LabelSearch = styled.label`
    position: absolute;
    top: 60%;
    right: 16px;
    transform: translateY(-60%);
    color: ${black};

    @media (min-width: 768px) { right: 36px; }
`;

export const ImgAccount = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 16px;
    display: inline-block;

    @media (min-width: 768px) {
        width: 62px;
        height: 62px;
    }
`;

export const FigCaptionImg = styled.figcaption`
    font-size: 1rem;
    height: 100%;
    font-weight: lighter;
    color: ${black};
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 4px;
`;

export const ButtonIcon = styled.button`
    width: 26px;
    height: 26px;
    background-color: transparent;
    color: ${cianBlue};

    @media (min-width: 368px) {
        width: 32px;
        height: 32px;
    }

    @media (min-width: 768px) {
        width: 42px;
        height: 42px;
    }
`;

export const SelectFilter = styled.select`
    border: 0;
    border-radius: 10px;
    font-size: 1rem;
    padding: 8px 2%;
    cursor: pointer;
    background-color: ${cianBlue};
    color: ${black};
`;

export const ImgIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const BtnAddFile = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${cianBlue};
    color: ${white};
    transition: ease-out .3s;
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 2;

    &:hover {
        opacity: 0.8;
    }

    @media (min-width: 768px) {
        width: 42px;
        height: 42px;

        bottom: 48px;
        right: 24px;
    }
`;

export const PopUpFileAdd = styled.aside`
    width: 100%;
    max-width: 300px;
    padding: 32px 2%;
    border-radius: 10px;
    background-color: ${black};
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2;

    @media (min-width: 768px) {
        max-width: 450px;
    }
`;

export const LabelFileInput = styled.label`
    width: 200px;
    height: 32px;
    line-height: 32px;
    background-color: ${orange};
    border-radius: 10px;
    color: ${white};
    cursor: pointer;
    display: block;
    margin: 16px auto 8px auto;

    @media (min-width: 768px) {
        height: 42px;
        line-height: 42px;
    }
`;

export const LabelUpload = styled.label`
    display: block;
    margin-top: 8px;
    color: ${white};
`;

export const ProgressUpload = styled.progress`
    height: 16px;
    -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
    
    &::-webkit-progress-bar {
        border-radius: 10px;
        background-color: ${white};
    }

    &::-webkit-progress-value {
        border-radius: 10px;
        background-color: ${green};
    }
`;

export const BgPopUpFile = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: all ease-out .3s;
    top: 0;
    left: 0;
`;

export const List = styled.ul`
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin: auto;
    padding: 0 2%;
    text-align: center;
    flex-wrap: wrap;

    @media (min-width: 468px) { max-width: 440px; }

    @media (min-width: 568px) { max-width: 540px; }

    @media (min-width: 768px) { max-width: 1280px; }
`;

export const ItemList = styled.li`
    width: 100%;
    max-width: 250px;
    height: 180px;
    border-radius: 10px;
    background-color: ${blueDark};
    color: ${white};
`;

export const ImgList = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const ContainerDescItem = styled.div`
    width: 100%;
    height: calc(100% - 120px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;
`;

export const ButtonExpand = styled.button`
    width: 16px;
    height: 16px;
    background-color: transparent;
    background-image: url(${zoomExpand});
    background-repeat: no-repeat;
    background-position: center;
    color: ${cianBlue};
    cursor: pointer;
    display: inline-block;
    margin-right: 16px;

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`;

export const ButtonConfig = styled.button`
    width: 16px;
    height: 16px;
    background-color: transparent;
    background-image: url(${optionsIcon});
    background-repeat: no-repeat;
    background-position: center;
    color: ${cianBlue};
    cursor: pointer;
    display: inline-block;
    z-index: 2;

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

export const NameItemList = styled(SubContent)`
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const TableFiles = styled.table`
    width: 100%;
    max-width: 300px;
    margin-top: 32px;

    @media (min-width: 368px){ max-width: 450px; }
    @media (min-width: 768px) { max-width: 800px; }
`;

export const ThThead = styled.th`
    border-bottom: 1px solid ${orange};
    padding: 8px 0;
    font-size: 1rem;
    font-weight: 500;
`;

export const ThTheadName = styled(ThThead)`
    width: 45%;
    text-align: left;
    padding: 8px 2%;
`;

export const TdBody = styled.td`
    border-bottom: 1px solid ${orange};
    padding: 8px 2%;
    font-size: 1rem;
    text-align: center;
`;

export const ContainerImg = styled.aside`
    width: 100%;
    max-width: 80%;
    padding: 24px 4%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    text-align: center;

    
    @media (min-width: 768px) { max-width: 750px; }
    @media (min-width: 1280px) { max-width: 1000px; }
`;

export const Options = styled.aside`
    width: 100px;
    padding: 8px 2%;
    background-color: ${black};
    color: ${white};
    border-radius: 10px;
    position: absolute;
    top: 24px;
    right: 0;
    display: none;
`;

export const OptionsColumnLayout = styled(Options)`
    top: -24px;
    right: 42px;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const LineOptions = styled.hr`
    width: 100%;
    height: 2px;
    margin: 4px 0;
    background-color: ${white};
`;

export const DowloadingAnimBox = styled.div`
    width: 100%;
    max-width: 80px;
    height: 80px;
    border-radius: 10px;
    background-color: ${black};
    position: absolute;
    bottom: 6%;
    left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${white};

    @media (min-width: 368px) {
        max-width: 120px;
        height: 120px;
    }

    @media (min-width: 768px) {
        max-width: 200px;
        height: 200px;
    }
`;

export const SuccessMsgAction = styled(SuccessMsg)`
    width: 140px;
    top: 10%;
    left: 15%;
    transform: translate(-15%, -10%);

    @media (min-width: 768px) {
        width: auto;
        top: 24%;
        left: 50%;
        transform: translate(-50%, -24%);
    }
`;

export const ProfileContainer = styled.aside`
    width: 100%;
    height: 100vh;
    padding: 0 2%;
    text-align: center;
    position: fixed;
    top: 0;
    left: -100%;
    background-color: ${white};
    z-index: 3;
    transition: .3s all ease-in-out;

    @media (min-width: 768px) {
        width: 100%;
        max-width: 450px;
        box-shadow: 2px 2px 10px black;
    }
`;

export const ImgUser = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
`;

export const ContainerEmailGoogle = styled.div`
    width: auto;
    margin: 24px auto;
    border-bottom: 1px solid ${orange};

    @media (min-width: 300px) { width: 70%; }
    @media (min-width: 468px) { width: 50%; }
    @media (min-width: 600px) { width: 40%; }
    @media (min-width: 768px) { width: 80%; }
`;

export const LabelEmail = styled.label`
    font-size: 1.25rem;
    color: ${orange};
    display: inline-block;
    margin-right: 8px;
`;

export const HideAsideProfile = styled.button`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 2%;
    right: 4%;
    background-color: transparent;
    cursor: pointer;
`;

export const ImgProfile = styled.img`
    width: 50%;
    margin: 32px auto;
    padding: 0 2%;

    @media (min-width: 768px) { width: 80%; }
`;

export const LabelInputProfile = styled(LabelFileInput)`
    width: 120px;
    lineHeight: 42px;
    backgroundColor: ${cianBlue};
    cursor: pointer;
    margin: 0;
    margin-top: 8px;

    @media (min-width: 768px) {
        width: 160px;
        margin-top: 0;
    }
`;

export const PlayerEmptyFiles = styled(Player)`
    width: 100%;
    max-width: 200px;
    padding: 0 2%;

    @media (min-width: 320px) { max-width: 250px; }

    @media (min-width: 768px) { max-width: 400px; }
`;