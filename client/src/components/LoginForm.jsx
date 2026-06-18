import { useState } from "react";
import { Link } from "react-router-dom";
import LoginLeftSide from "./LoginLeftSide";
import { ArrowLeftIcon, EyeOffIcon, EyeIcon, Loader2Icon } from "lucide-react";

const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <LoginLeftSide />
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md animate-fade-in">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
          >
            <ArrowLeftIcon size={16} /> Back to portals
          </Link>
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">
              {title}
            </h1>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              {subtitle}
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-rose mt-1.5 shrink-0" />
            {error}
          </div>
        )}

        <form className="space-y-5 w-full max-w-md" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-slate-700 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none py-2 px-3 rounded-lg"
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-slate-700 font-medium"
            >
              {" "}
              Password{" "}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-11"
                required
                placeholder="you@example.com"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[calc(50%-12px)] text-slate-400 hover:text-slate-700 transition-colors"
              >
                {showPassword ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-md text-sm font-semibold hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-{0.98] flex items-center justify-center">
                {loading && <Loader2Icon className="animate-spin h-4 w-4 mr-2" />}

          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;