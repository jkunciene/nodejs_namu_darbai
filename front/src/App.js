import { Container } from 'react-bootstrap';
import './App.css';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';

function App() {
  return (
    <Container>
      <Transactions/>
      <NewTransaction/>
    </Container>
  );
}

export default App;
