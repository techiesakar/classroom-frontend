
import { WORDPRESS_API_URL } from "@/config/env";

export async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
    const headers = { "Content-Type": "application/json" };

    // WPGraphQL Plugin must be enabled
    const res = await fetch(WORDPRESS_API_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }
    return json.data;

}