import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
            end
          >
            Home Page
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/algetharsacademy"
          >
            Algethar's Academy
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/brackenhidehallow"
          >
            Brackenhide Hallow
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/hallsofinfusion"
          >
            Halls of Infusion
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/neltharus"
          >
            Neltharus
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/rubylifepools"
          >
            Ruby Life Pools
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/theazurevault"
          >
            The Azure Vault
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/thenokhudoffensive"
          >
            The Nokhud Offensive
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/uldamanlegacyoftyr"
          >
            Uldaman: Legacy of Tyr
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
