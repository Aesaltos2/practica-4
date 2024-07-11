import { useEffect, useState } from 'react';
import './App.css';
import UserList from './assets/components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const rs = await fetch('https://jsonplaceholder.typicode.com/users '); // Asegúrate de que la URL sea correcta
    const rsJson = await rs.json();
    setUsers(rsJson);

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;