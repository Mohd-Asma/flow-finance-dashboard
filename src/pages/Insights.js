import data from "../data/mockData";
import "../styles/dashboard.css";

function Insights() {

  // ✅ 1. EXISTING LOGIC (keep this)
  const expenses = data.filter(t => t.type === "expense");

  const categoryTotals = {};
  expenses.forEach(t => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  let maxCat = "";
  let maxVal = 0;

  for (let key in categoryTotals) {
    if (categoryTotals[key] > maxVal) {
      maxVal = categoryTotals[key];
      maxCat = key;
    }
  }

  

  const currentMonth = data
    .slice(0, 2)
    .reduce((a, t) => a + t.amount, 0);

  const lastMonth = data
    .slice(2)
    .reduce((a, t) => a + t.amount, 0);

 
  return (
    <div>
      <h2>Insights</h2>

      <div className="card">
        <h3>Top Spending Category</h3>
        <p>{maxCat} (₹{maxVal})</p>
      </div>

      
      <div className="card">
        <h3>Monthly Comparison</h3>
        <p>
          {currentMonth > lastMonth
            ? "Spending Increased 📈"
            : "Spending Decreased 📉"}
        </p>
      </div>

    </div>
  );
}

export default Insights;