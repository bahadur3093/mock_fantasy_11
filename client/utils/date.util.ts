export const getFormatedDate = (date: Date | string): string => {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(parsedDate.getDate()).padStart(2, '0');

    return `${day}-${month}-${year}`;
};