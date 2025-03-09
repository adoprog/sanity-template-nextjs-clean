import { Suspense } from "react";
import { BannerContent } from "@/sanity.types";
import ResolvedLink from "@/app/components/ResolvedLink";
import { urlForImage } from "@/sanity/lib/utils";

type BannerProps = {
  block: BannerContent;
  index: number;
};

export default function Banner({ block }: BannerProps) {
  const {
    title,
    highlight,
    description,
    backgroundImage,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
  } = block;

  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${urlForImage(backgroundImage)?.url()})` }}>
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right bg-white/80 p-6 rounded-lg shadow-sm backdrop-blur-sm">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900 drop-shadow-sm">
            {title}
            {highlight && (
              <strong className="block font-extrabold text-rose-700">
                {highlight}
              </strong>
            )}
          </h1>

          {description && (
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-800">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {primaryButtonText && primaryButtonLink && (
              <Suspense fallback={null}>
                <ResolvedLink
                  link={primaryButtonLink}
                  className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                >
                  {primaryButtonText}
                </ResolvedLink>
              </Suspense>
            )}

            {secondaryButtonText && secondaryButtonLink && (
              <Suspense fallback={null}>
                <ResolvedLink
                  link={secondaryButtonLink}
                  className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                >
                  {secondaryButtonText}
                </ResolvedLink>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
