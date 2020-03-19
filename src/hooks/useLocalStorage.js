import React from "react";
export default function useLocalStorage(key, initialValue) {
    if (!initialValue) initialValue = "";
    if (typeof initialValue !== "string") initialValue = JSON.stringify(initialValue);
    const [value, setValue] = React.useState(() => JSON.parse(window.localStorage?.getItem(key)||initialValue));
    const setValueLocalStorage = (newValue) => {
        setValue(newValue);
        window.localStorage?.setItem(key, JSON.stringify(newValue));
    };
    return [value, setValueLocalStorage];
}