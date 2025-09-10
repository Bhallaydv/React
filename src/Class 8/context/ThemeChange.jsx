import React from 'react'
import ThemeProvider from './ThemeProvider';
import ChangeTheme from './ChangeTheme';

const ThemeChange = () => {
    let [theme, setTheme] = useState("light");
    function toggleTheme() {
        setTheme((pre) => { theme === "light" ? "dark" : "light" });
    }


    return (
        <div>
            <ThemeProvider value={{theme, toggleTheme}}>
<ChangeTheme />
            </ThemeProvider>
        </div>
    )
}

export default ThemeChange
