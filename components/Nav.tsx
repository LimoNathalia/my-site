import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#about' },
  //{ name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('rgba(237, 234, 234)');
  const [borderColor, setBorderColor] = useState('transparent');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#292830');
        setTextColor('rgba(237, 234, 234)');
        setBorderColor('#a179af');
      } else {
        setColor('transparent');
        setTextColor('rgba(237, 234, 234)');
        setBorderColor('transparent');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <div className="flex justify-center">
      <header
        style={{
          backgroundColor: `${color}`,
          borderBottomColor: `${borderColor}`,
          borderLeftColor: `${borderColor}`,
          borderRightColor: `${borderColor}`,
        }}
        className="fixed border top-0 w-full z-50 ease-in duration-300 mx-auto  rounded-b-[3.5rem]"
      >
        <nav className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl " aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <Link href="/">
              {color === 'transparent' ? (
                <button className="rounded-full bg-transparent bg-white text-black text-sm p-2">NL</button>
              ) : (
                <button className="rounded-full bg-primary text-black text-sm p-2">NL</button>
              )}
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
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
                className="text-sm font-semibold leading-6"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                {' '}
                <span className="sr-only">NL</span>
                <button className="rounded-full bg-primary p-3 logo">NL</button>
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => setMobileMenuOpen(false)}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white"
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
