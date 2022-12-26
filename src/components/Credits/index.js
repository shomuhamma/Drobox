import React from 'react';

import Header from '../Header';

import { TitleBigger } from '../UI';
import {
    ContainerCredits,
    ContentCredits,
    Img,
    ListContributions,
    ListItem,
    LinkItems
} from './style';

import copy from '../../assets/svg/copy.svg';

export default function Credits() {
    return (
        <>
            <Header />

            <ContainerCredits>
                <Img
                    src={copy}
                    alt="Ilustração sobre Open Source e Copy"
                />

                <ContentCredits>
                    Neste projeto foi utilizado várias ilustrações, animações e imagens com licença gratuita.
                    Então como gratidão a toda comunidade, principalmente aos autores das obras utilizadas, esta página está destinada a atribuí-los:
                </ContentCredits>
            </ContainerCredits>

            <ListContributions>
                    <ListItem>
                        Ilustrações providas por <LinkItems target="_blank" href="https://undraw.co/">unDraw</LinkItems>;
                    </ListItem>
                    <ListItem>
                        Ícones providos pelo <LinkItems target="_blank" href="https://fonts.google.com/icons?selected=Material+Icons">Material UI</LinkItems> do Goole;
                    </ListItem>
                    <ListItem>
                        Imagem de <LinkItems target="_blank" href="https://pixabay.com/pt/users/clker-free-vector-images-3736/">Clker-Free-Vector-Images</LinkItems> 
                        por <LinkItems target="_blank" href="https://pixabay.com/">Pixabay</LinkItems>;
                    </ListItem>
                    <ListItem>
                        Animação de <LinkItems target="_blank" href="https://lottiefiles.com/24141-unlock-login">Mirela Prifti</LinkItems> por 
                        <LinkItems target="_blank" href="https://lottiefiles.com/">Lottie Files</LinkItems>;
                    </ListItem>
                    <ListItem>
                        Animação de <LinkItems target="_blank" href="https://lottiefiles.com/20434-access">Mathi Vanan</LinkItems> por 
                        <LinkItems target="_blank" href="https://lottiefiles.com/">Lottie Files</LinkItems>;
                    </ListItem>
                    <ListItem>
                        Animação de <LinkItems target="_blank" href="https://lottiefiles.com/27938-upload-files">Mas</LinkItems> por 
                        <LinkItems target="_blank" href="https://lottiefiles.com/">Lottie Files</LinkItems>.
                    </ListItem>
            </ListContributions>
        </>
    );
}
