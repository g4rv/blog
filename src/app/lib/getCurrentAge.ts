export const getCurrentAge = () => {
    const myBirthDate = new Date('2000-10-20')
    const currentDate = new Date()
    const PER_YEAR_FORMULA = 3.1556926 * Math.pow(10, 10)

    return Math.floor((currentDate.getTime() - myBirthDate.getTime()) / PER_YEAR_FORMULA);
};
