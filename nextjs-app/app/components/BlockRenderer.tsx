import React from "react";

import Cta from "@/app/components/Cta";
import MarketingCta from "./marketing/cta";
import Info from "@/app/components/InfoSection";
import { dataAttr } from "@/sanity/lib/utils";
import Banner from "./marketing/banner";
import Pricing from "./marketing/pricing";
import Announcement from "./marketing/announcement";
import BlogCards from "./marketing/blogCards";
import Faq from "./marketing/faq";
import Form from "./marketing/form";
import Section from "./marketing/section";
import Stats from "./marketing/stats";
import Testimonials from "./marketing/testimonials";

type BlocksType = {
  [key: string]: React.FC<any>;
};

type BlockType = {
  _type: string;
  _key: string;
};

type BlockProps = {
  index: number;
  block: BlockType;
  pageId: string;
  pageType: string;
};

const Blocks: BlocksType = {
  callToAction: Cta,
  infoSection: Info,
  announcementContent: Announcement,
  bannerContent: Banner,
  blogCardsContent: BlogCards,
  ctaContent: MarketingCta,
  faqContent: Faq,
  formContent: Form,
  pricingContent: Pricing,
  sectionContent: Section,
  statsContent: Stats,
  testimonialsContent: Testimonials  
};

/**
 * Used by the <PageBuilder>, this component renders a the component that matches the block type.
 */
export default function BlockRenderer({
  block,
  index,
  pageId,
  pageType,
}: BlockProps) {
  // Block does exist
  if (typeof Blocks[block._type] !== "undefined") {
    return (
      <div
        key={block._key}
        data-sanity={dataAttr({
          id: pageId,
          type: pageType,
          path: `pageBuilder[_key=="${block._key}"]`,
        }).toString()}
      >
        {React.createElement(Blocks[block._type], {
          key: block._key,
          block: block,
          index: index,
        })}
      </div>
    );
  }
  // Block doesn't exist yet
  return React.createElement(
    () => (
      <div className="w-full bg-gray-100 text-center text-gray-500 p-20 rounded">
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    { key: block._key },
  );
}
