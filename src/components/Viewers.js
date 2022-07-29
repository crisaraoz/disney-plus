import styled from "styled-components";
import { Link } from "react-router-dom";

const Viewers = (props) => {
    return (
        <Container>
            <Wrap>
                <Link to="/disney">
                    <img src="/disney-plus/images/viewers-disney.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/disney-plus/videos/disney.mp4" type="video/mp4"/>
                    </video>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/pixar">
                    <img src="/disney-plus/images/viewers-pixar.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/disney-plus/videos/pixar.mp4" type="video/mp4"/>
                    </video>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/marvel">
                    <img src="/disney-plus/images/viewers-marvel.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/disney-plus/videos/marvel.mp4" type="video/mp4"/>
                    </video>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/star-wars">
                    <img src="/disney-plus/images/viewers-starwars.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/disney-plus/videos/star-wars.mp4" type="video/mp4"/>
                    </video>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/national-geographic">
                    <img src="/disney-plus/images/viewers-national.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/disney-plus/videos/national-geographic.mp4" type="video/mp4"/>
                    </video>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/star">
                    <img src="/disney-plus/images/viewers-star.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInline={true}>
                        <source src="/disney-plus/videos/star.mp4" type="video/mp4"/>
                    </video>
                </Link>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px 10px 0;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`;

export default Viewers;