"use client";

import Image from "next/image";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";

export default function NavIcons() {
    const wixClient = useWixClient();
    const router = useRouter();

    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleProfile = () => {
        const isLoggedIn = wixClient.auth.loggedIn();
        if (!isLoggedIn) {
            router.push("/login");
            return;
        } else {
            setIsProfileOpen((prev) => !prev);
        }
    };

    const handleLogOut = async () => {
        setIsLoading(true);
        Cookies.remove("refreshToken");
        const { logoutUrl } = await wixClient.auth.logout(window.location.href);
        setIsLoading(false);
        setIsProfileOpen(false);
        router.push(logoutUrl);
    };

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            {/* PROFILE ICON */}
            <Image
                src="/profile.png"
                alt="profile icon"
                width={22}
                height={22}
                className="cursor-pointer"
                onClick={handleProfile}
            />

            {/* PROFILE DROPDOWN */}
            {isProfileOpen && (
                <div className="absolute top-12 left-0 p-4 rounded-md bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-[9999]">
                    <Link href="/" className="block hover:underline">
                        Profile
                    </Link>
                    <div
                        className="mt-2 cursor-pointer hover:underline"
                        onClick={handleLogOut}
                    >
                        {isLoading ? "Logging out" : "Logout"}
                    </div>
                </div>
            )}

            {/* NOTIFICATION ICON */}
            <Image
                src="/notification.png"
                alt="notification icon"
                width={22}
                height={22}
                className="cursor-pointer"
            />

            {/* CART ICON */}
            <div
                className="relative cursor-pointer"
                onClick={() => setIsCartOpen((prev) => !prev)}
            >
                <Image src="/cart.png" alt="cart icon" width={22} height={22} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-demo rounded-full text-white text-sm flex justify-center items-center">
                    2
                </div>
            </div>

            {/* CART MODAL */}
            {isCartOpen && (
                <div className="absolute right-0 top-6 z-[9999]">
                    <CartModal />
                </div>
            )}
        </div>
    );
}
