import { Flex } from '@radix-ui/themes';
// import Dashboard from '../pages/dashboard/dashboard';
// import Navbar from '../components/navbar/navbar';
import Login from '../pages/login/login.tsx';

function App() {
  return (
    <>
      <Flex direction={"column"} style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}>
        <Login />
      </Flex>
    </>
  )
}

export default App;
