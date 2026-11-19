import type { ProcessStep } from "@/content/process";

type Props = {
  steps: ProcessStep[];
  showStatusNote?: boolean;
};

export function ProcessSteps({ steps, showStatusNote = false }: Props) {
  const hasProposed = steps.some((s) => s.status === "proposed");

  return (
    <div>
      {showStatusNote && hasProposed ? (
        <p className="mb-6 rounded-lg border border-amber-300/70 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          Expanded process stages below are proposed for confirmation and are not yet firm
          operating commitments.
        </p>
      ) : null}
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number} className="surface-card p-5 sm:p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
              {step.number}
            </div>
            <h3 className="text-lg text-navy-deep">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
