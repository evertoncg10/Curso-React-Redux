import React from 'react';
import { filhosComProps } from '../utils/utils';

    export default props =>
        <div>
        <h2> Família</h2>
            { filhosComProps(props) }
            
            {/* {React.children.map(props.children, filho => {
                return React.cloneElement(filho, { ...props })
            })}; */}

            {/* {React.cloneElement(props.children, { ...props })} */}

            {/* Menos utilizado, o idela é usar o sprad exemplo acima*/}
            {/* {React.cloneElement(props.children, props)} */}

            {/* {React.cloneElement(props.children, 
                { sobrenome: props.sobrenome })} */}
            {/* { props.children } */}
        </div>