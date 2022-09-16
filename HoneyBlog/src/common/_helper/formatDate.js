export const formateDateToLocaleString = (date) => {
    const formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
}