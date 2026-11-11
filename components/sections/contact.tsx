"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteProfile } from "@/lib/content/site";

type FormStatus = "default" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("default");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "default") {
      setStatus("default");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as {
        message?: string;
        errors?: FieldErrors;
      };

      if (!response.ok) {
        setFieldErrors(result.errors ?? {});
        setErrorMessage(result.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-background px-4 text-foreground outline-none transition focus:border-accent";
  const errorClass = "mt-1 text-xs text-error";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-surface/30">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32 xl:px-10">
        <Reveal>
          <SectionHeading
            label={siteProfile.contact.sectionLabel}
            title={siteProfile.contact.heading}
            description={siteProfile.contact.message}
          />
          <div className="mt-8 space-y-4">
            <div className="flex gap-3 text-sm text-text-muted">
              <MapPin className="shrink-0 text-accent-secondary" size={19} aria-hidden="true" />
              {siteProfile.location} (Remote)
            </div>
            {siteProfile.phone ? (
              <div className="flex gap-3 text-sm text-text-muted">
              <Phone className="shrink-0 text-accent-secondary" size={19} aria-hidden="true" />
              {siteProfile.phone}
              </div>
            ) : null}
            {siteProfile.email ? (
              <div className="flex gap-3 text-sm text-text-muted">
              <Mail className="shrink-0 text-accent-secondary" size={19} aria-hidden="true" />
                <a className="transition-colors hover:text-foreground" href={`mailto:${siteProfile.email}`}>
                  {siteProfile.email}
                </a>
              </div>
            ) : null}
          </div>
        </Reveal>
        <Reveal>
          <Card>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground">Name</label>
                <input id="contact-name" name="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} required autoComplete="name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "contact-name-error" : undefined} className={inputClass} />
                {fieldErrors.name ? <p id="contact-name-error" className={errorClass}>{fieldErrors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground">Email</label>
                <input id="contact-email" name="email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} required autoComplete="email" aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "contact-email-error" : undefined} className={inputClass} />
                {fieldErrors.email ? <p id="contact-email-error" className={errorClass}>{fieldErrors.email}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">Subject</label>
                <input id="contact-subject" name="subject" value={form.subject} onChange={(event) => updateField("subject", event.target.value)} required aria-invalid={Boolean(fieldErrors.subject)} aria-describedby={fieldErrors.subject ? "contact-subject-error" : undefined} className={inputClass} />
                {fieldErrors.subject ? <p id="contact-subject-error" className={errorClass}>{fieldErrors.subject}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={(event) => updateField("message", event.target.value)} required minLength={20} rows={6} aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "contact-message-error" : undefined} className="mt-2 w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent" />
                {fieldErrors.message ? <p id="contact-message-error" className={errorClass}>{fieldErrors.message}</p> : null}
              </div>
              <input name="website" value={form.website} onChange={(event) => updateField("website", event.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              {status === "success" ? <p role="status" className="text-sm text-green-300">Thanks, your message has been sent. I will be in touch soon.</p> : null}
              {status === "error" ? <p role="alert" className="text-sm text-error">{errorMessage}</p> : null}
              <button type="submit" disabled={status === "submitting"} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                {status === "submitting" ? "Sending..." : "Send Enquiry"}
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
