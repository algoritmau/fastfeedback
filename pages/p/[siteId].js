import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import Feedback from '@/components/Feedback';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const feedback = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = ({ initialFeedback }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      width='full'
      maxWidth='700px'
      margin='0 auto'
    >
      <FormControl id='comment' my={8}>
        <FormLabel htmlFor='comment'>Comment</FormLabel>
        <Input type='comment' id='comment' mb={4} />
        <Button type='submit' fontWeight='medium'>
          Add Comment
        </Button>
      </FormControl>
      {initialFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export default SiteFeedback;
