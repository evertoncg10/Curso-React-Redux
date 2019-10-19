import React from 'react';
import PageHeader from '../template/pageHeader';

export default props => (
    <div>
        <PageHeader name="Sobre" small="Nós"></PageHeader>
        <h2>Nossa História</h2>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
        </p>

        <h2>Missão e Visão</h2>
        <p>
            It is a long established fact that a reader will be distracted by the readable content of a 
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable English.
        </p>

        <h2>Imprensa</h2>
        <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
            classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
    </div>
);
