"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  type ContactPayload,
  type FieldErrors,
  validateContactPayload,
} from "@/lib/validation";
import { services } from "@/content/services";

const projectTypes = [
  "Not sure yet",
  ...services.filter((s) => s.published).map((s) => s.title),
  "Other",
];

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setSuccess(false);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: ContactPayload = {
      fullName: String(data.get("fullName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      projectDescription: String(data.get("projectDescription") || ""),
      projectType: String(data.get("projectType") || ""),
      zipCode: String(data.get("zipCode") || ""),
      website: String(data.get("website") || ""),
    };

    const client = validateContactPayload(payload);
    setErrors(client.errors);
    if (!client.ok) return;

    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        configured?: boolean;
      };

      if (!response.ok || !result.ok) {
        setFormError(
          result.error ||
            "We could not send your request. Please call or email Bath Renew directly.",
        );
        return;
      }

      setSuccess(true);
      trackEvent("estimate_submit_success");
      form.reset();
      setErrors({});
    } catch {
      setFormError(
        "Network error while sending your request. Please call or email Bath Renew directly.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="surface-card space-y-5 p-5 sm:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full name"
          required
          error={errors.fullName}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email address"
          type="email"
          required
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          required
          error={errors.phone}
          autoComplete="tel"
        />
        <Field id="zipCode" label="ZIP code" error={errors.zipCode} autoComplete="postal-code" />
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-navy">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink"
          defaultValue="Not sure yet"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="projectDescription"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Project description <span className="text-accent">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={5}
          required
          className="w-full rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink"
          aria-invalid={Boolean(errors.projectDescription)}
          aria-describedby={
            errors.projectDescription ? "projectDescription-error" : "projectDescription-help"
          }
        />
        <p id="projectDescription-help" className="mt-1 text-xs text-muted">
          Share rooms involved, goals, and timing if you know them.
        </p>
        {errors.projectDescription ? (
          <p id="projectDescription-error" className="mt-1 text-sm text-red-700" role="alert">
            {errors.projectDescription}
          </p>
        ) : null}
      </div>

      {/* Honeypot */}
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-xs text-muted">
        By submitting, you agree we may contact you about your project. See our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>

      {formError ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {formError}
        </p>
      ) : null}
      {success ? (
        <p
          className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900"
          role="status"
        >
          Thanks — your estimate request was sent. Bath Renew will follow up using the contact
          details you provided.
        </p>
      ) : null}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Request Free Estimate"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label} {required ? <span className="text-accent">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
