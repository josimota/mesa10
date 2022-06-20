let array1 = ['Paulo', 'Fernanda', 'Fabio'];
console.log(array1[1]);

//B . Modificar cada um dos elementos de um array e imprimi-los no console.

let array2 = ['Banana', 'Maçã', 'Uva'];
array2[0] = 'Laranja';
array2[1] = 'Pera';
array2[2] = 'Morango';
console.log(array2);

// C. Adicionar elementos a um array.

let array3 = ['Roxo', 'Azul', 'Vermelho'];
array3.push('Verde', 'Amarelo');
console.log(array3);

// D. Extrair elementos de um array.

let array4 = ['Netflix', 'Disney Plus', 'HBO Max'];
console.log(array4.shift());

// E. Comparar elementos de um array com os elementos de outro.

let array5 = [10, 20, 30];
let array6 = [40, 50, 60];

if ((array5[0] && array5[1] && array5[2]) == (array6[0] && array6[1] && array6[2])) {
    console.log(true);
} else {
    console.log(false);
};