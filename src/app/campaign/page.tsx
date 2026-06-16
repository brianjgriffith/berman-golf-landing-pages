"use client";

import { useEffect, useState } from "react";
import { EMAIL_CONTENT } from "./emailContent";

/* ------------------------------------------------------------------ */
/*  20 More Yards — internal email campaign plan (team view)          */
/*  Soft-gated behind a code. Client-side only — deters casual eyes,  */
/*  not real security. Fine for an internal planning page.            */
/* ------------------------------------------------------------------ */

const ACCESS_CODE = "bermanbomb";

type TrackKey = "A" | "B" | "C" | "D" | "E";

interface Track {
  key: TrackKey;
  name: string;
  color: string;
  audience: string;
  note: string;
}

interface Email {
  id: string;
  track: TrackKey;
  june: number | null; // June 2026 day; null = trigger-based (not on calendar)
  name: string;
  when: string;
  subject: string;
  status: "written" | "outlined";
}

const TRACKS: Track[] = [
  { key: "A", name: "Challenge Invite", color: "#1e88e5", audience: "Full list (not yet registered)", note: "Drives sign-ups to the free 2-day challenge" },
  { key: "B", name: "Opt-In Confirmation", color: "#00897b", audience: "New registrant", note: "Fires instantly when someone registers" },
  { key: "C", name: "Registrant Nurture", color: "#F26B4E", audience: "Everyone registered", note: "Keeps registrants warm + drives live attendance" },
  { key: "D", name: "Post-Challenge & Cohort Close", color: "#8e44ad", audience: "Registrants (attendees + no-shows)", note: "Replay + sell the $2,997 cohort" },
  { key: "E", name: "All-List Cohort Invite", color: "#2e7d32", audience: "List minus registrants", note: "Explains it to non-attendees + cohort offer" },
];

const TRACK_COLOR: Record<TrackKey, string> = Object.fromEntries(
  TRACKS.map((t) => [t.key, t.color])
) as Record<TrackKey, string>;

const EMAILS: Email[] = [
  // Track A — Challenge Invite
  { id: "A1", track: "A", june: 13, name: "The Announcement", when: "Fri Jun 13", subject: "You've still got 20 more yards in you", status: "written" },
  { id: "A2", track: "A", june: 16, name: "Why You Lost the Yards (Ed)", when: "Mon Jun 16", subject: "The ceiling tile that explains your lost distance", status: "written" },
  { id: "A3", track: "A", june: 18, name: "The Proof", when: "Wed Jun 18", subject: "1 of 5… then 5 of 5", status: "written" },
  { id: "A4", track: "A", june: 20, name: "Objection Handler", when: "Fri Jun 20", subject: "\"Jake, I've tried everything\"", status: "written" },
  { id: "A5", track: "A", june: 22, name: "The 10 Quality Years", when: "Mon Jun 22", subject: "How many good golf summers do you have left?", status: "written" },
  { id: "A6", track: "A", june: 23, name: "Tomorrow", when: "Tue Jun 23", subject: "Tomorrow — here's how to show up", status: "written" },
  { id: "A7", track: "A", june: 24, name: "We're Live (last call)", when: "Wed Jun 24 · AM", subject: "We're starting today (last call)", status: "written" },
  // Track B — Confirmation
  { id: "B1", track: "B", june: null, name: "Opt-In Confirmation", when: "Instant on signup", subject: "You're in, {name}! 🎯 Your 20 More Yards spot is locked", status: "written" },
  // Track C — Registrant Nurture
  { id: "C1", track: "C", june: 14, name: "Quick Win (tip)", when: "Sat Jun 14", subject: "{name}, try this before your next round", status: "written" },
  { id: "C2", track: "C", june: 18, name: "Swing Harder = Shorter (tip)", when: "Wed Jun 18", subject: "Why swinging harder makes you shorter", status: "written" },
  { id: "C3", track: "C", june: 20, name: "You're Not Too Old", when: "Sat Jun 20", subject: "Jerry is 86. (Read this if you've ever thought \"I'm too old.\")", status: "written" },
  { id: "C4", track: "C", june: 23, name: "Day Before", when: "Tue Jun 23", subject: "Tomorrow — here's how to show up", status: "written" },
  { id: "C5", track: "C", june: 24, name: "Day 1 — We're Live", when: "Wed Jun 24 · ~8 AM", subject: "We're live this morning 🎯", status: "written" },
  { id: "C6", track: "C", june: 24, name: "Day 1 — Starting NOW", when: "Wed Jun 24 · 10 AM", subject: "🔴 We're starting NOW — come on in", status: "written" },
  { id: "C7", track: "C", june: 25, name: "Day 2 — Morning", when: "Thu Jun 25 · ~8 AM", subject: "Day 2 starts this morning 🎯", status: "written" },
  { id: "C8", track: "C", june: 25, name: "Day 2 — Live NOW", when: "Thu Jun 25 · 10 AM", subject: "🔴 Day 2 is live right now", status: "written" },
  // Track D — Post-Challenge & Cohort Close (copy after sessions)
  { id: "D1", track: "D", june: 25, name: "That's a wrap + replay", when: "Thu Jun 25 · PM", subject: "Tailored from Day 2 transcript", status: "outlined" },
  { id: "D2", track: "D", june: 26, name: "The part everyone rewound", when: "Fri Jun 26 · AM", subject: "Replay driver — best teaching moment", status: "outlined" },
  { id: "D3", track: "D", june: 26, name: "What happens next (the offer)", when: "Fri Jun 26 · PM", subject: "The cohort offer", status: "outlined" },
  { id: "D4", track: "D", june: 27, name: "Proof + objections", when: "Sat Jun 27 · AM", subject: "Testimonials + objection handling", status: "outlined" },
  { id: "D5", track: "D", june: 27, name: "Knowing vs. doing", when: "Sat Jun 27 · PM", subject: "Emotional / why now", status: "outlined" },
  { id: "D6", track: "D", june: 28, name: "Tonight it comes down", when: "Sun Jun 28 · AM", subject: "Double urgency — replay + cart close", status: "outlined" },
  { id: "D7", track: "D", june: 28, name: "Last call — gone at midnight", when: "Sun Jun 28 · PM", subject: "Hard close", status: "outlined" },
  { id: "D8", track: "D", june: 29, name: "Opened a few more slots", when: "Mon Jun 29 · optional", subject: "Scarcity-true reopen", status: "outlined" },
  // Track E — All-List Cohort Invite
  { id: "E1", track: "E", june: 26, name: "Did You Miss This?", when: "Fri Jun 26", subject: "Did you miss this? (You've still got a shot)", status: "written" },
  { id: "E2", track: "E", june: 27, name: "What It Is / Who It's For", when: "Sat Jun 27", subject: "What it is, who it's for, and what it costs", status: "written" },
  { id: "E3", track: "E", june: 28, name: "Closes Tonight (optional)", when: "Sun Jun 28 · PM", subject: "Closes tonight — replay and enrollment both", status: "written" },
];

const MILESTONES: Record<number, string> = {
  24: "🏌️ Challenge Day 1 — LIVE",
  25: "🏌️ Challenge Day 2 — LIVE",
  28: "⛔ Replay down + Cohort closes (midnight)",
};

// June 2026: the 1st is a Monday. Build a Sun–Sat grid covering the month.
// 35 cells: index 0 = May 31, 1–30 = June, 31–34 = July 1–4.
const CAL_CELLS = Array.from({ length: 35 }, (_, i) => {
  if (i === 0) return { label: 31, june: null as number | null };
  if (i <= 30) return { label: i, june: i as number | null };
  return { label: i - 30, june: null as number | null };
});
const WEEKS = Array.from({ length: 5 }, (_, w) => CAL_CELLS.slice(w * 7, w * 7 + 7));
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function emailsForDay(day: number | null): Email[] {
  if (day === null) return [];
  return EMAILS.filter((e) => e.june === day);
}

const WRITTEN = EMAILS.filter((e) => e.status === "written").length;
const OUTLINED = EMAILS.filter((e) => e.status === "outlined").length;

const EMAIL_BY_ID: Record<string, Email> = Object.fromEntries(EMAILS.map((e) => [e.id, e]));

/* ------------------------------------------------------------------ */
/*  Lightweight markdown renderer for the modal email bodies.         */
/*  Supports: **bold**, *italic*, "- " bullets, and [Button text].    */
/* ------------------------------------------------------------------ */

function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Order matters: bold-wrapped button, plain button, bold, italic.
  const regex = /\*\*\[(.+?)\]\*\*|\[(.+?)\]|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined || m[2] !== undefined) {
      const label = (m[1] ?? m[2]) as string;
      nodes.push(
        <span
          key={`${keyBase}-b${i}`}
          className="my-0.5 inline-block rounded-md bg-[#F26B4E] px-3 py-1.5 text-sm font-bold text-white"
        >
          {label}
        </span>
      );
    } else if (m[3] !== undefined) {
      nodes.push(<strong key={`${keyBase}-s${i}`}>{m[3]}</strong>);
    } else if (m[4] !== undefined) {
      nodes.push(<em key={`${keyBase}-i${i}`}>{m[4]}</em>);
    }
    last = regex.lastIndex;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderBody(body: string): React.ReactNode[] {
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];
  let bullets: string[] = [];
  let bi = 0;

  const flushBullets = () => {
    if (bullets.length === 0) return;
    const items = bullets;
    blocks.push(
      <ul key={`ul-${bi++}`} className="my-2 list-disc space-y-1 pl-5">
        {items.map((b, idx) => (
          <li key={idx}>{renderInline(b, `ul${bi}-${idx}`)}</li>
        ))}
      </ul>
    );
    bullets = [];
  };

  lines.forEach((raw, idx) => {
    const line = raw.trimEnd();
    if (line.trim().startsWith("- ")) {
      bullets.push(line.trim().slice(2));
      return;
    }
    flushBullets();
    if (line.trim() === "") return; // blank line = paragraph break (handled by margins)
    blocks.push(
      <p key={`p-${idx}`} className="my-2 leading-relaxed">
        {renderInline(line, `p${idx}`)}
      </p>
    );
  });
  flushBullets();
  return blocks;
}

function EmailModal({ emailId, onClose }: { emailId: string; onClose: () => void }) {
  const email = EMAIL_BY_ID[emailId];
  const content = EMAIL_CONTENT[emailId];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!email) return null;
  const color = TRACK_COLOR[email.track];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="my-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-start justify-between gap-4 px-6 py-4 text-white" style={{ backgroundColor: color }}>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide opacity-90">
              <span className="rounded bg-white/25 px-1.5 py-0.5 font-bold">{email.id}</span>
              <span>{email.when}</span>
            </div>
            <h3 className="mt-1 text-lg font-black leading-tight">{email.name}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-none rounded-full p-1.5 text-white/90 transition hover:bg-white/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Subject + preheader */}
        <div className="border-b border-slate-100 bg-slate-50 px-6 py-3 text-sm">
          <div>
            <span className="font-semibold text-slate-400">Subject:&nbsp;</span>
            <span className="font-bold text-[#1a2b3c]">{email.subject}</span>
          </div>
          {content?.preheader && (
            <div className="mt-1">
              <span className="font-semibold text-slate-400">Preheader:&nbsp;</span>
              <span className="italic text-slate-500">{content.preheader}</span>
            </div>
          )}
          {content?.outlined && (
            <div className="mt-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
              Outlined — copy written after the live sessions
            </div>
          )}
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto px-6 py-5 text-[15px] text-[#1a2b3c]">
          {content ? (
            renderBody(content.body)
          ) : (
            <p className="italic text-slate-400">No copy on file for this email yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function CampaignPlanPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [openEmail, setOpenEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("berman_campaign_ok") === "1") {
      setUnlocked(true);
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === ACCESS_CODE) {
      setUnlocked(true);
      setError(false);
      if (typeof window !== "undefined") sessionStorage.setItem("berman_campaign_ok", "1");
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0f4c81] px-4">
        <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="text-2xl font-black tracking-[0.2em] text-[#0f4c81]">BERMAN&nbsp;GOLF</div>
          <div className="mt-1 text-xs uppercase tracking-widest text-[#1e88e5]">Team Access</div>
          <h1 className="mt-6 text-lg font-bold text-[#1a2b3c]">20 More Yards — Campaign Plan</h1>
          <p className="mt-2 text-sm text-slate-500">Enter the access code to view the email game plan.</p>
          <input
            autoFocus
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Access code"
            className="mt-5 w-full rounded-lg border border-slate-300 px-4 py-3 text-center text-[#1a2b3c] focus:border-[#F26B4E] focus:outline-none focus:ring-2 focus:ring-[#F26B4E]/30"
          />
          {error && <p className="mt-2 text-sm text-[#d93636]">Nope — try again.</p>}
          <button type="submit" className="mt-4 w-full rounded-lg bg-[#F26B4E] px-4 py-3 font-bold text-white transition hover:brightness-105">
            Unlock the plan →
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#eef1f4] text-[#1a2b3c]">
      {/* Header */}
      <header className="bg-[#0f4c81] px-6 py-7 text-center text-white">
        <div className="text-xl font-black tracking-[0.2em]">BERMAN&nbsp;GOLF</div>
        <h1 className="mt-2 text-2xl font-black sm:text-3xl">20 More Yards — Email Campaign Plan</h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-[#9ec5e8]">
          {EMAILS.length} emails across 5 sequences · June 13–29, 2026 · {WRITTEN} written, {OUTLINED} outlined (Track D, written from session transcripts)
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Legend */}
        <section className="mb-8 rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">The 5 sequences</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TRACKS.map((t) => (
              <div key={t.key} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md text-xs font-bold text-white" style={{ backgroundColor: t.color }}>
                  {t.key}
                </span>
                <div className="text-sm leading-tight">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-slate-500">{t.audience}</div>
                  <div className="text-slate-400">{t.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm bg-slate-700" /> Solid = written ✓</span>
            <span className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm border-2 border-dashed border-slate-400 bg-white" /> Dashed = outlined (copy after sessions)</span>
            <span className="flex items-center gap-2"><span>🏌️</span> Live session</span>
            <span className="flex items-center gap-2"><span>⛔</span> Replay down + cohort enrollment closes</span>
          </div>
        </section>

        {/* Calendar */}
        <section className="mb-8 rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">June 2026 — send calendar</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-7 gap-2">
                {DOW.map((d) => (
                  <div key={d} className="pb-1 text-center text-xs font-bold uppercase tracking-wide text-slate-400">{d}</div>
                ))}
                {WEEKS.flat().map((cell, idx) => {
                  const dayEmails = emailsForDay(cell.june);
                  const milestone = cell.june !== null ? MILESTONES[cell.june] : undefined;
                  const muted = cell.june === null;
                  return (
                    <div
                      key={idx}
                      className={`min-h-[104px] rounded-lg border p-1.5 ${muted ? "border-slate-100 bg-slate-50" : "border-slate-200 bg-white"}`}
                    >
                      <div className={`mb-1 text-right text-xs font-bold ${muted ? "text-slate-300" : "text-slate-500"}`}>
                        {cell.label}
                      </div>
                      {milestone && (
                        <div className="mb-1 rounded bg-[#fff4e8] px-1.5 py-1 text-[10px] font-bold leading-tight text-[#b3531d]">
                          {milestone}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {dayEmails.map((e) => (
                          <button
                            key={e.id}
                            type="button"
                            onClick={() => setOpenEmail(e.id)}
                            title={`${e.id} · ${e.name} (${e.when})\n${e.subject}\n\nClick to read the email`}
                            className="cursor-pointer rounded px-1.5 py-0.5 text-[11px] font-bold text-white transition hover:brightness-110 hover:ring-2 hover:ring-offset-1"
                            style={
                              e.status === "written"
                                ? { backgroundColor: TRACK_COLOR[e.track] }
                                : { backgroundColor: "#fff", color: TRACK_COLOR[e.track], border: `1.5px dashed ${TRACK_COLOR[e.track]}` }
                            }
                          >
                            {e.id}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400"><strong>Click any email chip</strong> to read the full copy in a pop-up. <strong>B1 (Confirmation)</strong> isn&apos;t on the calendar — it fires automatically the moment someone signs up.</p>
        </section>

        {/* Track-by-track detail */}
        <section className="space-y-6">
          {TRACKS.map((t) => {
            const list = EMAILS.filter((e) => e.track === t.key);
            return (
              <div key={t.key} className="overflow-hidden rounded-xl bg-white shadow-sm" style={{ borderLeft: `6px solid ${t.color}` }}>
                <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3" style={{ backgroundColor: `${t.color}12` }}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold text-white" style={{ backgroundColor: t.color }}>{t.key}</span>
                    <div>
                      <div className="font-bold leading-tight">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.audience}</div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-slate-500">{list.length} emails</div>
                </div>
                <div className="divide-y divide-slate-100">
                  {list.map((e) => (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => setOpenEmail(e.id)}
                      className="flex w-full flex-col gap-1 px-5 py-3 text-left transition hover:bg-slate-50 sm:flex-row sm:items-center sm:gap-4"
                    >
                      <span className="flex-none rounded px-1.5 py-0.5 text-[11px] font-bold text-white" style={{ backgroundColor: t.color }}>{e.id}</span>
                      <div className="w-32 flex-none text-xs font-semibold text-slate-500">{e.when}</div>
                      <div className="flex-1">
                        <div className="text-sm font-bold leading-tight">{e.name}</div>
                        <div className="text-sm italic text-slate-500">“{e.subject}”</div>
                      </div>
                      <span
                        className={`flex-none self-start rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide sm:self-center ${
                          e.status === "written" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {e.status === "written" ? "Written ✓" : "Outlined"}
                      </span>
                      <span className="hidden flex-none text-slate-300 sm:inline" aria-hidden>›</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
          Internal planning view · Berman Golf · cohort enrollment + replay both close Sun June 28, midnight ET
        </footer>
      </div>

      {openEmail && <EmailModal emailId={openEmail} onClose={() => setOpenEmail(null)} />}
    </main>
  );
}
