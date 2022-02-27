import React from 'react';
//import classes from './UserList.module.css';
import Card from './UI/Card';

const UserList = (props) => {
 
    return(
        <Card >
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}{" - "} {user.email} {" - "}{user.message}
          </li>
        ))}
      </ul>
    </Card>
    );

};

export default React.memo(UserList);