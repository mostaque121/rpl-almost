import { fetchHappyClient } from "@/app/lib/fetchData";
import SlickCarousel from "./SlickCarousel";

export default async function HappyClientSection() {
    const happyClients = await fetchHappyClient('api/happyclient');

    return (happyClients &&
        <div className="bg-blue-50">
            <section className="py-10 sm:py-16 px-3 sm:px-8 max-w-7xl block mx-auto">
                <h1 className="font-bold text-4xl text-center pb-6 text-gray-800">
                    Our Happy Clients.
                </h1>
                <SlickCarousel happyClients={happyClients} />
            </section>
        </div>
    );
}
