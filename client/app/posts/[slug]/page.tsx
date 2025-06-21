'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';
import SinglePost from '@/components/SinglePost';

export default function PostPage() {
  return (
    <ApolloProvider client={client}>
      {/* <Navbar /> */}
      <SinglePost />;
    </ApolloProvider>
  )
}