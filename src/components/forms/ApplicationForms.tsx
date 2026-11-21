"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export type ApplicationSlug =
  | "junior-advocate"
  | "internship"
  | "empanelment";

type FieldKey =
  | "fullName"
  | "email"
  | "phone"
  | "designation"
  | "education"
  | "enrolment"
  | "message"
  | "consent";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  designation: string;
  education: string;
  enrolment: string;
  message: string;
  consent: boolean;
};

const empty: FormState = {
  fullName: "",
  email: "",
  phone: "",
  designation: "",
  education: "",
  enrolment: "",
  message: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded border border-outline-variant/50 bg-surface p-2.5 text-sm text-on-surface focus:border-secondary focus:ring-0";

type FormsProps = {
  category: ApplicationSlug;
};

/**
 * Two form types requested by client:
 * Form 1 — Own Requirement Form
 * Form 2 — Candidate Form
 * Exact mandatory fields are NOT confirmed — none are hard-required except consent acknowledgement for transmission.
 */
export function ApplicationForms({ category }: FormsProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <OwnRequirementForm category={category} />
      <CandidateForm category={category} />
    </div>
  );
}

function OwnRequirementForm({ category }: FormsProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<Record<FieldKey, string>> = {};
    if (!form.consent) next.consent = "Acknowledgement is required to transmit.";
    if (form.email && !emailPattern.test(form.email)) {
      next.email = "Enter a valid email if provided.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;
    // Functional client-side handoff — server mail wiring pending applications email domain
    router.push(
      `/applications/success?type=own-requirement&category=${category}`,
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-6"
    >
      <h3 className="type-headline-sm text-primary">Form 1 — Own Requirement</h3>
      <p className="mt-2 type-body-sm text-on-surface-variant">
        Chambers-initiated / requirement-led submission. Exact mandatory fields
        pending client confirmation. Routed to{" "}
        <span className="break-all">{siteConfig.applicationsEmail}</span> when
        configured.
      </p>
      <div className="mt-5 space-y-4">
        <Field
          id="own-fullName"
          label="Full name"
          value={form.fullName}
          onChange={(v) => setForm({ ...form, fullName: v })}
        />
        <Field
          id="own-email"
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          error={errors.email}
        />
        <Field
          id="own-phone"
          label="Phone"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
        />
        <Field
          id="own-designation"
          label="Professional designation"
          value={form.designation}
          onChange={(v) => setForm({ ...form, designation: v })}
        />
        <TextArea
          id="own-message"
          label="Requirement / notes"
          value={form.message}
          onChange={(v) => setForm({ ...form, message: v })}
        />
        <Consent
          checked={form.consent}
          onChange={(v) => setForm({ ...form, consent: v })}
          error={errors.consent}
        />
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Transmit Own Requirement Form
        </Button>
      </div>
    </form>
  );
}

function CandidateForm({ category }: FormsProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<Record<FieldKey, string>> = {};
    if (!form.consent) next.consent = "Acknowledgement is required to transmit.";
    if (form.email && !emailPattern.test(form.email)) {
      next.email = "Enter a valid email if provided.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;
    router.push(`/applications/success?type=candidate&category=${category}`);
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-6"
    >
      <h3 className="type-headline-sm text-primary">Form 2 — Candidate Form</h3>
      <p className="mt-2 type-body-sm text-on-surface-variant">
        Candidate-completed application. Educational / professional details are
        optional until field requirements are confirmed. Document upload is
        prepared structurally but file storage is not enabled until approved.
      </p>
      <div className="mt-5 space-y-4">
        <Field
          id="cand-fullName"
          label="Full name"
          value={form.fullName}
          onChange={(v) => setForm({ ...form, fullName: v })}
        />
        <Field
          id="cand-email"
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          error={errors.email}
        />
        <Field
          id="cand-phone"
          label="Phone"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
        />
        <Field
          id="cand-designation"
          label="Professional designation"
          value={form.designation}
          onChange={(v) => setForm({ ...form, designation: v })}
        />
        <Field
          id="cand-education"
          label="Educational qualifications"
          value={form.education}
          onChange={(v) => setForm({ ...form, education: v })}
        />
        <Field
          id="cand-enrolment"
          label="Bar Council enrolment (if applicable)"
          value={form.enrolment}
          onChange={(v) => setForm({ ...form, enrolment: v })}
        />
        <div>
          <label className="mb-1 block type-label-sm text-primary" htmlFor="cand-docs">
            Supporting documents (optional — storage pending approval)
          </label>
          <input
            id="cand-docs"
            type="file"
            className={inputClass}
            disabled
            title="File upload disabled until applications are legally approved and storage is configured"
          />
          <p className="mt-1 type-body-sm text-on-surface-variant">
            Upload disabled until legal approval and secure storage are configured.
          </p>
        </div>
        <TextArea
          id="cand-message"
          label="Statement / covering note"
          value={form.message}
          onChange={(v) => setForm({ ...form, message: v })}
        />
        <Consent
          checked={form.consent}
          onChange={(v) => setForm({ ...form, consent: v })}
          error={errors.consent}
        />
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Transmit Candidate Form
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1 block type-label-sm text-primary" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={inputClass}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <p className="mt-1 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function TextArea({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-1 block type-label-sm text-primary" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className={inputClass}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Consent({
  checked,
  onChange,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 rounded border-outline text-primary focus:ring-0"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="type-body-sm leading-snug text-on-surface-variant">
          I acknowledge this transmission is administrative only, does not create
          an advocate-client relationship, and is subject to review under
          applicable professional rules. Application portals remain pending legal
          approval for public use.
        </span>
      </label>
      {error && (
        <p className="mt-1 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
