import data from "../data/mockData";
import { useState } from "react";
import "../styles/dashboard.css";

function Transactions({ role }) {

  const [transactions, setTransactions] = useState(data);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // Filter + Search logic
  const filteredData = transactions.filter(t => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>

      {/* Header */}
      <div className="section-header">
        <h2>Transactions</h2>
        <p style={{ color: "#64748b", fontSize: "14px" }}>
          Track and manage your financial activity
        </p>
      </div>

      {/* Top Controls */}
      <div className="table-top">

        <input
          type="text"
          placeholder="Search category..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      </div>

      {/* Table */}
      <div className="table-container">
        <table>

          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          <tbody>
            {filteredData.map(t => (
              <tr key={t.id}>

                <td>{t.date}</td>
                <td>{t.category}</td>

                <td className={t.type === "income" ? "income" : "expense"}>
                  ₹{t.amount}
                </td>

                <td>{t.type}</td>

                {role === "admin" && (
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTransaction(t.id)}
                    >
                      Delete
                    </button>
                  </td>
                )}

              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Transactions;