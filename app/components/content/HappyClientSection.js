import { fetchHappyClient } from "@/app/lib/fetchData";
import SlickCarousel from "./SlickCarousel";

export default async function HappyClientSection() {
    const happyClients = await fetchHappyClient('api/happyclient');

    return (happyClients &&
        <section className="happy-client-section">
            <h1 className="font-bold text-4xl text-center py-6 text-gray-800">
                Our Happy Clients.
            </h1>
            <SlickCarousel happyClients={happyClients} />
        </section>
    );
}
