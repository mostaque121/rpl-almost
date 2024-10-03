export default function UserOption({ handleLogout, user }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-64 mx-auto absolute right-0 top-12 z-50">
      {/* User Profile Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center border-b pb-2">
          User Profile
        </h2>

        <div className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg">
          <img
            src={user.image || '/default-avatar.png'} // Fallback to a default avatar
            alt="User avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="font-medium text-gray-900">
              {user.name || 'N/A'}
            </p>
            <p className="text-sm text-gray-600">
              {user.email || 'N/A'}
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 text-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
