import Head from 'next/head';
import { AuthProvider } from '@/lib/auth';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '@/styles/customTheme';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={customTheme} resetCSS={true}>
    <AuthProvider>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  </ChakraProvider>
);

export default App;
