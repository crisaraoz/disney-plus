import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "./firebase";
import { collection, doc, getDoc } from 'firebase/firestore';
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import Footer from "./Footer";

const Detail = (props) => {
    const {id} = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        getDoc(doc(collection(db,'movies'),id))
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log('no such document');
                }
            })
            .catch((error) => {
                console.log("Error getting documents", error);
            });
    }, [id]);

    return (
        <Container>
                <Wrapper>
                <Background>
                    <img src={detailData.backgroundImg} alt={detailData.title} />
                    <div></div>
                </Background>
                <ImageTitle>
                    <img src={detailData.titleImg} alt={detailData.title} />
                </ImageTitle>
                <ContentMeta>
                    <SubTitle>
                        {detailData.subTitle}
                    </SubTitle>
                    <Controls>
                        <Player>
                            <img src="/disney-plus/images/play-icon-black.png" alt="" />
                            <span>Play</span>
                        </Player>
                        <Trailer>
                            <span>Trailer</span>
                        </Trailer>
                        <AddList>
                            <span></span>
                            <span></span>
                        </AddList>
                        <GroupWatch>
                            <div>
                                <img id="white" src="/disney-plus/images/group-icon-white.svg" alt="" />
                                <img id="black" src="/disney-plus/images/group-icon-black.svg" alt="" />
                            </div>
                        </GroupWatch>
                    </Controls>
                    <Description>
                        {detailData.description}
                    </Description>
                </ContentMeta>
                <Recommends />
                <NewDisney />
                <Originals />
                <Trending />
                </Wrapper>
            <Footer />
        </Container>
    )
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
`

const Wrapper = styled.div`
    padding: 0 calc(3.5vw + 25px) 112px;
`

const Background = styled.div`
    left: 0;
    opacity: 1;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
    img {
        width: 100%;
    }

    div {
        inset: 0px;
        position: absolute;
        background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    //height: 30vw;
    min-height: 170px;
    padding-top: 56px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 341px;
        min-width: 100px;
        width: 35vw;
    }
`

const ContentMeta = styled.div`
    max-width: 874px;
`

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px 18px 0;
    min-height: 56px;
`

const Player = styled.button`
    font-size: 15px;
    font-weight: 600;
    margin: 0 22px 0 0;
    padding: 0 21px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    img {
        width: 36px;
        margin-right: 11px;
    }

    span {
        margin-bottom: 3px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0 12px;
        font-size: 12px;
        margin: 0 10px 0 0;

        img {
            width: 25px;
        }
    }
`

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    &:hover {
        background: rgb(249, 249, 249, 0.4);
        border: 1px solid transparent;
        color: rgba(0, 0, 0)
    }
`

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    min-width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);

        &:first-child {
            height: 2px;
            transform: translate(1px, 0) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2){
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }

    @media (max-width: 768px) {
        margin: 0 10px 0 0;
    }

    &:hover {
        background: rgb(249, 249, 249);
        span {
            background-color: rgb(0, 0, 0);
        }
    }
`

const GroupWatch = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    div {
        height: 40px;
        width: 40px;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    #black {
        display: none;
    }

    &:hover {
        background: rgb(249, 249, 249);

        #white {
            display: none;
        }

        #black {
            display: block;
        }
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 12px;
    font-weight: 400;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Description = styled.div`
    line-height: 1.9;
    font-size: 18px;
    font-weight: 400;
    padding: 0;
    color: rgb(249, 249, 249);
    padding-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export default Detail;