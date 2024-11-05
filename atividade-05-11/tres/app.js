const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6];

const chunks = _.chunk(array, 2);
console.log('Array em chunks de tamanho 2:', chunks);

const compactArray = _.compact([0, 1, false, 2, '', 3]);
console.log('Array sem valores falsy:', compactArray);

const diff = _.difference([1, 2, 3], [2, 3, 4]);
console.log('Diferença entre [1, 2, 3] e [2, 3, 4]:', diff);
