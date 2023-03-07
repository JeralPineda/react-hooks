import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'Jeral Pineda',
  email: 'jeral@gmail.com',
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      //
      value={user}
    >
      {children}
    </UserContext.Provider>
  );
};
