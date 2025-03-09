import { Suspense } from "react";
import { PricingContent } from "@/sanity.types";
import ResolvedLink from "@/app/components/ResolvedLink";

type PricingProps = {
  block: PricingContent;
  index: number;
};

export default function Pricing({ block }: PricingProps) {
  const { plans = [] } = block;
  
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          {plans.map((plan, planIndex) => (
            <div key={planIndex} className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                  {plan.name}
                  <span className="sr-only">Plan</span>
                </h2>

                {plan.description && (
                  <p className="mt-2 text-gray-700">
                    {plan.description}
                  </p>
                )}

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {plan.currency}{plan.price}
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                    {plan.billingPeriod}
                  </span>
                </p>

                {plan.buttonText && plan.buttonLink && (
                  <Suspense fallback={null}>
                    <ResolvedLink
                      link={plan.buttonLink}
                      className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                    >
                      {plan.buttonText}
                    </ResolvedLink>
                  </Suspense>
                )}
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">
                  What&apos;s included:
                </p>

                {plan.features && plan.features.length > 0 && (
                  <ul className="mt-2 space-y-2 sm:mt-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-1">
                        {feature.included ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}

                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
