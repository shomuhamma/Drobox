import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useFile } from '../../hooks/useFile';
import { db, storage } from '../../firebase';
import { Player } from '@lottiefiles/react-lottie-player';

import { CloudDownload, Delete } from '@material-ui/icons';
import pdfImg from '../../assets/img/pdfImg.png';
import gifImg from '../../assets/img/gifImg.png';
import fileImg from '../../assets/img/fileImg.png';
import micImg from '../../assets/img/micImg.png';
import movieImg from '../../assets/img/movieImg.png';

import {
    List,
    ItemList,
    ImgList,
    ContainerDescItem,
    NameItemList,
    TableFiles,
    ThThead,
    ThTheadName,
    TdBody,
    ButtonExpand,
    ButtonConfig,
    ContainerImg,
    BgPopUpFile,
    Options,
    LineOptions,
    OptionsWrapper,
    OptionsColumnLayout,
    DowloadingAnimBox,
    SuccessMsgAction,
    PlayerEmptyFiles
} from './style';
import {
    Button,
    Container,
    SubContent,
    TitleBigger
} from '../UI';
import { cianBlue, red } from '../UI/colors';

export default function ListFiles({ layoutFile, isGrid, handlePopUp, bgStyle }){
    const { isAuth } = useAuth();
    const { files } = useFile();
    const [fileImgExpand, setFileImgExpand] = useState({});
    const [isImgSelected, setIsImgSelected] = useState(false);
    const [showOptions, setShowOptions] = useState(true);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [isBgActive, setIsBgActive] = useState(bgStyle.hiddenBg);
    const [isDeleted, setIsDeleted] = useState(false);

    function showImgFile(e){
        const list = e.target.closest('#itemList');
        const listImgName = list.firstChild.dataset.name;
        const listImgLink = list.firstChild.dataset.url;

        setFileImgExpand({
            name: listImgName,
            img: listImgLink
        });
        setIsImgSelected(true);
        setIsBgActive(bgStyle.showBg);
    }

    
    function hideImgFile(){
        setFileImgExpand({});
        setIsImgSelected(false);
        setIsBgActive(bgStyle.hiddenBg);
    }

    function showImgColumnGrid(e){
        const listImgLink = e.target.dataset.url;
        const listImgName = e.target.dataset.name;

        setFileImgExpand({
            name: listImgName,
            img: listImgLink
        });
        setIsImgSelected(true);
        setIsBgActive(bgStyle.showBg);
    }

    function handleOptions(e) {
        setShowOptions(!showOptions);
        
        e.target.nextElementSibling.style.display = showOptions ? 'block' : 'none';
    }

    function downloadFile(e){
        const file = e.target.closest('#itemList').children[0];
        const fileUrl = file.dataset.url;
        const nameFile = file.dataset.name;

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = () => {
          const blob = xhr.response;
        
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = nameFile;
            a.click();
            a.remove();
        };

        xhr.onprogress = () => setIsDownloaded(true);
        xhr.onloadend = () => setIsDownloaded(false);
        xhr.open('GET', fileUrl);
        xhr.send();
    }

    function deleteFile(e){
        const itemList = e.target.closest('#itemList');
        const idFile = itemList.dataset.id;
        const urlFile = itemList.dataset.url;
        
        // Firestore
        db.collection(`lib/${isAuth.uid}/files`).doc(idFile).delete()
        .then(() => {
            setIsDeleted(true);

            setTimeout(() => setIsDeleted(false), 1500);
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });

        // Storage
        const refStorage = storage.refFromURL(urlFile);

        refStorage.delete()
        .then(() => console.log("Exluido no storage!"))
        .catch((error) => {
            console.error("Error removing file storage: ", error);
        });

        setShowOptions(false);
    }
    
    return(
        <>
            <BgPopUpFile onClick={hideImgFile} style={{
                ...isBgActive,
                zIndex: '3'
            }} />
            <DowloadingAnimBox style={{ display: isDownloaded ? 'block' : 'none'}}>
                <Player
                    loop
                    autoplay
                    style={{ width: '50%', height: '50%' }}
                    src="https://assets9.lottiefiles.com/temp/lf20_3tPLQ7.json"
                />
            </DowloadingAnimBox>
            <ContainerImg style={{ display: isImgSelected ? 'block' : 'none' }}>
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={fileImgExpand.img}
                    alt={fileImgExpand.name}
                />
            </ContainerImg>
            <SuccessMsgAction
                style={{ display: isDeleted ? 'block' : 'none' }}
            >
                O arquivo foi deletado com sucesso!
            </SuccessMsgAction>
            {
                files.length !== 0 ? (
                    <List style={layoutFile}>
                        {
                            isGrid ? 
                            files.map((file, index) => {
                                const isFileImg = file.type === 'image/png' 
                                || file.type === 'image/jpeg' 
                                || file.type === 'image/svg+xml';
                                
                                return (
                                    <ItemList
                                        key={index}
                                        id="itemList"
                                        data-id={file.id}
                                        data-url={file.url}
                                    >
                                            <ImgList
                                                style={{
                                                    backgroundImage: `url(${
                                                        isFileImg ? file.url 
                                                        : file.type === 'application/pdf' ? pdfImg
                                                        : file.type === 'image/gif' ? gifImg 
                                                        : file.type === 'audio/mpeg' ? micImg 
                                                        : file.type === 'video/x-matroska' || file.type === 'video/mp4' ? movieImg
                                                        : fileImg
                                                    })`
                                                }}
                                                data-url={file.url}
                                                data-name={file.name}
                                            ></ImgList>

                                            <ContainerDescItem>
                                                <NameItemList>{file.name}</NameItemList>

                                                <div style={{ position: 'relative' }}>
                                                    <ButtonExpand 
                                                        onClick={showImgFile}
                                                        style={{
                                                            display: isFileImg ? 'inline-block' : 'none',
                                                        }}
                                                    />

                                                    <ButtonConfig onClick={handleOptions}/>
                                                    <Options>
                                                        {/* <OptionsWrapper onClick={downloadFile}>
                                                            <CloudDownload style={{ color: cianBlue, marginRight: '8px' }} />
                                                            <span>Download</span>
                                                        </OptionsWrapper> */}

                                                        <LineOptions />

                                                        <OptionsWrapper onClick={deleteFile}>
                                                            <Delete style={{ color: red }} />
                                                            <span>Delete</span>
                                                        </OptionsWrapper>
                                                    </Options>
                                                </div>
                                            </ContainerDescItem>
                                    </ItemList>
                                )
                            }) : (
                                <TableFiles cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <ThTheadName>Nome</ThTheadName>
                                            <ThThead>Tamanho</ThThead>
                                            <ThThead style={{ textAlign: 'right', paddingRight: '16px' }}>Opções</ThThead>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            files.map((file, index) => <tr key={index}>
                                                <TdBody style={{ textAlign: 'left' }}>{file.name}</TdBody>
                                                <TdBody>{file.size} MB</TdBody>
                                                <TdBody style={{ textAlign: 'right', position: 'relative' }}>
                                                        <ButtonExpand
                                                            data-name={file.name}
                                                            data-url={file.url}
                                                            onClick={showImgColumnGrid}
                                                            style={{
                                                                display: file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/svg+xml'
                                                                ? 'inline-block'
                                                                : 'none',
                                                                marginRight: '8px'
                                                            }}
                                                        />

                                                    <ButtonConfig onClick={handleOptions} />
                                                    
                                                        <OptionsColumnLayout
                                                            id="itemList" 
                                                            data-id={file.id}
                                                        >
                                                            <OptionsWrapper
                                                                data-url={file.url}
                                                                data-name={file.name}
                                                                onClick={downloadFile}
                                                            >
                                                            </OptionsWrapper>

                                                            <LineOptions />

                                                            <OptionsWrapper onClick={deleteFile}>
                                                                <Delete style={{ color: red }} />
                                                                <span>Delete</span>
                                                            </OptionsWrapper>
                                                        </OptionsColumnLayout>
                                                    
                                                </TdBody>
                                            </tr>)
                                        }
                                    </tbody>
                                </TableFiles>
                            )
                        }
                    </List>
                ) : (
                    <Container style={{ marginTop: '48px' }}>
                        <TitleBigger>You didn't upload your files :(</TitleBigger>
                        <PlayerEmptyFiles
                            autoplay
                            loop
                            src="https://assets6.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json"
                        />
                        <Button
                            onClick={handlePopUp}
                            style={{ maxWidth: '200px' }}
                        >Make your 1st upload!</Button>
                    </Container>
                )
            }
        </>
    );
}
