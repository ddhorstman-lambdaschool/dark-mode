import useLocalStorage from "./useLocalStorage";
import React from "react";
export default function useDarkMode(initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', !!initialValue);
    React.useEffect(() => {
        const body = document.querySelector('body');
        darkMode
            ? body.classList.add('dark-mode')
            : body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}