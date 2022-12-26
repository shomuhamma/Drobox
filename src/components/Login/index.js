import React from 'react';
import { Redirect } from 'react-router-dom';
import { filterXSS } from 'xss';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import { useMsgError } from '../../hooks/useMsgError';
import { ErrorMsgProv } from '../../context/errorMsg';

import Header from '../Header';

import {
    TitleBigger,
    SubTitleAuth,
    ContainerForm,
    ContainerItemsRes,
    Form,
    Input,
    Button,
    BoxPlayerAnimation,
    BtnAuthSocial,
    ContentBtnAuth,
    IconAuthImg,
    Label,
    FieldSet,
    ErrorMsg
} from '../UI';
import secureLogin from '../../assets/svg/login-img.svg';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Login() {
    const { isAuth, setIsAuth, googleAuth } = useAuth();
    const { isError, setIsError, msgError, setMsgError } = useMsgError();

    function signIn(event){
        event.preventDefault();
        const form = event.target;

        const datas = new FormData(form);
        const email = filterXSS(datas.get('email'));
        const pass = filterXSS(datas.get('pass'));

        const isEmptyInputs = email !== '' || pass !== '';

        if(isEmptyInputs)
            auth.signInWithEmailAndPassword(email, pass)
            .then((user) => {
                setIsAuth({
                    name: user.displayName,
                    email: user.email,
                    img: user.photoURL,
                    uid: user.uid
                });

                setIsError(false);
                form.reset();
            })
            .catch((error) => {
                console.error(error.code);
                console.log(error.message);
                
                setIsError(true);
                error.code === "auth/operation-not-allowed"
                    ? setMsgError("Operation was not allowed, we have an error in system authentication, please come back later") 
                    : setMsgError("invalid login");
            });
        else {
            setIsError(true);
            setMsgError("empty fields!");
        }
        
    }
    return (
        Object.keys(isAuth).length !== 0 ? (
            // <Redirect to={{ pathname: '/dashboard'}} />
            window.location.href = "/"
            ) : (
                <ErrorMsgProv>
                    {isError ? (<ErrorMsg>{msgError}</ErrorMsg>) : false}
                    <Header />
                    <TitleBigger style={{ marginTop: '48px' }}>Login</TitleBigger>
                    <ContainerItemsRes>
                        <ContainerForm>
                            <Form onSubmit={signIn}>
                                <FieldSet>
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="E-mail"
                                    />
                                </FieldSet>
                                <FieldSet>
                                    <Label htmlFor="pass">Password</Label>
                                    <Input
                                        required
                                        id="pass"
                                        type="password"
                                        name="pass"
                                        placeholder="Password"
                                    />
                                </FieldSet>
                                <Button type="submit">Login</Button>
                            </Form>
                        </ContainerForm>

                        <BoxPlayerAnimation>
                            <img
                                style={{ width: '100%', height: '280px' }}
                                src={secureLogin}
                                alt="User logging in securely"
                            />
                        </BoxPlayerAnimation>
                    </ContainerItemsRes>
                </ErrorMsgProv>
            )
    )
}
