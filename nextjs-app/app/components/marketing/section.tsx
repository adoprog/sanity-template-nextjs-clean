import { SectionContent } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";

type SectionProps = {
  block: SectionContent;
  index: number;
};

export default function Section({ block }: SectionProps) {
  const { title, description, image } = block;

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {title}
              </h2>

              {description && (
                <p className="mt-4 text-gray-700">
                  {description}
                </p>
              )}
            </div>
          </div>

          <div>
            <img
              src={urlForImage(image)?.url()}
              className="rounded"
              alt={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
