

const Dashboard = () => {
  return (
    <div className="bg-slate-100 min-h-screen">

      

      <div className="max-w-7xl mx-auto p-8">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500">
            Track your loan application
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500">
              Loan Amount
            </p>

            <h2 className="text-3xl font-bold text-blue-600">
              ₹5L
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500">
              EMI
            </p>

            <h2 className="text-3xl font-bold text-green-600">
              ₹7,200
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500">
              Status
            </p>

            <h2 className="text-yellow-500 text-3xl font-bold">
              Pending
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500">
              Credit Score
            </p>

            <h2 className="text-indigo-600 text-3xl font-bold">
              780
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;