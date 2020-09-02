import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";

const Nav = ({ name, author }) => {
  return (
    <Segment padded="very">
      <Header as="h1">This is the {name} header</Header>
      <Image centered src={"logo192.png"} size={"tiny"} />
      <Header as="h3">Author: {author} </Header>
    </Segment>
  );
};

export default Nav;
