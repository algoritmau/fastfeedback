import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import Link from 'next/link';
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
                <Link href='/feedback'>View Feedback</Link>
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
