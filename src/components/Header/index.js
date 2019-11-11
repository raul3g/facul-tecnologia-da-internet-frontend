import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "../../store/modules/auth/actions";

export default function Header() {
  const dispatch = useDispatch();

  function handleExit() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="GoBarber"
          />
          <Link to="/home">HOME</Link>
          <Link to="/product">PRODUCTS</Link>
        </nav>

        <aside>
          <Profile>
            <strong>Name</strong>

            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Raul Silva"
            />
            <Link to="/" onClick={handleExit}>
              <FaSignOutAlt color="red" size={24} />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
