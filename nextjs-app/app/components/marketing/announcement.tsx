import { Suspense } from "react";
import { AnnouncementContent } from "@/sanity.types";
import ResolvedLink from "@/app/components/ResolvedLink";

type AnnouncementProps = {
  block: AnnouncementContent;
  index: number;
};

export default function Announcement({ block }: AnnouncementProps) {
  const { heading, buttonText, link } = block;

  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        {heading} {" "}
        {buttonText && link && (
          <Suspense fallback={null}>
            <ResolvedLink
              link={link}
              className="inline-block underline"
            >
              {buttonText}
            </ResolvedLink>
          </Suspense>
        )}
      </p>
    </div>
  );
}
