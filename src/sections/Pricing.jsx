import { useState } from "react";
import PricingCard from "../components/PricingCard";
import { pricingPlans } from "../data/siteData";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="py-24 border-b border-neutral-800 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            [ 05 ] PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Predictable pricing. No hidden fees.
          </h2>
          <p className="text-sm text-neutral-400">
            Start for free on Hobby, or scale to Pro as your engineering squad
            grows.
          </p>

          <div className="pt-4 flex items-center justify-center gap-3 font-mono text-xs">
            <span className={isAnnual ? "text-neutral-500" : "text-white"}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              type="button"
              role="switch"
              aria-checked={isAnnual}
              className="relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 transition-colors focus:outline-none"
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition mt-0.5 ${isAnnual ? "translate-x-5" : "translate-x-0.5"}`}
              ></span>
            </button>
            <span
              className={
                !isAnnual
                  ? "text-neutral-500 flex items-center gap-1"
                  : "text-white flex items-center gap-1"
              }
            >
              Annual
              <span className="px-1.5 py-0.5 text-[10px] text-emerald-400 bg-emerald-950 border border-emerald-800 rounded">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
}
