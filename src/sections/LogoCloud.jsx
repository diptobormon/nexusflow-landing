import { logos } from "../data/siteData";

export default function LogoCloud() {
  return (
    <section className="py-12 border-y border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest text-neutral-500 uppercase">
          POWERS THE WORLD'S BEST ENGINEERING TEAMS
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-6 invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
