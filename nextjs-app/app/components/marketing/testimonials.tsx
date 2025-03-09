import { TestimonialsContent } from "@/sanity.types";
import { Suspense } from "react";
import ResolvedLink from "@/app/components/ResolvedLink";

type TestimonialsProps = {
  block: TestimonialsContent;
  index: number;
};

export default function Testimonials({ block }: TestimonialsProps) {
  const { 
    title, 
    description, 
    testimonials = [], 
    ctaText, 
    ctaLink 
  } = block;
  
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h2>

            {description && (
              <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
                {description}
              </p>
            )}
          </div>

          {ctaText && ctaLink && (
            <Suspense fallback={null}>
              <ResolvedLink
                link={ctaLink}
                className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
              >
                <span className="font-medium">{ctaText}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 rtl:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </ResolvedLink>
            </Suspense>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <blockquote key={i} className="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8">
              <div>
                {testimonial.rating && (
                  <div className="flex gap-0.5 text-green-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="size-5"
                        fill={starIndex < (testimonial.rating || 0) ? "currentColor" : "none"}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                <div className="mt-4">
                  {testimonial.title && (
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                      {testimonial.title}
                    </p>
                  )}

                  {testimonial.quote && (
                    <p className="mt-4 leading-relaxed text-gray-700">
                      {testimonial.quote}
                    </p>
                  )}
                </div>
              </div>

              {testimonial.author && (
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; {testimonial.author}
                </footer>
              )}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
