import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { profileData } from '../data/portfolioData';
import { ArrowUpRight, DotGrid, Roll } from './ui';

const socials = [
  { label: 'GitHub', href: profileData.github },
  { label: 'LinkedIn', href: profileData.linkedin },
  { label: 'X', href: profileData.x },
  { label: 'Instagram', href: profileData.instagram },
];

const field =
  'w-full rounded-2xl border border-[#444850] bg-ink-2 px-[18px] py-3.5 text-base text-[#f5f5f2] placeholder:text-[#7c8089] focus:border-accent focus:outline-none';

type Status = { kind: 'ok' | 'error'; text: string } | null;

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [textCopied, setTextCopied] = useState(false);

  const set = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const flash = (setter: (v: boolean) => void) => {
    setter(true);
    setTimeout(() => setter(false), 2500);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      flash(setEmailCopied);
    } catch {
      setStatus({ kind: 'error', text: 'Could not copy automatically. Please copy the address manually.' });
    }
  };

  const copyMessage = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ kind: 'error', text: 'Please fill in name, email and message first.' });
      return;
    }
    const text = `To: ${profileData.email}\nSubject: ${form.subject || 'Portfolio Inquiry'}\nFrom: ${form.name} (${form.email})\n\n${form.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setStatus(null);
      flash(setTextCopied);
    } catch {
      setStatus({ kind: 'error', text: 'Could not copy automatically. Please copy the text manually.' });
    }
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ kind: 'error', text: 'Please fill in all required fields (name, email and message).' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus({ kind: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    const mailtoSubject = encodeURIComponent(subject.trim() || `Portfolio Contact from ${name.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hi Nand Kishor,\n\n${message.trim()}\n\n---\nSender Name: ${name.trim()}\nSender Email: ${email.trim()}`,
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatus({ kind: 'ok', text: `Opened in your email client. You can also write to ${profileData.email} directly.` });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="px-5 pt-32 pb-5">
      <div className={`relative mx-auto flex max-w-330 flex-col gap-10 overflow-hidden rounded-[40px] p-[clamp(36px,7vw,112px)] text-[#f5f5f2] ${DotGrid}`}>
        <span className="font-mono text-sm text-accent">(04) Say hello</span>
        <h2 className="m-0 font-serif text-[clamp(52px,9.4vw,140px)] leading-[0.92] font-normal tracking-[-0.03em] text-balance">
          Let's make something <em className="text-accent">remarkable.</em>
        </h2>
        <p className="m-0 max-w-[520px] text-xl text-[#b4b7bf] text-pretty">
          I'm open to Android and full-stack web opportunities. Based in {profileData.location}, and happy to talk about
          your next project.
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
          <a
            href={`mailto:${profileData.email}`}
            className="cta inline-flex min-h-[60px] items-center gap-2.5 rounded-full bg-accent px-[34px] text-[19px] font-semibold text-ink"
          >
            <Roll>{profileData.email}</Roll>
            <ArrowUpRight size={20} />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="cta min-h-12 cursor-pointer rounded-full border border-[#444850] bg-transparent px-[22px] text-base font-medium text-[#f5f5f2]"
          >
            {emailCopied ? 'Copied ✓' : 'Copy email'}
          </button>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-base font-medium">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="cta inline-flex min-h-12 items-center rounded-full border border-[#444850] px-[22px]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={submit} noValidate className="mt-4 grid max-w-[820px] gap-4 border-t border-[#2a2d34] pt-10 sm:grid-cols-2">
          <h3 className="m-0 font-serif text-4xl font-normal sm:col-span-2">Or send a message</h3>
          <div>
            <label htmlFor="c-name" className="mb-2 block font-mono text-[13px] text-[#9a9ca3]">Your name *</label>
            <input id="c-name" name="name" autoComplete="name" required className={field} value={form.name} onChange={set('name')} />
          </div>
          <div>
            <label htmlFor="c-email" className="mb-2 block font-mono text-[13px] text-[#9a9ca3]">Your email *</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required className={field} value={form.email} onChange={set('email')} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="c-subject" className="mb-2 block font-mono text-[13px] text-[#9a9ca3]">Subject</label>
            <input id="c-subject" name="subject" placeholder="Project opportunity / hiring inquiry" className={field} value={form.subject} onChange={set('subject')} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="c-message" className="mb-2 block font-mono text-[13px] text-[#9a9ca3]">Your message *</label>
            <textarea id="c-message" name="message" rows={5} required className={`${field} resize-y`} value={form.message} onChange={set('message')} />
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
            <button type="submit" className="cta min-h-14 cursor-pointer rounded-full bg-accent px-8 text-[17px] font-semibold text-ink">
              Send message
            </button>
            <button
              type="button"
              onClick={copyMessage}
              className="cta min-h-14 cursor-pointer rounded-full border border-[#444850] bg-transparent px-7 text-base font-medium text-[#f5f5f2]"
            >
              {textCopied ? 'Copied ✓' : 'Copy as text'}
            </button>
          </div>
          <p
            role="status"
            aria-live="polite"
            className={`m-0 min-h-6 text-[15px] sm:col-span-2 ${status?.kind === 'error' ? 'text-[#ff9b80]' : 'text-[#9fe3c4]'}`}
          >
            {status?.text}
          </p>
        </form>
      </div>
    </section>
  );
}
