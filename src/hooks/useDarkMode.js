import { useEffect, useState }  from "react";

export default function useDarkMode(){
    const [theme,setTheme] = useState("light");
    const colorTheme = theme === "dark" ? "light" : "dark";
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme);
        root.classList.add(colorTheme);
    },[theme,colorTheme])

    return [colorTheme,setTheme];
}