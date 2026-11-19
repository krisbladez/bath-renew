type EventName =
  | "estimate_submit_success"
  | "click_to_call"
  | "click_to_text"
  | "promotion_cta_click"
  | "service_cta_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  name: EventName,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
