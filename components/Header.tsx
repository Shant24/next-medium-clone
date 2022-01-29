import Link from 'next/link';

const Header = () => (
  <header className="mx-auto p-5 max-w-7xl flex justify-between items-center">
    <div className="flex items-center space-x-5">
      <Link href="/">
        <img
          className="w-44 object-center cursor-pointer"
          src="https://res.cloudinary.com/kuhqmsx0ca/image/upload/v1642974877/projects/next-medium/1_s986xIGqhfsN8U--09_AdA_cm0ofm.png"
          alt="Logo"
        />
      </Link>

      <nav className="hidden md:inline-flex items-center space-x-5">
        <h3 className="cursor-pointer">About</h3>
        <h3 className="cursor-pointer">Contact</h3>
        <h3 className="px-4 py-1 text-white bg-green-600 rounded-full cursor-pointer">
          Follow
        </h3>
      </nav>
    </div>
    <div className="flex items-center space-x-5 text-green-600">
      <h3 className="cursor-pointer">Sign in</h3>
      <h3 className="border px-4 py-1 rounded-full border-green-600 cursor-pointer">Get Started</h3>
    </div>
  </header>
);

export default Header;
