import { Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h1>Website help</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio veniam alias. Hic earum, dicta possimus soluta ad natus magni. Quas, corrupti? Vero eligendi, eius excepturi nisi iure doloribus deleniti.</p>
      <div className="help-layout-outlet">
        <Outlet />
      </div>
    </div>
  )
}
