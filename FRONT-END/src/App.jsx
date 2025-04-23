
import './App.css'
import AppRoutes from './Routes/Router';
import { UserProvider } from "./utils/UserContext";
import useAutoLogout from "./hooks/useAutoLogout";

function App() {
  useAutoLogout();
  return (
    <>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  )
}

export default App
