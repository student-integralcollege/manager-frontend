const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ManagerProfile {
    contactNumber: string;
    dob: string;
    role: string;
    gender: "Male" | "Female";
    coordinates: number[];
    city: string;
    state: string;
    country: string;
    pincode: string;
}

export const getBasicProfile = async (managerID: string) => {
    const response = await fetch(
        `${API_URL}/manager/getBasicProfile/${managerID}`,
        {
            method: "GET",
        }
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.status}`);
    }
    return response.json();
};

export const createManagerProfile = async (
    managerID: string,
    profileData: ManagerProfile
) => {
    const response = await fetch(
        `${API_URL}/manager/createManagerProfile/${managerID}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to create profile: ${response.status}`);
    }
    return response.json();
};