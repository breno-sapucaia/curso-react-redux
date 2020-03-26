import React, { useState } from 'react'

export default props => {
    const [ contador, setContador ] = useState(100)
    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1) }>incrementar</button>
        </div>
    )
}