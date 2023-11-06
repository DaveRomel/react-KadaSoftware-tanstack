//Dependencies
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

//Components
import { SearchParams } from './components/SearchParams';
import DetailsWithErrorBoundary from './components/Details';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
		},
	},
});

const App = () => (
		<div>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<header>
						<Link to="/">Adopt Me!</Link>
					</header>
					<Routes>
						<Route path="/" element = {<SearchParams />} />
						<Route path="/details/:id" element = {<DetailsWithErrorBoundary />} />
					</Routes>
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
