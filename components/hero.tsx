// components/Hero.tsx

export const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Manage Your Expenses Like a Pro
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Take control of your finances, organize your spending, and stay on budget with ExpenseTracker.
        </p>
        <a
          href="/dashboard"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

