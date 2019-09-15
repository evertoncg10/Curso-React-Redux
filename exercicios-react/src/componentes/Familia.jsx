import React from 'react';

    export default props =>
        <div>
        <h2> Família</h2>
            {React.cloneElement(props.children, { ...props })}

            {/* Menos utilizado, o idela é usar o sprad exemplo acima*/}
            {/* {React.cloneElement(props.children, props)} */}

            {/* {React.cloneElement(props.children, 
                { sobrenome: props.sobrenome })} */}
            {/* { props.children } */}
        </div>