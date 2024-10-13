// components/Hero.tsx

export const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-center py-20">
      <div className="container mx-auto">
        <h2 className=" text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-4 mb-6">
          Manage Your Expenses Like a Pro
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 pb-8">
          Take control of your finances, organize your spending, and stay on budget with ExpenseTracker.
        </p>
        <a
          href="/dashboard"
          className="
                px-6 py-3 rounded-lg
                bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20
                backdrop-filter backdrop-blur-lg
                border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-80
                text-black dark:text-white
                hover:bg-opacity-30 dark:hover:bg-opacity-30
                transition duration-300 ease-in-out
                shadow-lg
                font-medium
              "
           >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

