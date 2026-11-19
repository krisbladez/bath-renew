export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  projectDescription: string;
  projectType?: string;
  zipCode?: string;
  website?: string; // honeypot
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigits = (value: string) => value.replace(/\D/g, "");

export function validateContactPayload(input: ContactPayload): {
  ok: boolean;
  errors: FieldErrors;
} {
  const errors: FieldErrors = {};

  if (!input.fullName?.trim() || input.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!input.email?.trim() || !emailPattern.test(input.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = phoneDigits(input.phone || "");
  if (digits.length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (
    !input.projectDescription?.trim() ||
    input.projectDescription.trim().length < 10
  ) {
    errors.projectDescription =
      "Please describe your project (at least a short sentence).";
  }

  if (input.zipCode && !/^\d{5}(-\d{4})?$/.test(input.zipCode.trim())) {
    errors.zipCode = "Enter a valid ZIP code.";
  }

  return { ok: Object.keys(errors).length === 0, errors };
}
