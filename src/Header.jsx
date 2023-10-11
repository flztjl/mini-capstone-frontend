import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">All products</Link>
        <Link to="/new products">New products</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <LogoutLink />
      </nav>
    </header>
  );
}
