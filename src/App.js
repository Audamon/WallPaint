import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
