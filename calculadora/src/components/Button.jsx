import React from 'react'
import './Button.css'

export default props => {
    let classes = ['button']

    props.operation && classes.push('operation')
    props.double && classes.push('double')
    props.triple && classes.push('triple')

    classes = classes.join(' ')

    

    

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}
        >
            {props.label}
        </button >
    )
}