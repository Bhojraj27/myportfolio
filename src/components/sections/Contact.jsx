'use client';

import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/Icons';
import { personalInfo } from '../../data/portfolio';
import { SectionContainer, SectionHeading } from '../ui/SectionContainer';

const fieldClass =
  'w-full px-4 py-3 rounded-xl bg-white/[0.07] border border-white/20 text-white text-sm font-body placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/[0.09] transition-all disabled:opacity-60';

const labelClass = 'block text-sm font-medium text-slate-200 mb-2';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      try {
        window.dispatchEvent(new CustomEvent('portfolio:mascot-celebrate'));
      } catch {
        /* ignore */
      }
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Could not send your message. Please email me directly.');
    }
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading tag="Get in touch" title="Let's" highlight="Connect" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 sm:p-8 space-y-5 neon-border">
            {[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Project inquiry' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label htmlFor={`contact-${name}`} className={labelClass}>
                  {label}
                </label>
                <input
                  id={`contact-${name}`}
                  type={type}
                  value={formState[name]}
                  onChange={(e) => setFormState({ ...formState, [name]: e.target.value })}
                  placeholder={placeholder}
                  disabled={status === 'loading'}
                  className={fieldClass}
                  required
                />
              </div>
            ))}
            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                disabled={status === 'loading'}
                className={`${fieldClass} resize-none`}
                required
              />
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-2 text-red-300 text-sm bg-red-500/15 border border-red-500/30 rounded-xl px-4 py-3">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-300 text-sm bg-green-500/15 border border-green-500/30 rounded-xl px-4 py-3">
                <CheckCircle2 size={16} />
                <span>Message sent! I'll get back to you soon.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-soft text-white font-semibold text-sm hover:shadow-[0_0_28px_rgba(234,88,12,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="order-1 lg:order-2">
          <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border h-full">
            <p className="text-slate-200 text-base leading-relaxed mb-8">
              I'm open to full-time roles, freelance projects, and collaborations.
              Send a message — I typically respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, label: 'Location', value: personalInfo.location },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-slate-300 block text-xs mb-0.5 font-medium">{label}</span>
                    {href ? (
                      <a href={href} className="text-white hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/30 transition-all hover:scale-105">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/30 transition-all hover:scale-105">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/30 transition-all hover:scale-105">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
