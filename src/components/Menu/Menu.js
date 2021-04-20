import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

const MenuWrapp = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }

  a {
    font-weight: ${({ activeId, currentId }) =>
      activeId === currentId ? "700" : "400"};

    border-color: ${({ activeId, currentId }) =>
      activeId === currentId ? "transparent" : "#000000"};
  }
`;

const MenuLink = styled(Link)`
  color: #000000;
  border-bottom: 1px solid;
`;

const menu = [
  {
    id: 1,
    title: "Астероиды",
    path: "/",
  },
  {
    id: 3,
    title: "Уничтожение",
    path: "/destriction",
  },
];

const Menu = () => {
  const [activeItem, setActiveItem] = useState(menu[0]);

  const handleChangeActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <MenuWrapp>
      <MenuList>
        {menu.map((item) => (
          <MenuItem key={item.id} activeId={activeItem.id} currentId={item.id}>
            <MenuLink to={item.path} onClick={() => handleChangeActiveItem(item)}>
              {item.title}
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapp>
  );
};

export default Menu;
