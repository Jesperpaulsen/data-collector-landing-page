import { ISignUpForm } from "../types/ISignUpForm";
import Input from "./Input";
import Button from "./button/Button";
import { useState } from "react";
const SignUpForm: React.FC<ISignUpForm> = ({ title, description }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string>();

  const checkEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const onEmailChanged = (email: string) => {
    setError(null);
    setEmail(email);
  };

  const sendEmail = async () => {
    const validEmail = checkEmail(email);
    if (!validEmail) {
      setError("Please enter a valid email");
      return;
    }
    try {
      const res = await fetch(
        "https://data-collector-ff33b.ew.r.appspot.com/users/sign-up",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        const error = await res.json();
        setError(
          error.errors
            ?.map((error) => `${error.field}: ${error.message}`)
            .join(", ")
        );
        return;
      }
      setSubmitted(true);
      setError(null);
    } catch (e) {
      setError("Something strange happened");
    }
  };

  return (
    <div className="border p-4 md:p-6 rounded-lg flex flex-col items-center">
      <div>{title}</div>
      <div className="text-sm">{description}</div>
      {submitted ? (
        <div>Thanks for submitting</div>
      ) : (
        <>
          <div className="w-72 md:w-96 pt-4">
            <Input onChange={onEmailChanged} placeholder="Enter your email" />
          </div>
          <div className="pt-4">
            <Button onClick={sendEmail}>Sign up</Button>
          </div>
        </>
      )}
      {error && <div className="text-sm text-red-800">{error}</div>}
    </div>
  );
};

export default SignUpForm;
