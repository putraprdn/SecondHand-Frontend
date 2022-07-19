
export const checkUserData = (userData) => {
    const isComplete = Object.values(userData).includes(null) ? false : true;
    return isComplete;
}