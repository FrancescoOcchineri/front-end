
import { useState, useEffect } from 'react';
const Fetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0]);
        setUsers(data);
      });
  }, []);
  return (
<div>
<p>{users[0].name}</p>
</div>
  );
};
export default Fetch;