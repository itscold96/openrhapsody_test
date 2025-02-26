import ReactDOM from 'react-dom/client';
import App from './App';
import Providers from './providers/Providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Providers>
    <App />
  </Providers>
);
