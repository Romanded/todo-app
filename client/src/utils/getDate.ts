export const getDate = () => {
    let today : Date | string = new Date();
    let dd: string = String(today.getDate()).padStart(2, '0');
    let mm: string = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy: number = today.getFullYear();

    today = mm + '.' + dd + '.' + yyyy;
    return today
}