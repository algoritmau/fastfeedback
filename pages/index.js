import { useAuth } from '@/lib/auth';
import { Button, Code, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <main>
        <Heading as='h1' size='2xl'>
          Fast Feedback
        </Heading>
        <Text fontSize='md'>
          Current user: <Code children={auth.user ? auth.user.email : 'None'} />
        </Text>
        {auth.user ? (
          <Button size='md' onClick={() => auth.signout()}>
            Sign Out
          </Button>
        ) : (
          <Button size='md' onClick={() => auth.signInWithGithub()}>
            Sign In
          </Button>
        )}
      </main>
    </div>
  );
};

export default Home;
