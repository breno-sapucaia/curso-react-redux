import Filho from './Filho'
import React from 'react'

export default props => {
    const notificarSaida = lugar => alert(`Liberado para ${lugar}`);
    return(
        <div>
            <Filho notificarSaida={notificarSaida} />
        </div>
    )
}
