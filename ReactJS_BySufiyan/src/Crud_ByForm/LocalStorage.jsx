const saveToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const loadFromLocalStorage = () => {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : [];
};

// Inside your useState initialization:
const [usersList, setUsersList] = useState(loadFromLocalStorage());

// After any change (Add/Edit/Delete), update localStorage:
useEffect(() => {
  saveToLocalStorage(usersList);
}, [usersList]);
