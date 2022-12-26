import styled from "styled-components";

import { white, blueDark, cianBlue } from '../UI/colors';

const BgHeader = styled.header`
    width: 100%;
    height: 60px;
    background-color: ${blueDark};
`;

const ButtonMenu = styled.button`
    width: 32px;
    height: 32px;
    background-color: transparent;
    color: ${cianBlue};

    @media (min-width: 768px) { display: none; }
`;

const NavMobile = styled.nav`
    width: 100%;
    position: absolute;
    top: calc(60px);
    left: 0;
    border-top: 1px solid ${white};
    padding: 24px 0;
    text-align: center;
    background-color: ${blueDark};
    transition: all ease-in .3s;

    @media (min-width: 768px) { display: none; }
`;

const ListMenuMobile = styled.li`
    margin: 16px 0;
    font-size: 1.7rem;
    font-weight: 500;
`;

const NavDesktop = styled.nav`
    display: none;

    @media (min-width: 768px) { display: block; }
`;

const ListMenuDesktop = styled.li`
    display: inline-block;
    margin: 0 8px;
    font-size: 1.25rem;
`;

export {
    BgHeader,
    ButtonMenu,
    NavMobile,
    ListMenuMobile,
    NavDesktop,
    ListMenuDesktop
};