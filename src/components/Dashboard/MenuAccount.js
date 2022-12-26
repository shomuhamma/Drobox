import React from 'react';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';

import SettingsIcon from '@material-ui/icons/Settings';
import Logout from '../../assets/svg/logout.svg';
import imgProfile from '../../assets/svg/imgProfile.svg';

import {
    ButtonIcon,
    FigCaptionImg,
    ImgAccount,
    NavAccount
} from './style';

export default function MenuAccount({ showAsideProfile }){
    const { isAuth, setIsAuth } = useAuth();

    function logout(){
        auth.signOut().then(() => setIsAuth({}))
        .catch((error) => {
            console.log(error.message);
            alert('Ocorreu algum erro ao deslogar-se');
          });
    }

    return(
        <NavAccount>
                <figure style={{ height: '100%' }}>
                    <ImgAccount src={isAuth.img === null ? imgProfile : isAuth.img} alt={`Foto de ${isAuth.name === null ? 'usuário' : isAuth.name}`} />

                    <FigCaptionImg>{isAuth.name}</FigCaptionImg>
                </figure>

                <div>
                    <ButtonIcon onClick={logout} style={{ marginRight: '8px' }}>
                        <img src={Logout} alt="Ícone de Deslogar" style={{width: '100%', height: '100%'}} />
                    </ButtonIcon>

                    <ButtonIcon onClick={showAsideProfile}>
                        <SettingsIcon style={{  width: '100%', height: '100%'}} />
                    </ButtonIcon>
                </div>
        </NavAccount>
    );
}
