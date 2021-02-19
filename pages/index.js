import { useAuth } from '@/lib/auth';
import { Button, Flex } from '@chakra-ui/react';
import Logo from '@/components/Logo';
import EmptyState from '@/components/EmptyState';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as='main'
      direction='column'
      align='center'
      justify='center'
      minH='100vh'
      padding='32px 0'
    >
      {auth.user ? (
        <EmptyState />
      ) : (
        // <Button size='md' onClick={() => auth.signout()}>
        //   Sign Out
        // </Button>
        <>
          <Logo size='64px' />
          <Button size='sm' mt={4} onClick={() => auth.signInWithGithub()}>
            Sign In
          </Button>
        </>
      )}
    </Flex>
  );
};

export default Home;
