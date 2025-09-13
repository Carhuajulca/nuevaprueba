import React from 'react';

type SumaProps = {
    a: number;
    b: number;
};

const suma = (a: number, b: number): number => {
    return a + b;
};

const Suma: React.FC<SumaProps> = ({ a, b }) => {
    return (
        <div>
            La suma de {a} y {b} es {suma(a, b)}
        </div>
    );
};

export default Suma;