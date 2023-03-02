import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h3 className="mb-5">Contact us</h3>
      {/* action will fire on submit. React router dom will try to find the action function inside "createRoutesFromElements" at the url specified in action */}
      <Form method="post" action="/help/contact">
        <label htmlFor="name" className="form-label">Name</label>
        <input className="form-input" type="text" name="name" id="name" />

        <label htmlFor="email" className="form-label">Email</label>
        <input className="form-input" type="email" name="email" id="email" />

        <button type="submit">Submit</button>
      </Form>
    </>
  )
}

export async function ContactAction({ request }: { request: Request }) {
  const data = await request.formData();
  console.log(data);
}
