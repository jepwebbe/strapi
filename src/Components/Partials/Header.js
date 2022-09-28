import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="strapi">Strapi</Link>
      </li>
    </ul>
  );
};

export default Header;
