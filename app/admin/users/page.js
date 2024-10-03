import { fetchData } from "@/app/lib/fetchData";
import UserTable from "./components/UserTable";
export default async function Page() {
  let users = null;

  try {
    users = await fetchData('api/admin/users');
  } catch (error) {
    console.error("Error fetching data:", error);
    if (error.response?.status === 401) {
      users = null;
    } else {
      users = [];
    }
  }
  return (users &&
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserTable users={users} />
    </div>
  )
}