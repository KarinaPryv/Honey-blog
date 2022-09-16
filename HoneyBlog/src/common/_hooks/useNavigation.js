import { useNavigate } from "react-router-dom"

export const useNavigation = () => {
    const navigate = useNavigate();

    const navigateToPreviousPage = () => {
        navigate(-1);
    }

    return navigateToPreviousPage;
}