import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex w-full items-center px-8">
      <div className="w-[70%]">
        <span className="text-lg font-bold">Setos</span>
      </div>
      <div className="flex w-[30%] justify-end space-x-8">
        <Link href="#" className="no-underline text-inherit hover:underline">
          Services
        </Link>
        <Link href="#" className="no-underline text-inherit hover:underline">
          Pricing
        </Link>
        <Link href="#" className="no-underline text-inherit hover:underline">
          Features
        </Link>
        <Link href="#" className="no-underline text-inherit hover:underline">
          About us
        </Link>
      </div>
    </nav>
  );
}
