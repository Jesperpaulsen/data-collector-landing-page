import { ISignUpForm } from "../types/SignUpForm";
import Input from "./Input";
import Button from "./button/Button";
const SignUpForm: React.FC<ISignUpForm> = ({ title, description }) => {
  return (
    <div className="border p-4 md:p-6 rounded-lg flex flex-col items-center">
      <div>{title}</div>
      <div className="text-sm">{description}</div>
      <div className="w-72 md:w-96 pt-4">
        <Input
          onChange={(e) => console.log(e)}
          placeholder="Enter your email"
        />
      </div>
      <div className="pt-4">
        <Button onClick={() => null}>Sign up</Button>
      </div>
    </div>
  );
};

export default SignUpForm;
