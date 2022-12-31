import { useEffect, useState } from 'react';

const useToken = (user) => {

    const [token, setToken] = useState("");

    useEffect(() => {

        const name = user?.user?.displayName;
        const email = user?._tokenResponse?.email;
        const uid = user?.user?.uid;
        const currentUser = { name: name, email: email, uid: uid };

        if (email) {
            fetch(`https://stroyka-server-side.onrender.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken);
                })
        }
    }, [user])

    return [token]
};

export default useToken;