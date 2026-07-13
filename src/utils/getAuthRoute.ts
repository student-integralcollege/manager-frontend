export const getAuthRoute = (userID: string | null, accCreated: string | null) => {
    if (!userID) {
        return "/login";
    }

    if (accCreated === "0") {
        return "/create-profile";
    }

    if (accCreated === "1") {
        return "/dashboard";
    }

    return "/login";
};