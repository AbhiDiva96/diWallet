// components/Features.tsx
export const Features = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Premium Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Expense Categorization</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Automatically categorize your spending to better understand where your money goes.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Budget Alerts</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Set budget limits and receive alerts to prevent overspending.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Detailed Analytics</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Analyze your spending with beautifully designed graphs and reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

