import '@testing-library/jest-dom';
import { render as _render } from '@testing-library/react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

export const render = (component) => {
  const queryClient = new QueryClient();

  const element = (
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );

  return _render(element);
};
