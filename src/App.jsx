import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/Router'
import useAuthCheck from './hooks/useAuthCheck';

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? <p></p> : (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
