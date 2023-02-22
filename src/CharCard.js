import React from 'react'

const CharCard = ({ char }) => {
    // const { char } = props;
    console.log('char chard', char);
    return (
        <div>
            <p>{char.name}</p>
        </div>
    )
}

export default CharCard