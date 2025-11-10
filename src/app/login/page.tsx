"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

enum MODE {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    RESET_PASSWORD = "RESET_PASSWORD",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
    const wixClient = useWixClient();
    const pathName = usePathname();
    const router = useRouter();

    const isLoggedIn = wixClient.auth.loggedIn();

    if (isLoggedIn) {
        router.push("/");
    }

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            let response;

            switch (mode) {
                case MODE.LOGIN:
                    response = await wixClient.auth.login({
                        email,
                        password,
                    });
                    break;
                case MODE.REGISTER:
                    response = await wixClient.auth.register({
                        email,
                        password,
                        profile: { nickname: userName },
                    });
                    break;
                case MODE.RESET_PASSWORD:
                    response = await wixClient.auth.sendPasswordResetEmail(
                        email,
                        pathName
                    );
                    setMessage("Password reset email sent. Please check your inbox.");
                    break;
                case MODE.EMAIL_VERIFICATION:
                    response = await wixClient.auth.processVerification({
                        verificationCode: emailCode,
                    });
                    break;
                default:
                    break;
            }

            switch (response?.loginState) {
                case LoginState.SUCCESS:
                    setMessage("Successfully! You are being redircted.");
                    const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
                        response.data.sessionToken
                    );
                    console.log(tokens);
                    Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
                        expires: 2,
                    });
                    wixClient.auth.setTokens(tokens);
                    router.push("/");
                    break;
                case LoginState.FAILURE:
                    if (
                        response?.errorCode === "invalidEmail" ||
                        response?.errorCode === "invalidPassword"
                    ) {
                        setError("Invalid email or password.");
                    } else if (response?.errorCode === "emailAlreadyExists") {
                        setError("Email already exists.");
                    } else if (response?.errorCode === "resetPassword") {
                        setMessage("Password reset email sent. Please check your inbox.");
                    } else {
                        setError("An error occurred. Please try again.");
                    }
                    break;
                case LoginState.EMAIL_VERIFICATION_REQUIRED:
                    setMode(MODE.EMAIL_VERIFICATION);
                    setMessage("Please enter the verification code sent to your email.");
                    break;
                case LoginState.OWNER_APPROVAL_REQUIRED:
                    setMessage("Your account is pending owner approval.");
                    break;
                default:
                    break;
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-[calx(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center">
            <form action="" className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <h1 className="text-2sx font-semibold">{formTitle}</h1>
                {mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="john"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setUserName(e.target.value)
                            }
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmailCode(e.target.value)
                            }
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>
                ) : null}
                {mode === MODE.LOGIN && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.RESET_PASSWORD)}
                    >
                        Forgot Password?
                    </div>
                )}
                <button
                    className="bg-demo text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : buttonTitle}
                </button>
                {error && <div className="text-red-600">{error}</div>}
                {mode === MODE.LOGIN && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.REGISTER)}
                    >
                        {"Don't"} have an account? Register
                    </div>
                )}
                {mode === MODE.REGISTER && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        Have an account?
                    </div>
                )}
                {mode === MODE.RESET_PASSWORD && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        Go back to Login
                    </div>
                )}
                {message && <div className="text-green-600 text-sm">{message}</div>}
            </form>
        </div>
    );
};

export default LoginPage;
