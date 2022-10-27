import React from 'react' 

export const QuestionsCounter = (props) => {

    if(props.counter > 0) {
        return <h3 className='counter'>Question # {props.counter}</h3>
    } else {
        return <h3 className='counter' style={{opacity: 0}}>Question # {props.counter}</h3>
    }
}