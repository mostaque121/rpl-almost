import { fetchHappyClient } from "@/app/lib/fetchData";
import HappyClientCard from "../components/card/HappyClientCard";

export default async function Page() {
    const happyClients = await fetchHappyClient('api/happyclient');

    return (
        happyClients && (
            <div>
                {happyClients.map((happyClient) => (
                    <HappyClientCard key={happyClient._id} happyClient={happyClient} />
                ))}
            </div>
        )
    );
}
