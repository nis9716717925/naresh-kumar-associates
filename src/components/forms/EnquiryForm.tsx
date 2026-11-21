"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

type FormState = {
  fullName: string;
  designation: string;
  email: string;
  forum: string;
  message: string;
  consent: boolean;
};

const initial: FormState = {
  fullName: "",
  designation: "",
  email: "",
  forum: "[PLACEHOLDER: Forum of interest]",
  message: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Name is required.";
    if (!emailPattern.test(form.email)) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Brief context is required.";
    if (!form.consent) next.consent = "Consent is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    router.push("/contact/success");
  }

  const inputClass =
    "w-full rounded border border-outline-variant/50 bg-surface p-2.5 text-sm text-on-surface focus:border-secondary focus:ring-0";

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block type-label-sm text-primary" htmlFor="fullName">
            Full Legal Name *
          </label>
          <input
            id="fullName"
            className={inputClass}
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            placeholder="Sri / Smt. [First Last Name]"
            required
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-error" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1 block type-label-sm text-primary" htmlFor="designation">
            Designation / Organization
          </label>
          <input
            id="designation"
            className={inputClass}
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
            placeholder="Individual / Entity Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block type-label-sm text-primary" htmlFor="email">
            Official Email Address *
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="counsel@entity.in"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1 block type-label-sm text-primary" htmlFor="forum">
            Forum of Jurisdiction
          </label>
          <select
            id="forum"
            className={inputClass}
            value={form.forum}
            onChange={(e) => setForm({ ...form, forum: e.target.value })}
          >
            <option>[PLACEHOLDER: Forum of interest]</option>
            <option>Supreme Court of India</option>
            <option>National Consumer Disputes Redressal Commission (NCDRC)</option>
            <option>Debt Recovery Tribunal (DRT)</option>
            <option>National Company Law Tribunal (NCLT)</option>
            <option>Arbitration Matters</option>
            <option>Commercial Disputes</option>
            <option>Trademark / Intellectual Property Rights (IPR)</option>
            <option>Corporate Contracts / Litigation</option>
            <option>Other / not specified</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block type-label-sm text-primary" htmlFor="message">
          Brief Procedural Context *
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Specify case number, forum, listing stage, or statutory query..."
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 rounded border-outline text-primary focus:ring-0"
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            required
          />
          <span className="type-body-sm leading-tight text-on-surface-variant">
            I acknowledge that this transmission is purely administrative and
            informational, and does not constitute solicitation or create an
            advocate-client relationship under the Advocates Act, 1961. I consent
            to processing of this enquiry as described in the Privacy Policy.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-error" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send enquiry
        </Button>
      </div>
    </form>
  );
}