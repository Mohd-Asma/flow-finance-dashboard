import { useState } from "react";
import Dashboard from "./pages/Dsh";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import data from "./data/mockData";   // ✅ ADD THIS
import "./styles/layout.css";

function App() {
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(data);

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <div className="sidebar">
        <h2> FlowFinance</h2>

        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("transactions")}>
          Transactions
        </button>

        <button onClick={() => setPage("insights")}>
          Insights
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Header */}
        <div className="header">
          <h3 style={{ fontWeight: "600" }}>
            {page.toUpperCase()}
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "14px", color: "#64748b" }}>
              Role:
            </span>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                padding: "6px",
                borderRadius: "6px",
                border: "1px solid #ccc"
              }}
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        {/* Page Content */}
        <div className="page-content">
  {page === "dashboard" && <Dashboard transactions={transactions} />}

  {page === "transactions" && (
    <Transactions
      transactions={transactions}
      setTransactions={setTransactions}
      role={role}
    />
  )}

  {page === "insights" && <Insights transactions={transactions} />}
</div>

      </div>
    </div>
  );
}

export default App;