import styled from "styled-components";
import React from 'react'

const Footer = () => {
    return (
        <Container>
            <Content>
                <LogoWrap>
                    <Logo src="/disney-plus/images/logo.svg" alt=""/>
                </LogoWrap>
                    <FooterLinks>
                        <Button>Privacy Policy</Button>
                        <Button>Subscriber Agreement</Button>
                        <Button>Collection Statement</Button>
                        <Button>Help</Button>
                        <Button>Supported Devices</Button>
                        <Button>About Us</Button>
                        <Button>Interest-based Ads</Button>
                    </FooterLinks>
                    <Copyright>© Disney. All rights reserved.</Copyright>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    /* box-sizing: border-box;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120px;
    width: auto;
    margin: 0px;
    padding: 0px;
    color: #000; */
    margin-top: 50px
    
`

const Content = styled.div`
    /* width: auto;
    margin-top: 100px;
    background-color: rgb(0, 0, 0);
    box-sizing: border-box;
    display: block;
    left: 0;
    right: 0;
    bottom: 0; */
    background-color: #000;
`

const LogoWrap = styled.div`
    padding-top: 20px;
    width: 64px;
    margin: 0px auto;
    box-sizing: border-box;
    display: block;
`

const Logo = styled.img`
    width: 100%;
    margin: 0px;
    cursor: pointer;
    min-width: 30px;
    height: 32px;
    margin-right: 24px;

    @media (min-width: 768px) {
        min-width: 75px;
        height: 45px;
        margin-right: 32px;
    }
`

const FooterLinks = styled.div`
    display: flex;
    margin: 0px auto;
    -webkit-box-pack: center;
    justify-content: center;
    flex-flow: row wrap;
`

const Button = styled.button`
    color: #cacaca;
    margin: 11px 5px 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
        margin: 11px 1px 10px;
    }
`

const Copyright = styled.div`
    color: #cacaca;
    text-align: center;
    padding-bottom: 1.5rem;
    padding-top: .5rem;
    font-size: 11px;
    line-height: 1.5;
`

export default Footer
