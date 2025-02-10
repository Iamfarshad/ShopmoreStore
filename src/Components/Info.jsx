import { useState } from "react";
import car from "../assets/car.jpeg";
import { Link } from "react-router-dom";
import { APP_NAME } from "../Constants/GlobalConstants";

const LoginInfo = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      console.log("response", response);

      if (!response.ok) {
        throw new Error(`Login failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("Login Successful:", data);

      localStorage.setItem("authToken", data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Error during login:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen bg-gray-50">
      <div className="w-full h-52 flex justify-between items-center p-4 tab:flex-col tab:h-auto">
        <div className="flex justify-center tab:mb-4">
          <span className="text-lime-500 font-roboto text-5xl font-bold animate-slideInFromLeft phone:text-3xl">
            {APP_NAME}
          </span>
        </div>
        <div className="w-80 h-80 rounded-full bg-lime-500 animate-slideInFromLeft tab:w-60 tab:h-60 phone:w-40 phone:h-40">
          <img
            className="w-full h-full rounded-full p-3"
            src={car}
            alt="App logo"
          />
        </div>
      </div>

      <div className="w-full h-3/6 flex justify-center items-center mt-4 tab:mt-8 phone:h-auto">
        <div className="w-2/6 h-full bg-lime-500 rounded-lg p-2 tab:w-4/6 phone:w-11/12">
          <form
            className="w-full h-full bg-gray-50 rounded-lg flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className="w-full text-lime-500 text-center mb-6">
              <span className="text-3xl font-roboto phone:text-xl">Login</span>
            </div>

            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-lg phone:text-base"
              >
                Username:
              </label>
              <input
                className="w-full h-12 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500 phone:h-10"
                placeholder="Enter Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-lg phone:text-base"
              >
                Password:
              </label>
              <input
                className="w-full h-12 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500 phone:h-10"
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="w-full text-red-500 text-center mt-2">
                {error}
              </div>
            )}

            <div className="w-full flex justify-center mt-6">
              <button
                type="submit"
                className={`text-lg px-5 py-3 rounded-full transition ease-in duration-300 transform ${
                  loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-lime-500 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
                } phone:px-4 phone:py-2 phone:text-sm`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="w-full text-center mt-4">
              <Link
                to="/createaccount"
                className="text-lime-500 hover:text-black"
              >
                Dont have an account? Create one.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginInfo;
