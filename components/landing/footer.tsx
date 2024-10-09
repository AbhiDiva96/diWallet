// components/Footer.tsx
export const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 yourWallet. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="hover:text-white mx-2">
            Twitter
          </a>
          <a href="#" className="hover:text-white mx-2">
            Facebook
          </a>
          <a href="#" className="hover:text-white mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

