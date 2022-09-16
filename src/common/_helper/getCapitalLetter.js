export const getCapitalLetter = (sentence) => {
    if (sentence) {
        return sentence.charAt(0).toUpperCase();
    } else {
        return 'A';
    }
}