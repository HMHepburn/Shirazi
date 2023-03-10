export interface Theme {
    name: string;
    properties: any;
    }
    export const lightTheme: Theme = {
     name: 'darkTheme',
     properties: {
      '--background-color': '#FFFFFF',
      '--inverse-background': '#181818',
      '--color-option-1': '#F2F2F2',
      '--color-option-2': '#DDDDDD',
      '--color-option-3': '#CBCBCB',
      '--color-option-4': '#818181',
      '--color-option-5': '#343434',
      '--text-color': 'black',
      '--button-background': 'var(--color-option-3)',
      '--nav-bar': 'linear-gradient(90deg, #FFDAE9 0%, #CAE7DE 30%, #FFDAE9 70%, #CAE7DE 100%)'
     },
    };
    export const darkTheme: Theme = {
     name: 'darkTheme',
     properties: {
      '--background-color': '#181818',
      '--inverse-background': '#FFFFFF',
      '--color-option-1': '#343434',
      '--color-option-2': '#818181',
      '--color-option-3': '#CBCBCB',
      '--color-option-4': '#DDDDDD',
      '--color-option-5': '#F2F2F2',
      '--text-color': 'white',
      '--button-background': 'var(--color-option-3)',
      '--nav-bar': 'linear-gradient(90deg, rgba(255,18,118,1) 0%, rgba(19,156,115,1) 30%, rgba(255,18,118,1) 70%, rgba(19,156,115,1) 100%)'
     },
    };