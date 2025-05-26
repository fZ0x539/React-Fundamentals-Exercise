export default function Navbar() {
  const navLinks = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Features", href: "#" },
    { id: 3, name: "Pricing", href: "#" },
    { id: 4, name: "Contacts", href: "#" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span style={{ color: "red", fontWeight: "bold" }}>Title</span>
          </a>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              {navLinks.map((link) => (
                <li className="nav-link" key={link.id}>
                  <a className="nav-link" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
