/* ------------------------------------------------------------------ */
/*  Email bodies for the /campaign modal viewer.                      */
/*  Tracks A, B, C, E = final written copy. Track D = concept outline */
/*  (full copy gets written from the live session transcripts).       */
/*  Light markdown: **bold**, *italic*, "- " bullets, [Button text].  */
/* ------------------------------------------------------------------ */

export interface EmailBody {
  preheader?: string;
  outlined?: boolean; // true = plan/outline, not final send copy
  body: string;
}

export const EMAIL_CONTENT: Record<string, EmailBody> = {
  /* ---------- Track A — Challenge Invite ---------- */
  A1: {
    preheader: "I'll prove it to you — live and free, June 24 + 25.",
    body: `{{contact.first_name}}, I'm going to make you a promise.

You have **at least 20 more yards** sitting in your body right now. Not in a new driver. Not in a swing rebuild. In *your* body.

And over **2 free live days — Wednesday June 24 and Thursday June 25 at 10 AM ET** — I'm going to show you exactly how to get them out.

I'm calling it the **20 More Yards Challenge.**

Here's the thing nobody at the pro shop will tell you: you didn't lose your distance because you got old. You lost it because your body stopped firing the right muscles in the right order — so all your power leaks out before it ever reaches the ball.

That's not a swing problem. It's a **body** problem. And body problems are fixable at any age — I've done it with golfers in their 70s, 80s, and 90s.

Two days. Zero cost. The exact protocol my senior golfers are using to add 20+ yards without touching their swing.

**[Save my spot in the free challenge →]**

Let's have some fun, baby. Yeah!

Dr. Jake Berman, PT, DPT

**P.S.** This is live, not a recording — I'll be coaching you through it in real time, June 24 + 25 at 10 AM ET. Grab your spot now so you don't lose it: **[Reserve my free seat →]**`,
  },
  A2: {
    preheader: "A 72-year-old scratch golfer taught me everything.",
    body: `{{contact.first_name}}, let me tell you about Ed.

Ed was **72, a scratch golfer**, and I finally got him into my simulator to test him. His practice swings were picture-perfect — clubhead nowhere near the ceiling.

Then he teed up a real ball, swung for real… and his driver smashed **straight up through my ceiling tiles.** Dust everywhere.

We thought it was a fluke. Teed up another. Perfect practice swing again — and *BAM*, into the ceiling a second time.

So I ran the physics. And there it was.

Ed had plenty of clubhead **speed** — but almost no muscle **power** behind it. The instant that fast club met the stationary ball, there was no force to drive through it, so the head deflected up.

That was my whole "aha" moment: **clubhead speed without muscle power is useless.**

It's why you can swing as hard as you ever did and watch the ball come up 40 yards short. The speed's there. The power leaked out.

In the free challenge, I'll show you where *your* power is leaking — and the simple way to plug it. No new swing. No new driver. Just your body, working the way it's supposed to.

**[Show me where my distance went →]**

Simple. Not easy. But simple.

Dr. Jake Berman, PT, DPT

**P.S.** This is the foundation of everything I teach, and it's Day 1 of the challenge. We go live June 24 at 10 AM ET. **[Save my free spot →]**`,
  },
  A3: {
    preheader: "What happens when you train the body instead of the swing.",
    body: `{{contact.first_name}}, I don't want you to take my word for it. Take theirs.

**Jon, 60.** Came to me hitting "army golf" — left, right, left, right, no idea where it was going. With his 7-iron, **1 of 5 shots was playable.** After working the body the right way? **5 of 5 — all on the green.** And he picked up 13 yards of carry he wasn't even chasing.

**Antonio, 63, from São Paulo, Brazil.** In just **3 weeks**, his driver went from a 220-yard average to **236**, with a couple at 245. His words: *"Now we are talking about the physics of the body. That is totally different."*

**Dr. Ryan, 68 — an orthopedic surgeon.** A man whose entire career is the human body looked at my method and confirmed the science is right: *"You can get all the speed you want. Unless you've got a stable base to generate power, it's not going to translate into distance."*

**And Jerry. Jerry is 86.** He almost didn't try it. After his first session he said, *"The first lesson was worth a hundred bucks."*

Different ages. Different countries. Different handicaps. **Same result** — because we're not fixing swings. We're fixing bodies.

That's exactly what I'll walk you through, live and free, June 24 + 25.

**[I want results like these →]**

Let the big dog eat, baby!

Dr. Jake Berman, PT, DPT

**P.S.** Jerry is 86 and gave it a shot. If he can, what's really stopping you? **[Reserve my free seat →]**`,
  },
  A4: {
    preheader: "Too old, too injured, too far away, tried it all — let's talk.",
    body: `{{contact.first_name}}, every time I open a challenge like this, the same four worries come in. Let me knock them down right now.

**"I'm too old."**
Jerry is 86. Dave is 90 — he came to me to walk better and ended up beating me on the 9th hole. Age is not the barrier you've been told it is.

**"I've got injuries — a bad back, a bad hip."**
Pete is 78. He'd had a **total hip replacement and both shoulders replaced**, with sharp pain on every swing. Within **45 minutes** of learning to use his core and glutes instead of his arms, he was hitting **pain-free.** Done right, the golf swing is gentle on the body.

**"I've tried lessons. They never stick."**
That's because traditional lessons hand a senior a position to copy with muscles his brain can't control yet. I don't give you swing thoughts — I put your body in the right place and retrain it. Dick, a **75-year-old 2-handicap**, came in *certain* swing changes don't last. He left a believer.

**"It's virtual — can that really work?"**
Ask Antonio in Brazil. As he put it: *"Jake, we'll kick your ass no matter where you are."* It's live, it's individualized, and I'm watching and correcting you the whole time.

Whatever your version of "but…" is — I've probably already coached someone through it.

**[Okay Jake, I'm in →]**

Keep on keeping on, baby!

Dr. Jake Berman, PT, DPT

**P.S.** The challenge is free and it's live June 24 + 25 at 10 AM ET. Come find out which "but" was holding you back. **[Save my spot →]**`,
  },
  A5: {
    preheader: "Be honest with yourself for a second.",
    body: `{{contact.first_name}}, I want to ask you something, and I mean it with love.

How many more summers do you want to spend hitting it **40 yards shorter** than you used to — watching your buddies' drives sail past yours, reaching for a hybrid while they flip a wedge at the pin?

Here's how I see it: you've got maybe **10 quality golf years** left where your body can really do what you ask of it. Ten.

You can spend them **out-driving your buddies** — or watching them out-drive you. That's the whole choice.

And the worst part of waiting? Every season you stay stiff and shut down, your body locks up a little more, and that 20 yards gets a little harder to win back.

The good news: it's not gone. It's locked up. And in **2 free days — this Wednesday and Thursday, 10 AM ET** — I'll show you how to unlock it.

If you don't plan on dying this year… why not plan on being better?

**[I'm done waiting — save my spot →]**

Keep moving and grooving!

Dr. Jake Berman, PT, DPT

**P.S.** We start **Wednesday, June 24 at 10 AM ET.** This is the last weekend you'll spend short off the tee if you don't want it to be. **[Reserve my free seat →]**`,
  },
  A6: {
    preheader: "Day 1 of the 20 More Yards Challenge is almost here.",
    body: `{{contact.first_name}}, we go live **tomorrow.**

Here's everything you need to know:

📅 **Day 1: Wednesday, June 24 — 10:00 AM ET**
📅 **Day 2: Thursday, June 25 — 10:00 AM ET**
💻 **Where:** Live online. Register and you'll get the link.
💵 **Cost:** Free.

A few things to make tomorrow count:
- **Show up live if you can.** I'll be coaching in real time — this isn't a video you watch later.
- **Clear some space.** You'll be moving your body, not just listening. No clubs or balls required for Day 1.
- **Bring your skepticism.** The golfers who get the most out of this are usually the ones who walked in least sure it would work.

By the end of Day 2, you'll know exactly where your distance has been hiding — and how to start taking it back this summer.

If you haven't grabbed your spot yet, do it now so you get the link:

**[Lock in my free seat for tomorrow →]**

We're rolling, baby!

Dr. Jake Berman, PT, DPT

**P.S.** Doors are open right up until we start at 10 AM ET tomorrow — but don't cut it close and miss the warm-up. **[Register now →]**`,
  },
  A7: {
    preheader: "Day 1 of the 20 More Yards Challenge — 10 AM ET.",
    body: `{{contact.first_name}}, this is it. **Day 1 is today at 10:00 AM ET.**

In a couple of hours I'll be live, walking senior golfers through the exact protocol to add 20+ yards — without rebuilding a single thing about their swing.

If you've been sitting on the fence all week, here's your nudge: **the only people who gain the yards are the ones who show up.**

It costs you nothing but the next couple of hours. And it might be the morning you stop losing distance and start taking it back.

There's still time to jump in before we begin:

**[Get me in for Day 1 →]**

See you in there. Let's have some fun, baby — yeah!

Dr. Jake Berman, PT, DPT

**P.S.** Can't make 10 AM sharp? Register anyway and get in as soon as you can — Day 2 is tomorrow at the same time, and you'll want the Day 1 context. **[Join the challenge →]**`,
  },

  /* ---------- Track B — Opt-In Confirmation ---------- */
  B1: {
    preheader: "Save the dates + 3 quick things to do before we go live.",
    body: `{{contact.first_name}}, you're in. And I'm fired up you're here.

You just did something most golfers your age never do — you stopped accepting that your best drives are behind you. **They're not.** You've got 20+ more yards in you, and over two live days I'm going to show you exactly how to get them out — **without rebuilding your swing.**

Here's where to be:

**📅 Day 1 — Wednesday, June 24 · 10:00 AM ET**
**📅 Day 2 — Thursday, June 25 · 10:00 AM ET**
**💻 Live online (you'll get your join link by email)**
**💵 Free — your seat is already saved**

Do these 3 quick things right now so you don't miss a thing:

**1. Add both days to your calendar.** Block 10:00 AM ET on June 24 and 25 so nothing sneaks in.

**2. Whitelist my emails.** Add **distance@bermangolf.com** to your contacts so your join link lands in your inbox and not your spam folder.

**3. Plan to show up LIVE.** This isn't a video you watch whenever. I'll be coaching in real time — the golfers who show up live are the ones who walk away with the yards.

Quick heads-up on what's coming: most seniors think they lost their distance to age. You didn't. You lost it to a body that stopped firing the right muscles in the right order — so your power leaks out before it ever reaches the ball. On Day 1, I'll show you exactly where *your* power is leaking and how to plug it. It's simpler than you think.

Simple. Not easy. But simple.

One last thing — **hit reply and tell me the single biggest thing killing your distance right now.** Is it the slice? Coming up short? Out-driven by your buddies? I read these, and it helps me make the challenge hit home for you.

See you on June 24, {{contact.first_name}}. Let's have some fun, baby — yeah!

**Dr. Jake Berman, PT, DPT**
*Doctor of Physical Therapy · Biomechanics Expert*

**P.S.** Put it in your calendar *right now* while you're thinking about it — Day 1 is **Wednesday, June 24 at 10:00 AM ET.** The golfers who block the time are the ones who actually show up and gain the yards. Don't let this be the summer you *almost* fixed your distance.`,
  },

  /* ---------- Track C — Registrant Nurture ---------- */
  C1: {
    preheader: "A 2-minute warm-up that wakes up your power.",
    body: `{{contact.first_name}}, while you're waiting on the challenge, here's a quick win you can use this weekend.

Most senior golfers have what I bluntly call **weak ass syndrome** — glutes that have gone to sleep. And your glutes are the biggest, most powerful muscles you own. When they're asleep, you've got nothing to push into the ground with — and no ground force means no distance. Period.

So before your next round, wake them up. Two minutes:

- **10 standing glute squeezes** — clench hard for 3 seconds, release.
- **10 slow bodyweight squats** — feel your backside do the work, not your knees.
- **10 hip hinges** — push your rear toward the wall behind you, like you're shutting a car door with your butt.

That's it. You'll feel more stable and more connected to the ground on your very first tee shot.

Here's the thing: this is just a taste. On **June 24 + 25** I'll show you the full protocol — how to keep those muscles firing *in the right order* through your entire swing, so the power actually reaches the ball.

Keep moving and grooving!

**Dr. Jake Berman, PT, DPT**

**P.S.** Try the 2-minute wake-up before you play this weekend, then hit reply and tell me if you felt steadier. I read every one.`,
  },
  C2: {
    preheader: "The ceiling tile that explains your lost distance.",
    body: `{{contact.first_name}}, quick question: when you started losing distance, did you try to swing *harder* to get it back?

Almost everyone does. And it's exactly backwards. Let me tell you about Ed.

Ed was **72, a scratch golfer.** In my simulator his practice swings were picture-perfect — clubhead nowhere near the ceiling. Then he swung at a real ball and his driver smashed **straight up through my ceiling tiles.** Twice.

So I ran the physics. Ed had plenty of clubhead **speed** — but almost no muscle **power** behind it. The instant that fast club met the ball, there was nothing to drive through it, so the head deflected up.

Here's what that means for you: **speed without power doesn't go anywhere.** And when you swing harder with a body that isn't firing right, you just add tension — which wrecks your sequence and makes you even shorter *and* more crooked.

The answer was never more effort. It's a body that delivers the power you already have, efficiently. That's the whole game — and it's exactly what we'll build together on June 24 + 25.

Simple. Not easy. But simple.

**Dr. Jake Berman, PT, DPT**

**P.S.** If "just swing easy" never worked for you either, good — you're going to love what we do live. See you June 24 at 10 AM ET.`,
  },
  C3: {
    preheader: "You are not too old for this. Here's the proof.",
    body: `{{contact.first_name}}, somewhere in the back of your mind, there might be a quiet voice saying: *"this probably won't work for me — I'm too old."*

Let me put that to bed right now.

- **Jerry is 86.** After his very first session, he said, *"that was worth a hundred bucks."*
- **Pete is 78** — total hip replacement, *both* shoulders replaced, pain on every swing. Within **45 minutes** of learning to use his core and glutes instead of his arms, he was hitting **pain-free.**
- **Dave is 90.** He came to me just to walk better… and ended up beating me on the 9th hole.

Age isn't the barrier. A body that's been allowed to shut down is — and that is reversible at **any** age. I've proven it over and over.

Here's what I tell everyone: **if you don't plan on dying this year, why not plan on being better?**

You've got good golf left, {{contact.first_name}}. Maybe 10 quality years where your body can really do what you ask of it. Let's spend them **out-driving your buddies** — not watching them out-drive you.

That starts June 24.

Let the big dog eat, baby!

**Dr. Jake Berman, PT, DPT**

**P.S.** Day 1 is **Wednesday, June 24 at 10:00 AM ET.** If Jerry can show up at 86, you and I have no excuses. See you there.`,
  },
  C4: {
    preheader: "Day 1 of your 20 More Yards Challenge is almost here.",
    body: `{{contact.first_name}}, this is the one you've been waiting for. **We go live tomorrow.**

Here's everything you need:

📅 **Day 1 — Wednesday, June 24 · 10:00 AM ET**
📅 **Day 2 — Thursday, June 25 · 10:00 AM ET**
💻 **Live online** — I'll send your join link in the morning (it's also in your confirmation email)
💵 **Free** — you're already registered

Three things to make it count:

- **Show up live if you can.** I'm coaching in real time — this isn't a video you catch later.
- **Clear a little space.** You'll be moving your body. No clubs or balls needed for Day 1.
- **Bring your skepticism.** The golfers who get the most out of this are usually the ones who walked in least sure it would work.

Block the time right now so nothing sneaks in:

**[Add Day 1 to My Calendar →]**

We're rolling, baby!

**Dr. Jake Berman, PT, DPT**

**P.S.** Set an alarm for 9:55 AM ET tomorrow. The warm-up matters — you'll want to be there from the very start.`,
  },
  C5: {
    preheader: "Day 1 starts at 10:00 AM ET — here's your link.",
    body: `{{contact.first_name}}, today's the day. **Day 1 is at 10:00 AM ET** — just a couple hours away.

Here's your link to join live:

**[Join the Live Session →]**

A few last things before we start:

- **Get there a couple minutes early** so you're settled in.
- **Clear some space** to move around.
- **Show up ready to work.** The golfers who lean in are the ones who walk away with the yards.

This might be the morning you stop losing distance and start taking it back. I can't wait to get into it with you.

See you in there. Let's have some fun, baby — yeah!

**Dr. Jake Berman, PT, DPT**

**P.S.** Can't make 10:00 AM sharp? Jump in whenever you can — and remember **Day 2 is tomorrow at the same time.** You'll want both.`,
  },
  C6: {
    preheader: "Day 1 is live this second. Here's your link.",
    body: `{{contact.first_name}}, we just went live. **Day 1 is happening right now.**

Don't overthink it — grab your spot and jump in:

**[Join the Live Session →]**

A few minutes late is totally fine. We're just getting warmed up, and there's still plenty of time to find your 20 yards today.

But don't wait too long — the good stuff starts early, and I don't want you to miss it.

Get in here, {{contact.first_name}}. Let's have some fun, baby — yeah!

**Dr. Jake Berman, PT, DPT**

**P.S.** If life gets in the way this morning, **Day 2 is tomorrow at 10:00 AM ET** — but live is where it happens, so come in now if you possibly can.`,
  },
  C7: {
    preheader: "Today we turn it into yards you can feel. 10:00 AM ET.",
    body: `{{contact.first_name}}, Day 2 is today at **10:00 AM ET** — and this is the one that ties it all together.

Yesterday we found where your power's been leaking. **Today we turn it into yards you can actually feel.**

If you were with me on Day 1, you already felt something shift — bring what you practiced, because we build right on top of it.

And if today is your first session? You're right on time. Day 2 stands on its own, and I'll get you caught up fast. Don't talk yourself out of it.

Here's your link:

**[Join Day 2 Live →]**

Show up ready to work. This is the session where it clicks.

See you at 10, {{contact.first_name}}. Let's have some fun, baby — yeah!

**Dr. Jake Berman, PT, DPT**

**P.S.** This is the **last live session of the challenge** — there's no "next time" this round. If you've been meaning to jump in, today is the day.`,
  },
  C8: {
    preheader: "We just started — come on in.",
    body: `{{contact.first_name}}, we're live — **Day 2 is happening right now.**

This is the final session, and it's the one where everything comes together. Don't overthink it — jump in:

**[Join the Live Session →]**

A few minutes late is totally fine. Get in here — today's the day it all clicks into place.

Let's finish strong, {{contact.first_name}}. Let's have some fun, baby — yeah!

**Dr. Jake Berman, PT, DPT**

**P.S.** This is your **last live session of the challenge.** If there's any way you can be there, be there — this is the part you don't want to miss.`,
  },

  /* ---------- Track D — Post-Challenge & Cohort Close (OUTLINE) ---------- */
  /* Full copy is written after the live sessions, from the transcripts.    */
  D1: {
    outlined: true,
    body: `*Outline only — final copy written from the Day 2 transcript.*

**Role:** That's a wrap — here's your replay. *(Send: Thu June 25, evening, right after Day 2.)*

**Type:** Replay (90%) / cohort tease (10%)

**Covers:**
- Thank them, celebrate the room's energy, recap the core transformation of the 2 days.
- Deliver the replay link + the deadline ("up through Sun June 28, then it's gone").
- Soft tease: "If you want help actually *implementing* this over the next 6 weeks, I'll tell you about that in a day or two."

**Transcript plug:** Jake's biggest closing moment from Day 2; any live wins/results attendees reported on the call; a signature quote to end on.`,
  },
  D2: {
    outlined: true,
    body: `*Outline only — final copy written from the session transcripts.*

**Role:** The part everyone rewound. *(Send: Fri June 26, morning.)*

**Type:** Replay driver. Light cohort mention in P.S.

**Covers:**
- Pull ONE standout teaching/aha from the sessions and expand on it briefly — then send them to the replay to see it in full.

**Transcript plug:** the single best teaching moment or "lightbulb" exchange; a quote where someone *got it* live.`,
  },
  D3: {
    outlined: true,
    body: `*Outline only — final copy written from the session transcripts.*

**Role:** What happens next — the Senior Golf Mastery Cohort. *(Send: Fri June 26 late afternoon / Sat June 27 AM.)*

**Type:** Cohort (core offer)

**Covers:**
- The formal pitch. Bridge logic: *"In the challenge you learned WHERE your distance went. In the cohort, I work with you for 6 weeks to actually take it back."*
- Lay out what's included (6 weeks live group coaching, complete course, all bonuses, 1 year Clubhouse), the price ($2,997), who it's for, and the enrollment deadline.

**Transcript plug:** tie 2–3 specific things taught in the challenge to how the cohort goes deeper on each.`,
  },
  D4: {
    outlined: true,
    body: `*Outline only — final copy written from the session transcripts.*

**Role:** Proof — they were exactly where you are. *(Send: Sat June 27, morning.)*

**Type:** Cohort (proof / objections)

**Covers:**
- Testimonial stack tailored to objections: Jon (1/5→5/5 consistency), Antonio (220→236, "physics of the body"), Dr. Ryan (orthopedic surgeon credibility), Dick (low-handicap skeptic), Jerry (86). Honor accuracy checkpoints.
- Address the big 3: "Is it for me?" / "Is it worth $2,997?" / "Am I too old?"

**Transcript plug:** any objection a live attendee raised + how Jake answered it in the moment (gold — real-time objection handling).`,
  },
  D5: {
    outlined: true,
    body: `*Outline only — final copy written from the session transcripts.*

**Role:** Knowing isn't the same as doing. *(Send: Sat June 27, evening.)*

**Type:** Mix (replay urgency + cohort)

**Covers:**
- Emotional / why-now. The gap between learning it in a free challenge and actually ingraining it. The 10 quality golf years. Out-drive your buddies vs. watch them out-drive you.
- Dual CTA: replay is almost gone AND the cohort is how you make it permanent.

**Transcript plug:** an emotional beat from the sessions; the "downward death spiral" framing if Jake used it.`,
  },
  D6: {
    outlined: true,
    body: `*Outline only — final copy written from the session transcripts.*

**Role:** Tonight it all comes down. *(Send: Sun June 28, morning.)*

**Type:** Mix, urgency-led

**Covers:**
- Double urgency: replay dies at midnight AND cohort enrollment closes at midnight. Last full day.
- Quick recap of what they get + a clean "here's how to enroll."

**Transcript plug:** a punchy Jake line that captures the whole challenge in one sentence.`,
  },
  D7: {
    outlined: true,
    body: `*Outline only — final copy written from the session transcripts.*

**Role:** Last call — gone at midnight. *(Send: Sun June 28, ~6–8 PM, final hours.)*

**Type:** Mix, hard close

**Covers:**
- Short, punchy, final push. Replay + enrollment both close tonight. No new arguments — just the deadline and a clear button.

**Transcript plug:** end on Jake's most memorable quote of the two days.`,
  },
  D8: {
    outlined: true,
    body: `*Outline only — optional, planned. Final copy written from the session transcripts.*

**Role:** We opened up a few more slots. *(Send: Mon June 29 or Tue June 30.)*

**Type:** Cohort (reopen)

**Covers:**
- The deadline was real and passed — now a genuine, scarcity-true reopen: "The response was bigger than expected, so I opened a few more spots in the cohort. They're limited, and this is the last time."
- Keep the slot count believable and actually cap it. New short deadline (e.g., 24–48 hrs).
- Best for: people who clicked/watched but didn't buy. Consider sending only to engaged non-buyers rather than the whole list.

**Transcript plug:** reuse the strongest proof/quote from D4/D7.`,
  },

  /* ---------- Track E — All-List Cohort Invite ---------- */
  E1: {
    preheader: "I just ran a free challenge for senior golfers — here's how to catch up.",
    body: `{{contact.first_name}}, I want to make sure you didn't miss what just happened.

This week I ran a free 2-day live challenge for senior golfers — the **20 More Yards Challenge** — teaching how to add 20+ yards off the tee **without rebuilding your swing.** Hundreds of golfers showed up, and the results coming out of it have been awesome.

You weren't there. But you're not out of luck — *yet.*

Two things you should know:

**1. The replay is up — but only until Sunday, June 28 at midnight ET.** After that, it's gone. If you want to see what we covered, watch it while you still can.

**2. Enrollment is open for the next step** — the **Senior Golf Mastery Cohort**, where I coach you live through the exact system over 6 weeks. It closes the same night the replay comes down.

I'll explain the cohort in detail in my next email. For now — go watch the replay before it disappears.

**[Watch the Replay →]**

Keep on keeping on, baby!

**Dr. Jake Berman, PT, DPT**

**P.S.** The replay covers the foundation: *why* you really lost your distance, and the first move to get it back. Worth 30 minutes of your weekend — but it's gone Sunday at midnight. **[Watch now →]**`,
  },
  E2: {
    preheader: "The Senior Golf Mastery Cohort, explained.",
    body: `{{contact.first_name}}, let me lay this out plainly, in case the cohort is new to you.

Here's the problem I solve: senior golfers lose distance and consistency as they age — **not** because their swing went bad, but because their body stopped firing the right muscles in the right order. Lessons don't fix that, because lessons train the *swing*, not the *body.*

The **Senior Golf Mastery Cohort** fixes the body. Here's what you get:

- **6 weeks of live group coaching with me**, over Zoom — I watch you and correct you in real time
- The **complete Senior Golf Mastery course** + every bonus
- A **full year inside the Berman Clubhouse** community
- *Fast movers: the first 10 to enroll get a private 1-on-1 virtual session with me*

**Who it's for:** senior golfers who are done losing yards and want a body that can actually perform the swing they already own — whether you're a 25-handicap or a 2.

Don't take my word for it:

- **Jon, 60** — his 7-iron went from **1 of 5** shots playable to **5 of 5 on the green.**
- **Antonio, 63 (Brazil)** — driver average from **220 to 236 yards in three weeks.**
- **Dr. Ryan, 68 — an orthopedic surgeon:** *"Unless you've got a stable base to generate power, all the speed in the world won't translate into distance."* The science checks out.
- **Jerry is 86.** You are not too old.

**The investment: $2,997, one time** — for the full 6-week cohort, the complete course, all bonuses, and a year in the Clubhouse.

**Enrollment closes Sunday, June 28 at midnight ET.** The cohort starts **[COHORT START DATE]**, with live calls **[CALL DAY & TIME]**.

**[Enroll in the Cohort →]**

Questions? Just hit reply — I read them.

Let the big dog eat, baby!

**Dr. Jake Berman, PT, DPT**

**P.S.** Still want the backstory first? The challenge replay is up until Sunday too — watch it, then come enroll: **[Watch the Replay →]**`,
  },
  E3: {
    preheader: "Last call on the Senior Golf Mastery Cohort.",
    body: `{{contact.first_name}}, this is the last call.

**Tonight at midnight ET, two things happen:**

- The 20 More Yards Challenge **replay comes down.**
- Enrollment for the **Senior Golf Mastery Cohort closes.**

If you've been thinking about it, now's the time to decide. Six weeks from now you could have a body that finally performs the swing you've had for 40 years — or you could be in the exact same spot, still losing yards every round.

**[Enroll Before Midnight →]**

You've got good golf left, {{contact.first_name}}. Let's go get it.

Let's have some fun, baby — yeah!

**Dr. Jake Berman, PT, DPT**

**P.S.** Once the cart closes tonight, the next cohort won't be for a while. If you want in, do it now. **[Enroll →]**`,
  },
};
