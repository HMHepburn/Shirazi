export interface Theme {
    name: string;
    properties: any;
    }
    export const theme1: Theme = {
     name: 'theme1',
     properties: {
      '--background-color': '#FFFFFF',
      '--color-option-1': '#F2F2F2',
      '--color-option-2': '#e9c46a',
      '--color-option-3': '#f4a261',
      '--color-option-4': '#e76f51',
      '--text-color': 'black',
      '--button-background': 'var(--color-option-3)',
      '--nav-bar': '#F2F2F2'
     },
    };
    export const theme2: Theme = {
     name: 'theme2',
     properties: {
      '--background-color': '#2F0315',
      '--color-option-1': '#f1faee',
      '--color-option-2': '#a8dadc',
      '--color-option-3': '#457b9d',
      '--color-option-4': '#1d3557',
      '--text-color': 'white',
      '--button-background': 'var(--color-option-3)',
     },
    };
    export const theme3: Theme = {
     name: 'theme3',
     properties: {
      '--background-color': '#181818',
      '--color-option-1': '#FF1276',
      '--color-option-2': '#ffe8d6',
      '--color-option-3': '#b7b7a4',
      '--color-option-4': '#a5a58d',
      '--text-color': 'white',
      '--button-background': 'var(--color-option-3)',
      '--nav-bar': 'linear-gradient(90deg, rgba(255,18,118,1) 0%, rgba(19,156,115,1) 100%)'
     },
    };
    export const theme4: Theme = {
        name: 'theme4',
        properties: {
         '--background-color': '#052B1F',
         '--color-option-1': '#ddbea9',
         '--color-option-2': '#ffe8d6',
         '--color-option-3': '#b7b7a4',
         '--color-option-4': '#a5a58d',
         '--text-color': 'white',
         '--button-background': 'var(--color-option-3)',
        },
       };