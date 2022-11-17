import { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import AppContext from './context/AppContext';

const Lists = lazy(() => import('./pages/Lists'));
const ListDetail = lazy(() => import('./pages/ListDetail'));
const ListForm = lazy(() => import('./pages/ListForm'));

const GlobalStyle = {
  margin: "0",
  padding: "0",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  ebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
}

function App() {
  return (
    <div style={GlobalStyle}>
      <div style={{textAlign: "center"}}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <AppContext>
              <Routes>
                <Route path='/' element={<Lists />} />
                <Route path='/list/:listId/new' element={<ListForm />} />
                <Route path='/list/:listId' element={<ListDetail />} />
              </Routes>
            </AppContext>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;