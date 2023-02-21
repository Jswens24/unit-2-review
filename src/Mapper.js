import React, { useEffect } from 'react';

const Mapper = (props) => {

    useEffect(() => {
        console.log('hit')
    }, [props.chars]);


    return (
        <div>
            {props.chars.map(char => {
                return <p>{char.name}</p>
            })}
        </div>
    )
};

export default Mapper;