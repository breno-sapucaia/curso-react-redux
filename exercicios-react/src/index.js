import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './components/PrimeiroComponente.jsx'
// import CompA,{ CompB as B } from './components/DoisComponentes.jsx';
//import FamiliaSilva from './components/FamiliaSilva.jsx'
// import ComponenteComFuncao from './components/ComponenteComFuncao';
// import Familia from './components/Familia.jsx';
// import Membro from './components/Membro.jsx';
// import MultiElementos from "./components/MultiElementos.jsx";
// import Pai  from "./components/Pai";
// import CC from './components/ComponenteClasse'
import Contador from './components/Contador'
const elemento = document.getElementById('root');
ReactDOM.render(
    <React.Fragment>
        <Contador numero="1"></Contador>
        {/* <CC valor=""></CC> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao/> */}
        {/* <Familia>
            <Membro nome="Andre" sobrenome="pereira"/>
            <Membro nome="Mariana" sobrenome="pereira"/>
        </Familia>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Gustavo" sobrenome="Arruda"/>
        </Familia>
        <MultiElementos /> */}
        {/* <CompA valor="olá eu sou sua mãe" />
        <B  valor="olá eu sou seu pai" />  */}
    </React.Fragment>
    , elemento); 