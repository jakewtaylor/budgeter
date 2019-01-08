export const classNames = (...classNames) => {
    return classNames.filter(n => n).join(' ');
}
