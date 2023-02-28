import { Outlet, NavLink } from "react-router-dom"

export default function HelpLayout() {
  return (
    <>
      <h2>Website help</h2>
      <ul className="navbar-links mb-5">
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </ul>
      <Outlet />
    </>
  )
}
