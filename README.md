#  Flow Finance Dashboard

A modern financial dashboard designed to help users track, analyze, and understand their spending behavior in a simple and intuitive way.

---

##  Overview

This project simulates a real-world personal finance dashboard where users can:

- Monitor their overall financial status
- Explore detailed transaction records
- Gain insights into spending patterns

The focus of this project is not just functionality, but also creating a clean and structured user experience similar to real fintech products.

---

##  Key Features

###  Dashboard
- Summary cards for Balance, Income, and Expenses
- Time-based visualization using a line chart
- Category-wise spending breakdown using a pie chart

###  Transactions
- Detailed transaction table with:
  - Date
  - Category
  - Amount
  - Type (Income / Expense)
- Search functionality for quick lookup
- Filter by transaction type
- Admin-only actions (Add/Delete transactions)

###  Role-Based UI
- Viewer → Can only view data
- Admin → Can manage transactions
- Role switching implemented for demonstration

###  Insights
- Identifies highest spending category
- Monthly comparison (increase/decrease in spending)
- Helps users understand financial behavior trends

---

##  State Management Approach

The application uses centralized state management:

- Transactions state is maintained in the main component
- Data is passed to child components via props
- Ensures consistency across Dashboard, Transactions, and Insights

---

##  UI/UX Considerations

- Clean and minimal layout for better readability
- Structured sections for clarity
- Responsive-friendly layout design
- Graceful handling of empty states

---

##  Tech Stack

- React.js
- CSS (custom styling)
- Recharts (for data visualization)

---

##  Setup Instructions

```bash
# Install dependencies
npm install

# Run the app
npm start
