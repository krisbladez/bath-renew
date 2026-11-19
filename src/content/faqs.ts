export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  /** Only publish answers supported by verified company information */
  verified: boolean;
  showOnHomePreview?: boolean;
};

export const faqs: FAQItem[] = [
  {
    id: "cost",
    question: "What does bathroom remodeling cost?",
    answer:
      "Project cost depends on scope, materials, bathroom conditions, and any plumbing or layout changes. Bath Renew provides personalized estimates after reviewing your space. A starting-price promotion may apply to qualifying projects once package details are confirmed for publication.",
    verified: true,
    showOnHomePreview: true,
  },
  {
    id: "promotion-includes",
    question: "What does the starting promotion include?",
    answer:
      "Bath Renew advertises a base-price remodel promotion for qualifying projects. Exact inclusions, exclusions, and restrictions are pending owner confirmation before they are published in full on this site. Request an estimate and we will review what applies to your bathroom.",
    verified: false,
    showOnHomePreview: true,
  },
  {
    id: "timeline",
    question: "How long does installation take?",
    answer:
      "Most bathroom remodels take between a few days and 1 to 2 weeks, depending on the size of the project and the materials selected. Smaller updates can be completed even sooner.",
    verified: true,
    showOnHomePreview: true,
  },
  {
    id: "services-available",
    question: "Which remodeling services are available?",
    answer:
      "Services include shower remodeling, tub-to-shower conversions, bathtub replacement, shower and tub surrounds (including solid-surface and quartz), tile installation and repair, bathroom vanities, shower doors, plumbing upgrades (with Living Waters Plumbing when required), and complete bathroom renovations.",
    verified: true,
    showOnHomePreview: true,
  },
  {
    id: "warranty",
    question: "What warranty coverage is provided?",
    answer:
      "Bath Renew’s current site states that work includes a satisfaction guarantee and workmanship warranty in addition to manufacturer warranties. Specific warranty terms and durations require owner approval before detailed claims are published here.",
    verified: false,
    showOnHomePreview: true,
  },
  {
    id: "communities",
    question: "Which Twin Cities communities are served?",
    answer:
      "Bath Renew serves Minneapolis and surrounding communities including Golden Valley, Plymouth, Maple Grove, Brooklyn Park, Brooklyn Center, New Hope, Crystal, Robbinsdale, St. Louis Park, Hopkins, Minnetonka, Edina, Richfield, Bloomington, Eden Prairie, Wayzata, Shoreview, Roseville, Fridley, Coon Rapids, Champlin, Andover, Anoka, and nearby Twin Cities areas within about one hour of the Minneapolis metro.",
    verified: true,
    showOnHomePreview: true,
  },
  {
    id: "materials",
    question: "Do I need to supply my own materials or fixtures?",
    answer:
      "You can choose. Bath Renew can work with materials you provide, or handle sourcing products that fit your style and budget. For promotional packages, Bath Renew provides and installs the selected remodeling materials and components.",
    verified: true,
  },
  {
    id: "partial",
    question: "Can you remodel my bathroom without a full renovation?",
    answer:
      "Yes. Partial remodels such as new shower surrounds, tile updates, or fixture replacements can refresh a bathroom without the cost of a full renovation.",
    verified: true,
  },
  {
    id: "plumbing",
    question: "Do you handle plumbing work?",
    answer:
      "Yes. Bath Renew partners with Living Waters Plumbing for plumbing-related installations so work meets professional standards and local codes.",
    verified: true,
  },
  {
    id: "financing",
    question: "Do you offer financing?",
    answer:
      "Financing options are available. Ask about financing during your free consultation. Specific lender terms are shared during that conversation.",
    verified: true,
  },
  {
    id: "keep-tub",
    question: "Can I keep my existing bathtub?",
    answer:
      "Depending on the condition and layout of your bathroom, you may be able to keep or refinish your existing tub. We’ll review options during your consultation.",
    verified: true,
  },
  {
    id: "free-estimate",
    question: "Do you offer free estimates?",
    answer:
      "Yes. Contact Bath Renew to schedule a consultation and receive a personalized quote.",
    verified: true,
  },
];

export const homeFaqPreview = faqs.filter((f) => f.showOnHomePreview);
