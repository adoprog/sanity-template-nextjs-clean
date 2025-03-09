import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {bannerContent} from './objects/marketing/bannerContent'
import {pricingContent} from './objects/marketing/pricingContent'
import {announcementContent} from './objects/marketing/announcementContent'
import {blogCardsContent} from './objects/marketing/blogCardsContent'
import {ctaContent} from './objects/marketing/ctaContent'
import {faqContent} from './objects/marketing/faqContent'
import {formContent} from './objects/marketing/formContent'
import {sectionContent} from './objects/marketing/sectionContent'
import {statsContent} from './objects/marketing/statsContent'
import {testimonialsContent} from './objects/marketing/testimonialsContent'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
  // Marketing Objects
  announcementContent,
  bannerContent,
  blogCardsContent,
  ctaContent,
  faqContent,
  formContent,
  pricingContent,
  sectionContent,
  statsContent,
  testimonialsContent,
]
