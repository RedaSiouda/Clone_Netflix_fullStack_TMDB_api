import { render } from 'react-dom';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../src/CSS/index.css';

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
