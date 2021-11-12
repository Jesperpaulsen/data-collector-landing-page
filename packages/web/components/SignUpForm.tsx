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
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@gmail.com/g;
    return re.test(email);
  };

  const onEmailChanged = (email: string) => {
    setError(null);
    setEmail(email);
  };

  const sendEmail = async () => {
    const validEmail = checkEmail(email);
    if (!validEmail) {
      setError(
        "Please enter a valid gmail adress (Google Account). If the problems persists, send an email to jespergp@stud.ntnu.no"
      );
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
    <div>
      <div className="border border-t" />
      <div className="flex justify-center">
        <div className="md:p-6 flex flex-col items-center mb-10 max-w-xl">
          <div>{title}</div>
          {!submitted && (
            <div className="text-sm text-center pt-2">{description}</div>
          )}
          {submitted ? (
            <div className="text-center text-green-700">
              Thanks for submitting. You will soon recieve the first survey and
              more information.
            </div>
          ) : (
            <>
              <div className="w-64 md:w-96 pt-4">
                <Input
                  onChange={onEmailChanged}
                  placeholder="Enter the email of your Google Account"
                  type="email"
                />
              </div>
              <div className="pt-4">
                <Button onClick={sendEmail}>Sign up</Button>
              </div>
            </>
          )}
          {error && <div className="text-sm text-red-800 pt-2">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
