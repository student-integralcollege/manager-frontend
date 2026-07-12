
export const googleLogin = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    window.location.href = `${apiUrl}/auth/google/manager`;
};