import Link from 'next/link';
import clsx from 'clsx';
import { ComponentProps } from 'react';

const NavLink = ({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
} & ComponentProps<typeof Link>) => (
  <li>
    <Link
      href={href}
      className={clsx('text-gray-500 hover:text-black hover:underline', className)}
      {...props}
    >
      {children}
    </Link>
  </li>
);


function Footer({}) {
  return (
    <footer className="bg-neutral-100 py-12 px-10 mt-20">
      <div className="flex flex-row gap-5 flex-wrap max-w-7xl mx-auto px-4">
        <div className="pr-20">
          <h2 className="font-bold text-lg place-content-evenly">The Vegan Bug Bakery</h2>
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-neutral-500">Legal</h3>
          <ul className="mt-1">
            <NavLink href="/legal-notice">
              Legal Notice
            </NavLink>
            <NavLink href="/contact">
              Contact Us
            </NavLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function Page({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="flex flex-col min-h-screen items-stretch place-content-stretch">
      <main className={clsx('max-w-7xl mx-auto px-4', className)}>{children}</main>
      <div className="flex-grow" />
      <Footer />
    </div>
  );
}
