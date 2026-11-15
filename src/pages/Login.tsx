import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter (A-Z)",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter (a-z)",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one digit (0-9)",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const defaultValues: LoginFormData = {
  email: "test@example.com",
  password: "",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<LoginFormData>({
    defaultValues,
    resolver: zodResolver(loginSchema),
  });

  const formValues = getValues();
  const watchValues = watch();

  const submitForm = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <section>
      <h1 className="h3 fw-bold mb-1">Login</h1>
      <p className="text-muted mb-4">Enter your credentials to continue.</p>

      {/* Login form goes here */}
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <div className="form-field">
          <label className="form-label">Email address</label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="fieldText"
            placeholder="name@example.com"
          />
          <div className="form-text">
            We’ll never share your email with anyone else.
          </div>
        </div>
        {errors.email && (
          <div className="alert alert-danger mt-2">{errors.email.message}</div>
        )}
        <div className="form-field mt-4">
          <label className="form-label">Password</label>
          <input
            {...register("password")}
            type="password"
            className="form-control"
            id="fieldPassword"
            placeholder="••••••••"
          />
          {errors.password && (
            <div className="alert alert-danger mt-2">
              {errors.password.message}
            </div>
          )}
        </div>
        <button className="btn btn-primary align-self-start mt-4" type="submit">
          Submit
        </button>
      </form>
      <div className="mt-4">
        <div className="alert alert-info">
          <strong>Form values:</strong>
          <p>{watchValues.email}</p>
          <p>{watchValues.password}</p>
        </div>
      </div>
    </section>
  );
};

export default Login;

//exercise :
// create the register form with the same validation rules as the login form. The register form should have the following fields:
// full name, age, email, password, confirm password. The confirm password field should match the password field.
//  Use react-hook-form and zod for validation.
