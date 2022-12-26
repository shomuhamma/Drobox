import React, { useState } from 'react';
import { filterXSS } from 'xss';
import { useAuth } from '../../hooks/useAuth.js';
import firebase from 'firebase/compat/app';
import { storage } from '../../firebase';

import {
    ProfileContainer,
    ImgUser,
    ContainerEmailGoogle,
    LabelEmail,
    ImgProfile,
    HideAsideProfile,
    LabelInputProfile
} from './style.js';
import {
    Content,
    Label,
    Form,
    Input,
    TitleBigger,
    Button,
    ErrorMsg,
    SuccessMsg
} from '../UI';
import { cianBlue } from '../UI/colors.js';

import SettingsIcon from '@material-ui/icons/Settings';
import Edit from '@material-ui/icons/Edit';
import profile from '../../assets/svg/profile.svg';
import imgProfile from '../../assets/svg/imgProfile.svg';

export default function Profile({ asideProfile, showAsideProfile }){
    const { isAuth, setIsAuth } = useAuth();
    const [error, setError] = useState({
        isError: false,
        msg: ""
    });
    const [success, setSuccess] = useState({
        isSuccess: false,
        msg: ""
    });
    const user = firebase.auth().currentUser;

    function updateProfile(e){
        e.preventDefault();
        const form = e.target;

        const datas = new FormData(form);
        const name = filterXSS(datas.get('name'));
        const email = filterXSS(datas.get('email'));

        if(name !== ''){
            user.updateProfile({ displayName: name })
            .then(() => {
                setIsAuth(oldData => { return { ...oldData, name: name } });

                setSuccess({
                    isSuccess: true,
                    msg: "Name successfully updated!"
                });

                setTimeout(() => {
                    setSuccess({
                        isSuccess: false,
                        msg: ""
                    });
                }, 2500);
            })
            .catch((error) => {
                console.error(error.name);
    
                setError({
                    isError: true,
                    msg: "An error occurred!"
                });

                setTimeout(() => {
                    setError({
                        isError: false,
                        msg: ""
                    });
                }, 3000);
            });
        }

        if(name === '' || name !== '' && email !== '')
            if(validationEmail(email)){
                user.updateEmail(email)
                .then(() => {
                    setIsAuth(oldData => { return { ...oldData, email: email } });

                    setSuccess({
                        isSuccess: true,
                        msg: "Email updated :)"
                    });
    
                    setTimeout(() => {
                        setSuccess({
                            isSuccess: false,
                            msg: ""
                        });
                    }, 2500);
                })
                .catch((error) => {
                    console.error(error.message);
                    if(error.code === "auth/requires-recent-login"){
                        setError({
                            isError: true,
                            msg: "Recent authentication is required, log into your account again to change email."
                        });

                        setTimeout(() => {
                            setError({
                                isError: false,
                                msg: ""
                            });
                        }, 3000);
                    } else {
                        setError({
                            isError: true,
                            msg: "There was an error with changing the email"
                        });

                        setTimeout(() => {
                            setError({
                                isError: false,
                                msg: ""
                            });
                        }, 2500);
                    }
                });
            } else {
                setError({
                    isError: true,
                    msg: "Invalid email! Certain characters are not valid..."
                });

                setTimeout(() => {
                    setError({
                        isError: false,
                        msg: ""
                    });
                }, 2500);
            }

        form.reset();
    }

    function updatePhoto(e){
        const photo = e.target.files[0];

        if(photo !== undefined){
            const uploadPhoto = storage.ref(`lib/${isAuth.uid}/photo/${photo.name}`).put(photo);
            let oldPhotoRef;

            // Delete the photo
            if(isAuth.img !== null){
                oldPhotoRef = storage.refFromURL(isAuth.img);
                oldPhotoRef.delete()
                .then(function() { console.log('Foto antiga removida'); })
                .catch(function(error) {
                    console.error(error);
                });
            }

            // Upload Photo
            uploadPhoto.on('state_changed',(snapshot) => {},
            error => { throw new Error(error) },
            () => {
                storage.ref(`lib/${isAuth.uid}/photo/${photo.name}`).getDownloadURL()
                .then((url)=>{
                    user.updateProfile({ photoURL: url })
                    .then(() => {
                        setIsAuth(oldData => { return { ...oldData, img: url } })

                        setSuccess({
                            isSuccess: true,
                            msg: "Your profile picture has been updated!"
                        });
        
                        setTimeout(() => {
                            setSuccess({
                                isSuccess: false,
                                msg: ""
                            });
                        }, 2500);
                    })
                    .catch((error) => {
                        console.error(error.message);
                    
                        setError({
                            isError: true,
                            msg: "An error occurred, please try again"
                        });
        
                        setTimeout(() => {
                            setError({
                                isError: false,
                                msg: ""
                            });
                        }, 2500);
                    });
                })
                .catch(error => console.error(error));
            });
        }
            
    }

    function validationEmail(email){
        const regExpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/;

        return regExpEmail.test(email) ? true : false;
    }

    return(
        <ProfileContainer
            style={{
                left: asideProfile ? '0' : '-100%'
            }}
        >
            <HideAsideProfile>
                <SettingsIcon
                    onClick={showAsideProfile}
                    style={{
                        fontSize: '2.25rem',
                        color: cianBlue
                    }}
                />
            </HideAsideProfile>

            <TitleBigger style={{ padding: '48px 0' }}>Profile</TitleBigger>
            {
                isAuth.providerData === 'google.com'
                ? (
                    <>
                        <ImgUser
                            src={isAuth.img}
                            alt={isAuth.name}
                        />

                        <Content
                            style={{
                                display: 'inline-block',
                                lineHeight: '42px',
                                verticalAlign: 'top'
                            }}
                        >{isAuth.name}</Content>

                        <ContainerEmailGoogle>
                            <LabelEmail>Email:</LabelEmail>
                            <Content style={{ display: 'inline-block' }}>{isAuth.email}</Content>
                        </ContainerEmailGoogle>
                    </>
                )
                : (
                    <div>
                        { error.isError ? <ErrorMsg>{error.msg}</ErrorMsg> : false }
                        {
                            success.isSuccess ?
                            <SuccessMsg style={{ top: '22%' }}>{success.msg}</SuccessMsg> 
                            : false
                        }

                        <ImgUser
                            src={isAuth.img === null ? imgProfile : isAuth.img}
                            alt={isAuth.name}
                        />

                        <Content
                            style={{
                                display: 'inline-block',
                                lineHeight: '42px',
                                verticalAlign: 'top'
                            }}
                        >
                            <LabelInputProfile htmlFor={"photoInput"}>
                                <span>Edit Profile Photo</span>
                                <Edit 
                                    style={{
                                        marginLeft: '8px',
                                        fontSize: '1.8rem',
                                        verticalAlign: 'middle',
                                        cursor: 'pointer'
                                    }}
                                />
                            </LabelInputProfile>
                            <input
                                onChange={updatePhoto}
                                type="file"
                                id="photoInput"
                            />
                            
                        </Content>

                        <Form
                            onSubmit={updateProfile}
                            style={{
                                textAlign: 'left',
                                margin: '48px auto 24px auto'
                            }}
                        >
                            <Label htmlFor="name">Name: </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder={isAuth.name === null ? isAuth.email.split("@")[0] : isAuth.name}
                            />
                            
                            <div style={{ marginTop: '24px' }}></div>

                            <Label htmlFor="email">E-mail: </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder={isAuth.email}
                            />

                            <center>
                                <Button type="submit">Update</Button>
                            </center>
                        </Form>
                    </div>
                )
            }

            <ImgProfile
                src={profile}
                alt="Profile"
            />
        </ProfileContainer>
    );
}