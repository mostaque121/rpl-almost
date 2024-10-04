import { fetchHappyClient } from "@/app/lib/fetchData";
import HappyClientCard from "../components/card/HappyClientCard";

export default async function Page() {
    const happyClients = await fetchHappyClient('api/happyclient');

    return (
        happyClients && (

            <div>
                <h1 className='text-center block text-3xl py-8 font-semibold'>Happy Client</h1>
                <div className='flex justify-center flex-wrap'>
                    {happyClients.map((happyClient) => (
                        <HappyClientCard key={happyClient._id} happyClient={happyClient} />
                    ))}
                </div>
            </div>
        )
    );
}
