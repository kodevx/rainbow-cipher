const SUCCESS = null;

export const validateTextfield = (value: string | null): string | null => {
    return value !== '' && value !== null ? SUCCESS : 'This field is required.';
}
