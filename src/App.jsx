import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<h1>Lorem ipsum dolor sit amet.</h1>} />
        <Route path="contact" element={<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fuga.</h1>} />
      </Route>
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
