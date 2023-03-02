import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/help/FAQ";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
// layouts
import RootLayout from  "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Thanks from "./pages/help/Thanks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* nesting another route to persist the <RootLayout /> when an error is thrown */}
      <Route path="/" errorElement={<Error />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} action={contactAction} />
        </Route>

        <Route path="careers">
          <Route
            index
            element={<Careers />}
            loader={careersLoader}
          />
          <Route
            path=":careerId"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>

        <Route path="thank-you" element={<Thanks />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
