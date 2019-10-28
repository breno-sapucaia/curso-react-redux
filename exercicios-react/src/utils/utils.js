import React from 'react'
export function filhosComProps(props){
    return  React.Children.map(props.childrend, child => {
        return React.cloneElement(child, { ...props } )
    })
}