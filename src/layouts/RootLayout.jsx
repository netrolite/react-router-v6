import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-items">
            <h1>Job Router</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
