
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#00acc1'
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#ffcc80'
            // dark: will be calculated from palette.secondary.main,
            //  contrastText: '#ffcc00',
        },
        muted: {
            main: '#aaa'
        },

        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
        background: {
            paper: '#f4f4f4'
        },
        fontFamily: 'Roboto, "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif'
    }
})
