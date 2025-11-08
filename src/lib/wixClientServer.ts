import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { cookies } from "next/headers";

export const WixClientServer = async () => {
    let refreshToken;
    try {
        const cookiesStore = cookies();
        refreshToken = JSON.parse(cookiesStore.get("refreshToken")?.value || '{}');
    } catch (error) { }
    
    const wixClient = createClient({
        modules: {
            products,
        },
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
            tokens: {
                accessToken: {
                    value: "",
                    expiresAt: 0,
                },
                refreshToken
            },
        }),
    });

    return wixClient;
}