const SUCCESS = null;

export const validatePlainTextfield = (value: string): string | null => {
    const regex = /[\d+|\w]$/gm;

    return value !== '' && value !== null 
                ? regex.test(value) ? SUCCESS : 'Special characters are not allowed.'
                : 'This field is required.';
}
