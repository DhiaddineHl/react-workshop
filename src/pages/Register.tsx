import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Same email / password rules as the login form.
const registerFields = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { message: "Full name must contain at least 3 characters" }),
  age: z
    .number({ error: "Please enter your age" })
    .int({ message: "Age must be a whole number" })
    .min(18, { message: "You must be at least 18 years old" })
    .max(120, { message: "Please enter a valid age" }),
  email: z.email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères",
    })
    .regex(/[A-Z]/, {
      message: "Le mot de passe doit contenir au moins une majuscule (A-Z)",
    })
    .regex(/[a-z]/, {
      message: "Le mot de passe doit contenir au moins une minuscule (a-z)",
    })
    .regex(/[0-9]/, {
      message: "Le mot de passe doit contenir au moins un chiffre (0-9)",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Le mot de passe doit contenir au moins un caractère spécial",
    }),
  confirmPassword: z.string(),
});

const registerSchema = registerFields.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    // Attach the error to the confirmPassword field.
    path: ["confirmPassword"],
    // By default a refine only runs once every field is valid. Run it as soon as
    // the two password fields themselves are valid, even if e.g. age is still empty.
    when: (payload) =>
      registerFields
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success,
  },
);

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const submitForm = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <section>
      <h1 className="h3 fw-bold mb-1">Create an account</h1>
      <p className="text-muted mb-4">Fill in your details to get started.</p>

      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <label htmlFor="registerFullName" className="form-label">
            Full name
          </label>
          <input
            {...register("fullName")}
            type="text"
            className="form-control"
            id="registerFullName"
            placeholder="John Doe"
          />
          {errors.fullName && (
            <div className="alert alert-danger mt-2">
              {errors.fullName.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="registerAge" className="form-label">
            Age
          </label>
          <input
            // valueAsNumber turns the input string into a number (NaN when empty),
            // so it matches z.number() in the schema.
            {...register("age", { valueAsNumber: true })}
            type="number"
            className="form-control"
            id="registerAge"
            placeholder="25"
          />
          {errors.age && (
            <div className="alert alert-danger mt-2">{errors.age.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">
            Email address
          </label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="registerEmail"
            placeholder="name@example.com"
          />
          {errors.email && (
            <div className="alert alert-danger mt-2">
              {errors.email.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="form-control"
            id="registerPassword"
            placeholder="••••••••"
          />
          {errors.password && (
            <div className="alert alert-danger mt-2">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="registerConfirmPassword" className="form-label">
            Confirm password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="form-control"
            id="registerConfirmPassword"
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <div className="alert alert-danger mt-2">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        <button className="btn btn-primary w-100 mt-2" type="submit">
          Create account
        </button>
      </form>
    </section>
  );
};

export default Register;
