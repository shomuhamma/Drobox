import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';

import {
    Container404,
    Box404
} from './style';
import {
    TitleBigger,
    Button
} from '../UI';
import { white } from '../UI/colors';

export default function Error404() {
    return (
        <Container404>
            <Box404>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_6nmazhqu.json"
                    style={{ width: '100%', maxWidth: '400px' }}
                />
                <TitleBigger>Essa página não existe! :(</TitleBigger>
                <Button>
                    <Link style={{ color: white }} to="/"><Home/></Link>
                </Button>
            </Box404>
        </Container404>
    )
}
