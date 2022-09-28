import { useCallback } from "react";
import styled from "styled-components"
import { UiToggle } from "../../Styles/UiToggle.Styled";
import { useDarkmodeStore } from "./useDarkmodeStore"

export const ThemeToggler = styled.div`
display: flex;
align-items: center;
position: fixed;
top: 5px;
right: 5px;
z-index: 1000;
`

export const Toggler = () => {
    const { theme, setTheme } = useDarkmodeStore();

    const changeTheme = useCallback(() => {
        let change = theme === "dark" ? "light" : "dark";
        setTheme(change)
    }, [theme, setTheme])
    return (
        <>
        {    console.log(theme)
}
            <ThemeToggler>
                <span>
                    🔆
                </span>
                <div>
                    <UiToggle>
                        <input type="checkbox" id="darkmode" checked={theme === "dark"} onChange={() => changeTheme()} />
                        <label htmlFor="darkmode">
                            <div></div>
                        </label>
                    </UiToggle>
                </div>
                <span>
                    🌒
                </span>
            </ThemeToggler>
        </>
    )
}