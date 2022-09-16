import { useState } from "react";

export const useToggle = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible);
    }
    
    const setVisibleValue = (isVisible) => {
        setVisible(isVisible);
    }

    return { visible, toggle, setVisibleValue };
}