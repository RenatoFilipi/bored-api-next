import React, { FC } from 'react'
import { MyFooter } from '../styles/pages/index.elem'

interface IProps {
    children: string,
    mode: string
}

const Footer: FC<IProps> = (props) => {
    return (
        <MyFooter mode={props.mode}>{props.children}</MyFooter>
    )
}

export default Footer
