import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class TestComponent extends React.Component {
    render() {
        return (
            <ThemeToggler>
                <label>
                    <input
                    type = "checkbox"
                    onChange={e => toggleTheme(e.target.checked ? 'light' : 'dark')}
                    checked={theme == 'dark'}
                    />{' '}
                    Dark Mode
                </label>
            </ThemeToggler>
        )
    }
}

// function getInitialColorMode() {
//     const persistedColorPreference = window.localStorage.getItem('color-mode');
//     const hasPersistedPreference = typeof persistedColorPreference === 'string';

//     // User check
//     if (hasPersistedPreference) {
//         return persistedColorPreference;
//     }

//     const mql = window.matchMedia('(prefer-color-scheme: light)');
//     const hasMediaQueryPreference = typeof mql.matches === 'boolean';

//     if (hasMediaQueryPreference) {
//         return mql.matches ? 'light' : 'dark';
//     }

//     // Unsupported browsers
//     return 'light';
// }

// export const ThemeContext = React.createContext();
// export const ThemeProvider = ({ children }) => {
//     const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode);

//     const setColorMode = (value) => {
//         rawSetColorMode(value);

//         // Persist on update code
//         window.localStorage.setItem('color-mode', value);
//     };

//     retun (
//         <ThemeContext.Provider value = {{ colorMode, setColorMode}}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };
function toggleTheme(colorMode) {
    if (colorMode === 'light') {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
}