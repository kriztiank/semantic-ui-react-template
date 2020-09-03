import React from "react";
import { Menu } from "semantic-ui-react";

function NavigationBar() {
  return (
    <Menu pointing secondary>
      <Menu.Item icon="home" name="home" href="/somelink" />
      <Menu.Item icon="box" name="posts" href="/somelink" />
      <Menu.Item icon="address book" name="contact" href="/somelink" />
    </Menu>
  );
}

export default NavigationBar;
