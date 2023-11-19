
export default function Validation(inputs) {
    const regexName = /^[a-zA-Z]{1,15}$/;
    const regexDificulty = /^[0-9]+$/;
    const regexDuration = /^[0-9]+(\.[0-9]+)?$/;
    const regexSeason = /^[A-Z][a-zA-Z]{4,8}$/;

    const errors = {};

    // Verificar si el nombre está definido y tiene longitud
    if (!inputs.name || typeof inputs.name !== 'string' || inputs.name.length === 0) {
        errors.name = 'Name is required';
    } else {
        if (inputs.name.length > 15) {
            errors.name = 'Name cannot be more than 15 characters';
        } else if (!regexName.test(inputs.name)) {
            errors.name = 'Name is invalid';
        } else {
            errors.name = '';
        }
    }

    // Verificar si la dificultad está definida y es un número
    if (!inputs.difficulty || typeof inputs.difficulty !== 'number') {
        errors.difficulty = 'Difficulty is required';
    } else if (!regexDificulty.test(String(inputs.difficulty))) {
        errors.difficulty = 'Difficulty is invalid';
    } else {
        errors.difficulty = '';
    }

   
    if (!inputs.duration || typeof inputs.duration !== 'number') {
        errors.duration = 'Duration is required';
    } else if (!regexDuration.test(String(inputs.duration))) {
        errors.duration = 'Duration is invalid';
    } else {
        errors.duration = '';
    }

   
    if (!inputs.season || typeof inputs.season !== 'string' || inputs.season.length === 0) {
        errors.season = 'Season is required';
    }
    // } else {
    //     if (inputs.season.length > 9) {
    //         errors.season = 'Season cannot be more than 9 characters';
    //     } else if (!regexSeason.test(inputs.season)) {
    //         errors.season = 'Season is invalid';
    //     } else {
    //         errors.season = '';
    //     }
    // }

    return errors;
}