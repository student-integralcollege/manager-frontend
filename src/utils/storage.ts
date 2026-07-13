const USER_ID_KEY = "userID";
const ACC_CREATED_KEY = "accCreated";

export const saveUserID = (userID: string) => {
  localStorage.setItem(USER_ID_KEY, userID);
};

export const getUserID = () => {
  return localStorage.getItem(USER_ID_KEY);
};

export const saveAccCreated = (accCreated: number) => {
  localStorage.setItem(
    ACC_CREATED_KEY,
    String(accCreated)
  );
};

export const getAccCreated = () => {
  return localStorage.getItem(ACC_CREATED_KEY);
};

export const clearAuthStorage = () => {
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(ACC_CREATED_KEY);
};