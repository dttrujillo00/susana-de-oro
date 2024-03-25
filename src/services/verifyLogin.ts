import { User } from "../interfaces/user";

export const verifylogin = async (data: User) => {
    const response = await fetch('https://server-susana-de-oro.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    const jsonresponse = await response.json();

    return jsonresponse;
}