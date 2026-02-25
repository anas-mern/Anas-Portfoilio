import { NavLink } from "react-bootstrap";
export default function NavBar({ links }) {
  return (
    <nav className="bg-black d-flex p-3 gap-4 border-1 border-bottom">
      <img src="./logo.jpg" className="rounded-circle logo" alt="Logo" />
      <div className="d-flex gap-3 flex-grow-1 justify-content-around align-items-center">
        {links.map((l) => (
          <NavLink key={l} href={`#${l.toLowerCase().replace(' ','-')}`} className="text-white">
            {l}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
