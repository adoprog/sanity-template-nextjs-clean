import { Suspense } from "react";
import { CtaContent } from "@/sanity.types";
import ResolvedLink from "@/app/components/ResolvedLink";
import { urlForImage } from "@/sanity/lib/utils";

type CtaProps = {
  block: CtaContent;
  index: number;
};

export default function CTA({ block }: CtaProps) {
  const { heading, text, buttonText, link, images } = block;
  
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={`bg-blue-500 p-8 md:p-12 lg:px-16 lg:py-24`}>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {heading}
              </h2>

              {text && (
                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  {text}
                </p>
              )}

              {buttonText && link && (
                <div className="mt-4 md:mt-8">
                  <Suspense fallback={null}>
                    <ResolvedLink
                      link={link}
                      className={`inline-block rounded-sm border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500transition hover:bg-transparent hover:text-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden`}
                    >
                      {buttonText}
                    </ResolvedLink>
                  </Suspense>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            {images && images.length > 0 ? (
              images.map((image, i) => (
                <img
                  key={i}
                  alt=""
                  src={urlForImage(image)?.url()}
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              ))
            ) : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}
