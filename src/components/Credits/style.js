import styled from 'styled-components';
import { Container, Content } from '../UI';
import { cianBlue, orange } from '../UI/colors';

export const ContainerCredits = styled(Container)`
    margin: 48px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    text-align: left;

    @media (min-width: 768px) {
        justify-content: space-evenly;
        flex-direction: initial;
    }
`;

export const ContentCredits = styled(Content)`
    max-width: 240px;

    @media (min-width: 468px) {
        max-width: 400px;
    }

    @media (min-width: 768px) {
        max-width: 600px;
    }
`;

export const Img = styled.img`
    width: 80%;
    padding: 0 2%;
    margin-top: 32px;

    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const ListContributions = styled.ul`
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin: 48px auto;
    padding: 0 2%;
    list-style-type: none;
    text-align: center;
    font-size: 1.15rem;

    @media (min-width: 468px) { max-width: 440px; }

    @media (min-width: 568px) { max-width: 540px; }

    @media (min-width: 768px) {
        max-width: 1280px;
        margin: 100px auto 48px auto;
    }
`;

export const ListItem = styled.li`
    margin: 8px 0;
`;

export const LinkItems = styled.a`
    color: ${cianBlue};
    font-weight: 500;
    text-decoration: underline;
    transition: all ease-in .3s;

    &:hover {
        opacity: 0.8;
        color: ${orange};
    }
`;
