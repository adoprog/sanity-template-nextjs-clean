import { StatsContent } from "@/sanity.types";

type StatsProps = {
  block: StatsContent;
  index: number;
};

export default function Stats({ block }: StatsProps) {
  const { title, description, stats = [] } = block;
  
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-gray-500 sm:text-xl">
            {description}
          </p>
        )}
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              {stat.label}
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
