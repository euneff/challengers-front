import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import UserMenu from './UserMenu';
import styles from './Nav.module.css';

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? 'underline' : '',
  };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
        </Link>
        <ul className={styles.menu}>

          <li>
            <NavLink style={getLinkStyle} to="/cardlist">
              도전목록
            </NavLink>
          </li>
          {/* <li>
            <NavLink style={getLinkStyle} to="/challenge">
              도전
            </NavLink>
          </li> */}
          
          <li>
            <NavLink style={getLinkStyle} to="/commu">
              게시판
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
