import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';

export default function App() {
	const isAuthenticated = false; // Temporario até implementar autenticação real  
	
	return (
    	<Routes>
      		<Route path="/" element={
        	isAuthenticated ? <Home /> : <Landing />
    	} />
    	</Routes>
  	);
}