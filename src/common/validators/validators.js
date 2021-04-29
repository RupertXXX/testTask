export const required = (value) => {
    if (!value) return 'Это поле обязательно';
    else return undefined;
}

export const maxLengthCreator = (length) => {
    return (value) => {
        if(value && value.length > length) return `Максимальная длина ${length}`;
        else return undefined;
    }
}

export const minLengthCreator = (length) => {
    return (value) => {
        if(value && value.length < length) return `Минимальная длина ${length}`;
        else return undefined;
    }
}