import HappyClientForm from "@/app/admin/components/form/HappyClientForm"
export default function Page() {
    return (
        <div className="max-w-lg mx-auto py-10">
            <h1 className="text-white text-2xl mb-8 font-semibold text-center">Upload Happy Client</h1>
            <HappyClientForm />
        </div>
    )
}