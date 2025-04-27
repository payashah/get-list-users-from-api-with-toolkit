import { RootState, Dispatch } from './app/store';
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './features/users/userThunk';

function App() {

  const dispatch = useDispatch<Dispatch>()
  const { users, status, error } = useSelector((state: RootState) => state.users)


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])


  if (status === "loading") {
    return <div>در حال بارگذاری ...</div>
  }

  if (status === "failed") {
    return <div>خطا : {error}</div>
  }








  return (
    <div className="App">
      <h2>لیست ماربران: </h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
