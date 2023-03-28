import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Nav() {
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
  const [borderColor, setBorderColor] = useState('transparent');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#000407');
        setTextColor('#f8f8f8');
        setBorderColor('#edb518');
      } else {
        setColor('transparent');
        setTextColor('#f5f7f7');
        setBorderColor('transparent');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <div className="flex justify-center">
      <header
        style={{ backgroundColor: `${color}`, borderBottomColor: `${borderColor}` }}
        className="fixed border top-0 w-full z-50 ease-in duration-300 mx-auto max-w-7xl rounded-b-[3.5rem]"
      >
        <nav className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl " aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <Link href="/">
              {color === 'transparent' ? (
                <button className="rounded-full bg-transparent text-white text-sm p-2">NL</button>
              ) : (
                <button className="rounded-full bg-secondary text-black text-sm p-2">NL</button>
              )}
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
              style={{ color: `${textColor}` }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ color: `${textColor}` }}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <button className="rounded-full bg-white p-3 logo">NL</button>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: `${textColor}` }}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
