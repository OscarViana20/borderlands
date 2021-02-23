/*Permite validar un valor y retorna otro si no cumple la condicion indicada*/
function validateCode(code, otherValue) {
    if (code === null) {
        return otherValue;
    }
    return code;
}

/*Verifica si un array contiene el elemento buscado en alguna de sus posiciones*/
function containElement(arrayData, element) {
    for (let i in arrayData) {
        if (arrayData[i] === element) {
            return true;
        }
    }
    return false;
}
