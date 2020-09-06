import React from 'react';

function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <hr className="my-2" />
    </>
  );
}

Header.defaultProps = {
  title: 'Default',
};

export default Header;
