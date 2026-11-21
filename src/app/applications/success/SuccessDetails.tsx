"use client";

import { useSearchParams } from "next/navigation";

export function ApplicationsSuccessDetails() {
  const params = useSearchParams();
  const type = params.get("type");
  const category = params.get("category") ?? "general";
  const formType =
    type === "own-requirement"
      ? "Own Requirement Form"
      : type === "candidate"
        ? "Candidate Form"
        : "Application form";

  return (
    <p className="type-body-md text-on-surface-variant">
      {formType} for category “{category}” was accepted in the draft client-side
      workflow.
    </p>
  );
}
