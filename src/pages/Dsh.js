import data from "../data/mockData";
import "../styles/dashboard.css";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell
} from "recharts";

function Dashboard() {

  // Income & Expense
  const income = data.filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = data.filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  // Line Chart Data
  const lineData = data.map(t => ({
    date: t.date,
    amount: t.amount
  }));

  // Pie Chart Data
  const categoryTotals = {};
  data.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryTotals).map(key => ({
    name: key,
    value: categoryTotals[key]
  }));

  const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28"];

  return (
    <div>
      <h2>Dashboard</h2>

      {/* ✅ FIXED CARDS (ONLY ONE SET) */}
      <div className="cards">
        <div className="card">
          <h3>Balance</h3>
          <p>₹{balance}</p>
        </div>

        <div className="card">
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div className="card">
          <h3>Expenses</h3>
          <p>₹{expenses}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts">

        {/* Line Chart */}
        <LineChart width={400} height={300} data={lineData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#4cafef" />
        </LineChart>

        {/* Pie Chart */}
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

      </div>
    </div>
  );
}

export default Dashboard;