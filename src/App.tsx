// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { FC } from 'react';
import './styles/App.scss';

const users = [
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve Ortega',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalves',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
  {
    cid: 1020479637,
    username: 'mmonsalve',
    name: 'Mateo',
    lastname: 'Monsalve',
    transactions: [
      'TEST1', 'TEST2', 'TEST3', 'TEST4',
    ],
  },
];

const App: FC = () => (
  <div>
    <h1>Segregation App</h1>
    <hr />

    <div className="segregation_table">
      <div className="table_row table_title">
        <h3>
          Cedula de ciudadanía
          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </h3>
        <h3>
          Nombre de usuario
          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </h3>
        <h3>
          Nombre
          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </h3>
        <h3>
          Apellidos
          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </h3>
        <h3>
          Transacciones
          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </h3>
      </div>

      {users.map((user) => (
        <div
          className="table_row table_cell"
          key={user.cid}
        >
          <p>{user.cid}</p>
          <p>{user.username}</p>
          <p>{user.name}</p>
          <p>{user.lastname}</p>
          <p>{user.transactions.join(', ')}</p>
        </div>
      ))}
    </div>
  </div>
);

export default App;
