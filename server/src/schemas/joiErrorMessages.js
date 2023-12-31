// Configuracion de mensajes de error para Joi.
const joiErrorMessages = {
    'any.required': 'El campo "{#key}" es requerido',
    'number.base': 'El valor de "{#key}" debe ser un número',
    'number.integer': 'El valor de "{#key}" debe ser un número entero',
    'number.min': 'El valor de "{#key}" debe ser mayor o igual a 1',
    'object.base': 'El valor de "{#key}" debe ser un objeto',
    'object.unknown': 'No se permiten campos adicionales en este objeto',
    'string.base': 'El valor de "{#key}" debe ser una cadena',
    'string.email':
        'Debe proporcionar un correo electrónico válido para "{#key}"',
    'string.empty': 'El campo "{#key}" no debe estar vacío',
    'string.max': 'El campo "{#key}" no debe exceder los {#limit} caracteres',
    'string.min': 'El campo "{#key}" debe tener al menos {#limit} caracteres',
    'string.pattern.base':
        'La contraseña debe contener al menos una mayúscula, una minúscula, un número y un símbolo de puntuación para "{#key}"',
};

module.exports = joiErrorMessages;
