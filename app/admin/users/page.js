import { fetchData } from "@/app/lib/fetchData";
import UserTable from "./components/UserTable";
export default async function Page() {
  const users = await fetchData('api/admin/users');
  return (users &&
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserTable users={users} />
    </div>
  )
}