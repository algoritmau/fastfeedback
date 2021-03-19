import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import NextLink from 'next/link';
import { format, parseISO } from 'date-fns';

const SideTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => {
          const simpleUrl = site.url.split('').splice(8).join('');

          return (
            <Box as='tr' key={site.id}>
              <Td fontWeight='medium'>{site.name}</Td>
              <Td>
                <a href={site.url} target='_blank' rel='noreferrer'>
                  {simpleUrl}
                </a>
              </Td>
              <Td>
                <NextLink href='/p/[siteId]' as={`/p/${site.id}`} passHref>
                  <Link>View Feedback</Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.createdAt), 'PP')}</Td>
            </Box>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SideTable;
