import { Suspense } from "react";
import { FormContent } from "@/sanity.types";
import ResolvedLink from "@/app/components/ResolvedLink";
import { urlForImage } from "@/sanity/lib/utils";

type FormProps = {
  block: FormContent;
  index: number;
};

export default function Form({ block }: FormProps) {
  const {
    title,
    description,
    formFields = [],
    submitButtonText = 'Submit',
    additionalText,
    additionalLinkText,
    additionalLink,
    image
  } = block;

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <section className="relative flex flex-wrap overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-3/5 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>

            {description && (
              <p className="mt-4 text-gray-500">
                {description}
              </p>
            )}
          </div>

          <form action="#" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            {formFields.map((field, i) => (
              <div key={i}>
                <label htmlFor={`field-${i}`} className="sr-only">
                  {field.label}
                </label>

                <div className="relative">
                  <input
                    type={field.type}
                    id={`field-${i}`}
                    className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder={field.placeholder || field.label}
                    required={field.required}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    {field.type === 'email' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    )}

                    {field.type === 'password' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between">
              {additionalText && additionalLinkText && additionalLink && (
                <p className="text-sm text-gray-500">
                  {additionalText}{" "}
                  <Suspense fallback={null}>
                    <ResolvedLink link={additionalLink} className="underline">
                      {additionalLinkText}
                    </ResolvedLink>
                  </Suspense>
                </p>
              )}

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
              >
                {submitButtonText}
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-auto lg:w-2/5">
          <img
            alt={title || "Form image"}
            src={urlForImage(image)?.url()}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
