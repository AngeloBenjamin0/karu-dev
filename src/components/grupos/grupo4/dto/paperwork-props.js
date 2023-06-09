/*eslint-disable */
export const inputs = [
  {
    id: 1,
    name: 'plate',
    type: 'text',
    title: 'Patente',
    placeholder: 'Ingresar Patente',
    required: true,
    errorMessage:
    '¡Las letras de la patente deben estar en mayuscula, se escribe sin espacios ni guiones, el tamaño es de 6 o 7 caracteres!',
    pattern: '^[A-Z0-9]{6,7}$',
  },
  {
    id: 2,
    name: 'debt',
    type: 'number',
    title: 'Deudas',
    placeholder: 'Valor de Deudas',
    required: true,
  },
  {
    id: 3,
    name: 'infractions',
    type: 'select',
    title: 'Infracciones',
    placeholder: 'Infracciones',
    required: true,
  },
  {
    id: 4,
    name: 'vpa',
    type: 'select',
    title: 'vpa',
    placeholder: 'vpa',
    required: true,
  },
  {
    id: 5,
    name: 'rva',
    type: 'select',
    title: 'rva',
    placeholder: 'rva',
    required: true,
  },
  {
    id: 6,
    name: 'vtv',
    type: 'select',
    title: 'vtv',
    placeholder: 'vtv',
    required: true,
  },
];
