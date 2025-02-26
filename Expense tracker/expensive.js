


function incomeTracker() {
    let income = 0; // private variable
    return {
      addIncome: function(amount) {
        income += amount; // modifies private variable
      },
      getIncome: function() {
        return income; // exposes the income value
      }
    };
  }
  
  const myIncome = incomeTracker();
  myIncome.addIncome(2000);
  console.log(myIncome.getIncome()); // Outputs: 2000
  







  function expenseTracker() {
    let expenses = [];
    return {
      addExpense: function(category, amount) {
        expenses.push({ category, amount });
      },
      getExpenses: function() {
        return expenses;
      }
    };
  }
  

  function reportGenerator(incomeTracker, expenseTracker) {
    return function() {
      const income = incomeTracker.getIncome();
      const expenses = expenseTracker.getExpenses();
      let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      return `Total Income: ${income}, Total Expenses: ${totalExpenses}`;
    };
  }
  
  const myReport = reportGenerator(myIncome, myExpenses);
  console.log(myReport()); 






  function reportGenerator(incomeTracker, expenseTracker) {
    return function() {
      const income = incomeTracker.getIncome();
      const expenses = expenseTracker.getExpenses();
      let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      return `Total Income: ${income}, Total Expenses: ${totalExpenses}`;
    };
  }
  
  const myReport = reportGenerator(myIncome, myExpenses);
  console.log(myReport()); 
  




  function Tracker() {
    this.data = [];
  }
  
  Tracker.prototype.add = function(item) {
    this.data.push(item);
  };
  
  Tracker.prototype.getTotal = function() {
    return this.data.reduce((sum, item) => sum + item.amount, 0);
  };
  
  const incomeTracker = new Tracker();
  incomeTracker.add({ amount: 2000 });
  console.log(incomeTracker.getTotal()); // Outputs: 2000
  
  const expenseTracker = new Tracker();
  expenseTracker.add({ amount: 150 });
  console.log(expenseTracker.getTotal()); // Outputs: 150
  