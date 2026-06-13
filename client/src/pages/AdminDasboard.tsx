

const loans = [
  {
    name: "Rahul",
    amount: "₹5,00,000",
    course: "BCA",
    status: "Pending",
  },
];

const AdminDashboard = () => {
  return (
    <div className="bg-slate-100 min-h-screen">



      <div className="p-8">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Total Users</h3>
            <h2 className="text-4xl font-bold">
              120
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Loans</h3>
            <h2 className="text-4xl font-bold">
              58
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Approved</h3>
            <h2 className="text-4xl font-bold text-green-500">
              22
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Pending</h3>
            <h2 className="text-4xl font-bold text-yellow-500">
              16
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Course</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {loans.map((loan, index) => (
                <tr key={index}>
                  <td className="p-4">
                    {loan.name}
                  </td>

                  <td className="p-4">
                    {loan.course}
                  </td>

                  <td className="p-4">
                    {loan.amount}
                  </td>

                  <td className="p-4">
                    {loan.status}
                  </td>

                  <td className="p-4 flex gap-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                      Approve
                    </button>

                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;