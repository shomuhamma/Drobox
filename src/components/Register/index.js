import React from 'react';
import { filterXSS } from 'xss';
import { Player } from '@lottiefiles/react-lottie-player';
import { useAuth } from '../../hooks/useAuth';
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth } from '../../firebase';
import { useMsgError } from '../../hooks/useMsgError';
import Header from '../Header';

import { 
    ContainerForm,
    ContainerItemsRes,
    TitleBigger,
    SubTitleAuth,
    Input,
    Form,
    Button,
    BtnAuthSocial,
    ContentBtnAuth,
    IconAuthImg,
    BoxPlayerAnimation,
    FieldSet,
    Label,
    ErrorMsg
 } from '../UI';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Register() {
    const { isAuth, setIsAuth, googleAuth } = useAuth();
    const { isError, setIsError, msgError, setMsgError } = useMsgError();

    function registerAccount(event){
        event.preventDefault();
        const form = event.target;

        const datas = new FormData(form);
        const email = filterXSS(datas.get('email'));
        const pass = filterXSS(datas.get('pass'));

        const isEmptyInputs = email !== '' || pass !== '';

        if(validationForm(email, pass) && isEmptyInputs){
            alert('Account successfully created!');

            setIsError(false);
            createAccount(email, pass, form);
        } else {
            setIsAuth({});
            setIsError(true);
            setMsgError("E-mail or  password invalid!");
        }  
    }
 
    function createAccount(email, pass, form){
        auth.createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            setIsAuth({
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            uid: user.uid,
          });

          form.reset();
        })
        .catch((error) => {
          console.error(error.code);
          console.log(error.message);
          
          setIsError(true);
          setMsgError("There was a registration failure, please try again.");
        });
    }

    function validationForm(email, pass){
        const regExpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/;
        const regExpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#?!])[0-9a-zA-Z$*&@#?!]{8,}$/;

        return regExpEmail.test(email) && regExpPass.test(pass) ? true : false;
    }

    return (
        Object.keys(isAuth).length !== 0 ? (
            // <Redirect exact to={{ pathname: '/dashboard'}} />
            window.location.href = "/"
        ) : (
            <>
            {isError ? (<ErrorMsg>{msgError}</ErrorMsg>) : false}
                <Header />
                <TitleBigger style={{ marginTop: '48px' }}>Register</TitleBigger>
                <ContainerItemsRes>
                    <ContainerForm>
                        <Form onSubmit={registerAccount}>
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
                                    name="pass"
                                    type="password"
                                    placeholder="Password"
                                    title="Password must contain at least 8 characters containing uppercase, lowercase, numbers and a special character"
                                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#?!])[0-9a-zA-Z$*&@#?!]{8,}$"
                                />
                            </FieldSet>
                            <Button type="submit">Register</Button>
                        </Form>

                    </ContainerForm>

                    <BoxPlayerAnimation>
                        <Player
                            style={{ width: '100%', height: '280px' }}
                            loop
                            autoplay
                            src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
                        />
                    </BoxPlayerAnimation>
                </ContainerItemsRes>
            </>
        )
    )
}
