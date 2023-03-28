/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <div className="relative z-40 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
              <p className="mt-4 leading-7 text-white">
                If you'd like to know more about my work or process feel free to get in touch!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-secondary p-10">
                <h3 className="text-base font-semibold leading-7 text-primary">Mail me</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-black">
                  <div className="mt-1">
                    <dt className="sr-only">Email</dt>
                    <a href="mailto:nathalialimo1995@gmail.com">
                      <dd>nathalialimo1995@gmail.com</dd>
                    </a>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-secondary p-10">
                <h3 className="text-base font-semibold leading-7 text-primary">Call me</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-black">
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+43 (677) 62697384</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
