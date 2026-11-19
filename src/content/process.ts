export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  /** Verified from live site vs proposed for approval */
  status: "verified" | "proposed";
};

/** Compact 3-step flow from live /learn-more */
export const verifiedProcessSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Schedule Your Free Estimate",
    description:
      "We visit your home to measure and plan your new bathroom.",
    status: "verified",
  },
  {
    number: 2,
    title: "Get a Custom Design & Quote",
    description:
      "Choose styles, finishes, and upgrades that fit your budget.",
    status: "verified",
  },
  {
    number: 3,
    title: "We Remodel — You Relax",
    description:
      "Professional installation transforms your bathroom on an agreed schedule.",
    status: "verified",
  },
];

/**
 * Expanded six-stage process proposed in the rebuild brief.
 * Present as proposed until the business confirms operating commitments.
 */
export const proposedProcessSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Contact Bath Renew",
    description: "Share a few details about your bathroom and goals.",
    status: "proposed",
  },
  {
    number: 2,
    title: "Discuss Your Project",
    description: "Talk through layout, finishes, and what matters most at home.",
    status: "proposed",
  },
  {
    number: 3,
    title: "Review Your Estimate",
    description: "Receive a clear estimate based on your selections and conditions.",
    status: "proposed",
  },
  {
    number: 4,
    title: "Confirm Project Details",
    description: "Finalize materials, scope, and scheduling preferences.",
    status: "proposed",
  },
  {
    number: 5,
    title: "Schedule Installation",
    description: "Set an installation window that works for your household.",
    status: "proposed",
  },
  {
    number: 6,
    title: "Review the Finished Work",
    description: "Walk through the completed bathroom together.",
    status: "proposed",
  },
];
