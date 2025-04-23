import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getToken, removeToken } from "../utils/auth";

const useAutoLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (!token) return;

        console.log("Token:", token);

        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decoded.exp < currentTime) {
                removeToken();
                navigate("/login");
            } else {
                const timeUntilLogout = (decoded.exp - currentTime) * 1000;
                setTimeout(() => {
                    removeToken();
                    navigate("/login");
                }, timeUntilLogout);
            }
        } catch (err) {
            removeToken();
            navigate("/login");
        }
    }, []);
};

export default useAutoLogout;
