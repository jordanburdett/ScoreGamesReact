import React from 'react'

interface Props {
    link: string;
}

const GameInfoLink = (props: Props) => {
    return (
        <div>
            Hand & Foot Rules: {props.link}
        </div>
    )
}

export default GameInfoLink
