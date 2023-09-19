import React, { useState, useEffect } from 'react';
import Login from './Login';
import Chat from './Chat';
import client from './feathers';

const messagesService = client.service('messages');
const usersService = client.service('users');

const Application = props => {
  const [login, setLogin] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    client.authenticate().catch(() => {
      setLogin(null);
    });
    const onAutheticated = loginResult => {
      // Get all users and messages
      Promise.all([
        messagesService.find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 25,
          },
        }),
        usersService.find(),
      ]).then(([messagePage, userPage]) => {
        // We want the latest messages but in the reversed order
        const messagesResult = messagePage.data.reverse();
        const usersResult = userPage.data;

        // Once both return, update the state
        setLogin(loginResult);
        setMessages(messagesResult);
        setUsers(usersResult);
      });
    };
    const onLogout = () => {
      setLogin(null);
      setMessages([]);
      setUsers([]);
    };
    client.on('authenticated', onAutheticated);
    client.on('logout', onLogout);
    return () => {
      client.removeListener('authenticated', onAutheticated);
      client.removeListener('logout', onLogout);
    };
  });

  useEffect(() => {
    const addNewMessages = message =>
      setMessages(currentMessages => currentMessages.concat(message));
    const addNewUsers = user =>
      setUsers(currentUsers => currentUsers.concat(user));
    const resetUsers = user =>
      setUsers(currentUsers =>
        currentUsers.map(u => (u._id === user._id ? user : u))
      );
    messagesService.on('created', addNewMessages);
    usersService.on('created', addNewUsers);
    usersService.on('patched', resetUsers);
    return () => {
      messagesService.removeListener('logout', addNewMessages);
      usersService.removeListener('created', addNewUsers);
      usersService.removeListener('patched', resetUsers);
    };
  }, []);

  if (login === undefined) {
    return (
      <main className="container text-center">
        <h1>Loading...</h1>
      </main>
    );
  } else if (login) {
    return <Chat messages={messages} users={users} />;
  }

  return <Login />;
};

export default Application;
