import { Form, redirect, useActionData, useNavigate } from "react-router-dom";

export default function Contact() {
  interface IActionData { error: string };
  const actionData = useActionData() as IActionData;
  console.log(actionData);

  return (
    <>
      <h3 className="mb-5">Contact us</h3>
      {/* action will fire on submit. React router dom will try to find the action function inside "createRoutesFromElements" at the url specified in action */}
      <Form method="post" action="/help/contact">
        <label htmlFor="name" className="form-label">Name</label>
        <input className="form-input" type="text" name="name" id="name" />

        <label htmlFor="email" className="form-label">Email</label>
        <input className="form-input" type="email" name="email" id="email" />

        {
          actionData?.error && (
              <div className="form-error">{actionData.error}</div>
          )
        }
        <button type="submit">Submit</button>

      </Form>
    </>
  )
}

export async function contactAction({ request }: { request: Request }) {
  const dataGetter = await request.formData();
  const data = {
    name: dataGetter.get("name"),
    email: dataGetter.get("email")
  }

  // send to DB etc...

  // example validation. Returned error object are accessible in "Contact" through "useActionData" hook
  for (const key in data) {
    const val = data[key as keyof typeof data];
    if (!val) {
      return { error: "Form not filled out entirely" };
    }
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(data.email as string)) {
    return { error: "Incorrect email" };
  }

  return redirect("/thank-you");
}
