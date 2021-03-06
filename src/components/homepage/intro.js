import React from 'react'
import styled from 'styled-components'
import { introText } from '../../data/introText'
import WhiteBkg from '../../images/white-bkg.png'

const Wrapper = styled.div`
    height: 450px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 30px 15px 0 15px;
    margin-bottom: -20px;
    @media screen and (min-width: 1200px) {
        background-image: url(${WhiteBkg});
        background-size: cover;
        padding: 30px 0 0 10%;
    }
`

const Heading = styled.h3`
    color: #662d91;
    font-size: 2rem;
`

const IntroText = styled.li`
    padding: 5px;
    font-size: 1.5rem;
`


export const IntroView = () => {

    return (
        <Wrapper>
            <div>
                <Heading>{introText.general}</Heading>
                <ul>
                    <IntroText>Provides a <b>complete data science laboratory</b> for research in the cloud.</IntroText>
                    <IntroText>Solves technical infrastructure challenges to <b>focus researchers on science.</b></IntroText>
                    <IntroText><b>Brings the right tools for each team together</b> in a secure, scalable portal.</IntroText>
                    <IntroText>Includes <b>bring your own data</b> access patterns.</IntroText>
                </ul>
            </div>
        </Wrapper>
    )
}