import * as React from "react"
import { HelxHeader, HelxFooter } from '../components'
import styled from "styled-components"
import AboutBkg from '../images/about-bkg-2.png';
import { DetailView } from '../components/about/details'
import { IntroView } from '../components/about/intro'
import { TeamView } from '../components/about/team'
import { FunderView } from "../components/about/funder";
import { BackToTopButton } from "../components/buttons/back-to-top";
import '../styles/styles.css'

const Wrapper = styled.div`
    background-image: url(${AboutBkg});
    background-size: cover;
`
const Heading = styled.h3`
    color: white;
    font-size: 4rem;
    text-align: center;
`

const TextWrapper = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AboutPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <Wrapper>
                <HelxHeader />
                <TextWrapper>
                    <Heading>About HeLx</Heading>
                </TextWrapper>
            </Wrapper>
            <BackToTopButton />
            <IntroView />
            <DetailView />
            <TeamView />
            <FunderView />
            <HelxFooter />
        </main>
    )
}

export default AboutPage