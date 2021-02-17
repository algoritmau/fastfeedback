import { AuthProvider } from '@/lib/auth';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '@/styles/customTheme';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={customTheme} resetCSS={true}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </ChakraProvider>
);

export default App;
