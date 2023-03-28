export default function Header() {
  return (
    <div className="relative h-screen flex items-center justify-center z-50">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Nathalia Limo</h1>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#about" className="text-sm font-semibold leading-6 text-white">
              More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
