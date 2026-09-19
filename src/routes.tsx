import { createBrowserRouter } from 'react-router';
import Root from './components/Root';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'services/:slug', Component: ServiceDetailPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
