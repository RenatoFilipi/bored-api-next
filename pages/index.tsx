import React, { useState } from 'react'
import { Content, Request, Result, Text } from '../styles/pages/index.elem'
import Head from 'next/head'
import Footer from '../components/Footer'

interface IProps {
    activity: string,
    type: string,
    participants: string,
    price: number,
    link: string,
    key: string,
    accessibility: number
}

const App = () => {

    const [activity, setActivity] = useState('activity will appear here :)')
    const [participants, setParticipants] = useState('')

    const RequestActivity = async () => {

        const response = await fetch('https://www.boredapi.com/api/activity')
        const result = await response.json() as Promise<IProps>;
        setActivity((await result).activity)
        setParticipants("participants: " + (await result).participants)
    }

    return (
        <>
            <Head>
                <title>next app demo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Content>
                <Request>
                    <h1>Are you bored?</h1>
                    <button type="button" onClick={RequestActivity}>Suggest Activity</button>
                </Request>
                <Result>
                    <Text size="big">{activity}</Text>
                    <Text size="small">{participants}</Text>
                </Result>
            </Content>
            <Footer mode="dark">Made with React Next + Typescript + Styled Components</Footer>
        </>
    )
}

export default App
