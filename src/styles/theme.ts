import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        primary: {
            "50": "#F5F8FA",
            "100": "#FFBA08",
            "200": "#47585B",
            "300": "#DADADA",
            "400": "#999999",
        },
    },

    styles: {
        global: {
            body: {
                fontFamily: 'Poppins',
                heading: 'Poppins',
                bg: "primary.50",
                color: 'primary.200',
            },
        },
    },
})