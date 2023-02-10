import {NavLink} from "react-router-dom";

import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/generator"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Image Generator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Chat With Ai
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
