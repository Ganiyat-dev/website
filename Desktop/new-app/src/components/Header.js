import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <h1> {branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
// function Header() {
//   return (
//     <div>
//       <h1>Contact Manager</h1>
//     </div>
//   );
// }
export default Header;
