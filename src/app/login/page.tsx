"use client";

import { useState } from "react";

enum MODE {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    RESET_PASSWORD = "RESET_PASSWORD",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
    const [mode, setMode] = useState<MODE>(MODE.LOGIN);

    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailCode, setEmailCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const formTitle =
        mode === MODE.LOGIN
            ? "Log in"
            : mode === MODE.REGISTER
                ? "Register"
                : mode === MODE.RESET_PASSWORD
                    ? "Reset Your Password"
                    : "Verify Your Email";

    const buttonTitle =
        mode === MODE.LOGIN
            ? "Login"
            : mode === MODE.REGISTER
                ? "Register"
                : mode === MODE.RESET_PASSWORD
                    ? "Reset"
                    : "Verify";

    return (
        <div className="h-[calx(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center">
            <form action="" className="flex flex-col gap-8">
                <h1 className="text-2sx font-semibold">{formTitle}</h1>
                {mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="john"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                        />
                    </div>
                ) : null}
                {mode !== "EMAIL_VERIFICATION" ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@mail.com"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Verification Code</label>
                        <input
                            type="text"
                            name="emailCode"
                            placeholder="Code"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                        />
                    </div>
                )}
                {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                        />
                    </div>
                ) : null}
                {mode === MODE.LOGIN && <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.RESET_PASSWORD)}>Forgot Password?</div>}
                <button
                    className="bg-demo text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : buttonTitle}
                </button>
                {error && <div className="text-red-600">{error}</div>}
                {mode === MODE.LOGIN && (
                    <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.REGISTER)}>
                        {"Don't"} have an account? Register
                    </div>
                )}
                {mode === MODE.REGISTER && (
                    <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
                        Have an account?
                    </div>
                )}
                {mode === MODE.RESET_PASSWORD && (
                    <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
                        Go back to Login
                    </div>
                )}
                {message && <div className="text-green-600 text-sm">{message}</div>}
            </form>
        </div>
    );
};

export default LoginPage;
