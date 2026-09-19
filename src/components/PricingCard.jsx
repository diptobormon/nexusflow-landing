import arrowRightIcon from "../assets/icons/arrow-right.svg";
import checkIcon from "../assets/icons/check.svg";

export default function PricingCard({
  name,
  desc,
  monthly,
  annual,
  period,
  features,
  cta,
  href,
  featured,
  isAnnual,
}) {
  const price = isAnnual ? annual : monthly;

  return (
    <div
      className={`p-8 rounded-xl flex flex-col justify-between space-y-6 ${featured ? "border-2 border-white bg-[#0a0a0a] relative shadow-2xl" : "border border-neutral-800 bg-[#0a0a0a]"}`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white">{name}</h3>
          {featured && (
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-black bg-white rounded">
              POPULAR
            </span>
          )}
        </div>
        <p className="text-xs text-neutral-400">{desc}</p>

        <div className="flex items-baseline gap-1 font-mono">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-xs text-neutral-500">{period}</span>}
        </div>

        <div
          className={`pt-4 border-t space-y-2.5 text-xs font-mono ${featured ? "border-neutral-800 text-neutral-200" : "border-neutral-900 text-neutral-300"}`}
        >
          {features.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <img src={checkIcon} alt="" className="w-3.5 h-3.5 invert" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={href}
        className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium rounded-lg transition-colors ${featured ? "text-black bg-white hover:bg-neutral-200" : "text-neutral-300 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800"}`}
      >
        <span>{cta}</span>
        <img
          src={arrowRightIcon}
          alt=""
          className={`w-3.5 h-3.5 invert ${featured ? "" : "opacity-70"}`}
        />
      </a>
    </div>
  );
}
