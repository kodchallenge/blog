import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Root = styled.footer`
    background-color: #35353c;
    color: #999;
    margin-top: 100px;
`

const Container = styled.div`
    width: 80%;
    padding: 20px 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    @media (max-width: 968px) {
        width: 90%;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
    
        & > * {
            margin: 10px 0px;
        }
    }
`

const SocialLinks = styled.div`
    display: flex;
    align-items: center;
`

const IconButton = styled.a`
    all: unset;
    font-size: 30px;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
`

const Footer = () => {
    return (
        <Root>
            <Container>
                <Logo style={{ opacity: 0.75 }} />
                <div>&copy; 2022 KodChallenge.com, Tüm Hakları Saklıdır.</div>
                <SocialLinks>
                    <IconButton href='https://linkedin.com/in/yasintorun' className='tooltip'>
                        <i className="fa-brands fa-linkedin"></i>
                        <span className='tooltiptext'>Linkedin Hesabım</span>
                    </IconButton>
                    <IconButton href='https://github.com/yasintorun'>
                        <i className="fa-brands fa-github-square"></i>    
                    </IconButton>
                </SocialLinks>
            </Container>
        </Root>
    )
}

export default Footer