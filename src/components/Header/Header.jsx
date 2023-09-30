import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/quizzes">Quizzes List</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create new quiz</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
