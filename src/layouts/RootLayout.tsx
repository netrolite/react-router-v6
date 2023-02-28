import { Outlet, NavLink } from "react-router-dom"

export default function RootLayout() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-items">
            <h1 className="text-logo">Job Router</h1>
            <div className="navbar-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="careers">Careers</NavLink>
              <NavLink to="help">Help</NavLink>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
