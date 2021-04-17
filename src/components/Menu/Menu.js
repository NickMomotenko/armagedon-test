import React from "react";

import styled from "styled-components";

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
`;

const MenuLink = styled.a``;

const Menu = () => {
  const menu = [
    {
      id: 1,
      title: "Астероиды",
      path: "",
    },
    {
      id: 2,
      title: "Уничтожение",
      path: "",
    },
  ];

  return (
    <MenuWrapp>
      <MenuList>
        {menu.map((item) => (
          <MenuItem id={item.id}>
            <MenuLink href="">{item.title}</MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapp>
  );
};

export default Menu;
