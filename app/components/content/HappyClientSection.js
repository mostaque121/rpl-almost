import { fetchHappyClient } from "@/app/lib/fetchData";
import SlickCarousel from "./SlickCarousel";

export default async function HappyClientSection() {
    const happyClients = await fetchHappyClient('api/happyclient');

    return (happyClients &&
        <div>
            <h1 className="font-semibold text-3xl text-center py-8 text-black">Happy Clients</h1>
            <SlickCarousel happyClients={happyClients} />
        </div>
    );
}
