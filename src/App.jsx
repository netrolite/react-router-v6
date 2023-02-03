import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
// components
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/help/FAQ";
import Contact from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import NotFound from "./pages/NotFound";
// layouts
import RootLayout from  "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers">
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":careerId" element={<CareerDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
