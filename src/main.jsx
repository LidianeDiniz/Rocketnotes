import React from 'react'

import { ReactDOM } from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme  from './styles/theme';
import { createRoot } from 'react-dom/client';
import { AuthProvider  } from './hooks/auth';



import { Routes } from './routes';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<React.StrictMode>
<ThemeProvider theme={theme}>
    <GlobalStyles/>
    <AuthProvider>
    <Routes/>
    </AuthProvider>
    </ThemeProvider>
</React.StrictMode>
);

export {AuthProvider};

