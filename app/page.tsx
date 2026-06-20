import Image from "next/image";
import ResultCard from "./components/ResultCard";

const TALLY_URL = "https://tally.so/r/rjvMGp";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/5">
        <div className="font-[family-name:var(--font-barlow)] font-900 text-xl tracking-widest uppercase text-[#F5C400]">
          BLAZEJ NOWAK
        </div>
        <a
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F5C400] text-black font-[family-name:var(--font-barlow)] font-800 text-sm uppercase tracking-widest px-5 py-2 hover:bg-[#D4A800] transition-colors"
        >
          Apply Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Blazej Nowak in the ring"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-lg tracking-[0.3em] uppercase mb-6">
            Strength &amp; Control
          </p>
          <h1 className="font-[family-name:var(--font-barlow)] font-900 text-6xl md:text-8xl lg:text-9xl uppercase leading-none text-white mb-6">
            13 Years<br />
            <span className="text-[#F5C400]">In The Ring.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-[family-name:var(--font-inter)] font-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Now I help men 30+ lose the gut and rebuild the discipline they lost along the way. 12 weeks, 1:1 — built for your life, not a template.
          </p>
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F5C400] text-black font-[family-name:var(--font-barlow)] font-800 text-lg uppercase tracking-widest px-10 py-4 hover:bg-[#D4A800] transition-colors"
          >
            Apply for Coaching
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-[#F5C400]/20 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-[#F5C400]/20">
          {[
            { num: "13", label: "Years In Boxing" },
            { num: "12", label: "Weeks — One Life Change" },
            { num: "30+", label: "The Age It Starts Counting" },
          ].map((stat) => (
            <div key={stat.label} className="py-10 px-6 text-center">
              <div className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl text-[#F5C400] leading-none mb-2">
                {stat.num}
              </div>
              <div className="text-white/50 text-sm uppercase tracking-widest font-[family-name:var(--font-inter)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-4">
          The Story
        </p>
        <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl uppercase mb-12 leading-tight">
          I Didn&apos;t Choose<br />
          <span className="text-[#F5C400]">The Easy Road.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-white/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            <p>
              At 19, I was admitted to firefighter academy — 2nd out of 1,000 candidates. Three days before starting, I left for England to box instead. That&apos;s who I am: I chase greatness, not comfort.
            </p>
            <p>
              I turned pro in 2019. 13 years training, sparring, bleeding. Then October 5, 2021 — wrist injury in sparring. Six months searching for doctors. March 2022 — wrist reconstruction surgery.
            </p>
            <p>
              I recovered. I moved to the USA. Tried comebacks in California, Chicago, Florida. Every hard punch brought the pain back.
            </p>
            <div className="border-l-2 border-[#F5C400] pl-6 py-2">
              <p className="text-white font-semibold">
                February 10, 2023. I ended my boxing career.
              </p>
              <p className="mt-2 text-white/60">
                The pain stayed. The career didn&apos;t. I moved forward. No crying. No looking back.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-white/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            <p>
              I hold a Master&apos;s degree in Sport from AWF Poznań. I&apos;ve lived across three continents — Poland, England, USA (California, Chicago, Florida, New York), now Punta Cana, Dominican Republic.
            </p>
            <p>
              Everywhere I went, I figured out work and housing within 48 hours. Alone. Knowing nobody.
            </p>
            <p>
              Boxing taught me everything: that force breaks but discipline holds. That you win in your head first. That more doesn&apos;t mean better.
            </p>
            <p className="text-white font-[family-name:var(--font-barlow)] font-700 text-xl uppercase tracking-wide">
              Now I teach that to men 30+ who are ready to take back control of their body, their discipline, and their life.
            </p>
          </div>
        </div>
      </section>

      {/* ── RING PHOTO BREAK ── */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="/images/ring2.jpg"
          alt="Blazej Nowak boxing"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-center px-6 max-w-3xl">
            <p className="font-[family-name:var(--font-barlow)] font-900 text-3xl md:text-5xl uppercase text-white leading-tight">
              &ldquo;Force breaks.<br />
              <span className="text-[#F5C400]">Discipline holds.&rdquo;</span>
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── FOR WHO ── */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-4">
          Who This Is For
        </p>
        <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl uppercase mb-12 leading-tight">
          This Is For The Man<br />
          <span className="text-[#F5C400]">Who Is Ready.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#F5C400]/20 p-8">
            <h3 className="font-[family-name:var(--font-barlow)] font-800 text-2xl uppercase text-[#F5C400] mb-6 tracking-wide">
              This IS You If:
            </h3>
            <ul className="space-y-4">
              {[
                "You're a man 30+ who wants a body that reflects how you feel inside",
                "You've tried programs before and they didn't stick — because they weren't built for YOUR life",
                "You want real coaching, not an app that spits out templates",
                "You're ready to do the work — you just need the right system",
                "You want strength, discipline, and control — not just aesthetics",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/80 font-[family-name:var(--font-inter)]">
                  <span className="text-[#F5C400] mt-1 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 p-8 bg-white/5">
            <h3 className="font-[family-name:var(--font-barlow)] font-800 text-2xl uppercase text-white/40 mb-6 tracking-wide">
              This Is NOT For:
            </h3>
            <ul className="space-y-4">
              {[
                "Men looking for a quick fix or 7-day transformation",
                "People who want motivation instead of a system",
                "Anyone not ready to commit for 12 weeks",
                "Men who want someone to do the work for them",
                "Those looking for the cheapest option on the market",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/40 font-[family-name:var(--font-inter)]">
                  <span className="mt-1 shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── OFFER ── */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-4">
            The Offer
          </p>
          <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl uppercase mb-4 leading-tight">
            P4P — 1:1 Premium<br />
            <span className="text-[#F5C400]">Online Coaching</span>
          </h2>
          <p className="text-white/60 font-[family-name:var(--font-inter)] text-lg mb-14 max-w-2xl">
            12 weeks. 100% personalized. This is not a program — this is a partnership.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {/* PREMIUM */}
            <div className="border border-[#F5C400]/40 p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5C400]" />
              <h3 className="font-[family-name:var(--font-barlow)] font-900 text-3xl uppercase text-white mb-2">
                P4P Premium
              </h3>
              <p className="text-white/50 font-[family-name:var(--font-inter)] mb-8">
                Strength + Conditioning + Nutrition. Built around your body, your life, your goal.
              </p>
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#F5C400] text-black font-[family-name:var(--font-barlow)] font-800 text-base uppercase tracking-widest px-6 py-3 hover:bg-[#D4A800] transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* CHAMPION */}
            <div className="border border-white/10 p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/20" />
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-[family-name:var(--font-barlow)] font-900 text-3xl uppercase text-white">
                  P4P Champion
                </h3>
                <span className="text-xs font-[family-name:var(--font-inter)] text-[#F5C400] border border-[#F5C400]/40 px-2 py-1 uppercase tracking-wider">
                  Boxing
                </span>
              </div>
              <p className="text-white/50 font-[family-name:var(--font-inter)] mb-8">
                Same 1:1 Premium scope — but training includes boxing skills + physical conditioning. Transformation through the sport.
              </p>
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-white/20 text-white font-[family-name:var(--font-barlow)] font-800 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/5 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Entry note */}
          <div className="border border-[#F5C400]/20 bg-[#F5C400]/5 p-6 flex gap-4">
            <span className="text-[#F5C400] text-2xl shrink-0">⚡</span>
            <div>
              <p className="font-[family-name:var(--font-barlow)] font-700 text-lg uppercase text-[#F5C400] mb-1">
                Application Required
              </p>
              <p className="text-white/60 font-[family-name:var(--font-inter)]">
                Not everyone gets in. I only take clients I know I can help — and who are ready to do the work. Fill out the application and I&apos;ll be in touch within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL RESULTS ── */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-4">
          Proof
        </p>
        <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl uppercase mb-12 leading-tight">
          Real Results.<br />
          <span className="text-[#F5C400]">Real Men.</span>
        </h2>

        <div className="space-y-8">
          {[
            {
              name: "Robert",
              stat: "−14.1 lbs",
              statLabel: "in 6 weeks",
              beforeAfterSrc: "/images/robert-before-after.png",
              chartSrc: "/images/robert-chart.png",
              quotes: [
                "Now I see the difference thank you so much. Bro I also feel better. Better sleep. Better energy. Everything.",
                "Your the best coach and bro was even in DR imagine in person broski",
              ],
            },
          ].map((result) => (
            <ResultCard key={result.name} {...result} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F5C400] text-black font-[family-name:var(--font-barlow)] font-800 text-lg uppercase tracking-widest px-12 py-4 hover:bg-[#D4A800] transition-colors"
          >
            Apply for Coaching
          </a>
          <p className="text-white/30 font-[family-name:var(--font-inter)] text-sm mt-4">
            Application is free. I&apos;ll review it personally and reply within 48 hours.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-4">
          What&apos;s Inside
        </p>
        <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl uppercase mb-14 leading-tight">
          What You Get<br />
          <span className="text-[#F5C400]">Every Week.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {[
            {
              n: "01",
              title: "Qualification Application",
              body: "Only qualified men join. Real selection — not everyone gets in.",
            },
            {
              n: "02",
              title: "Full Intake Assessment",
              body: "History, goals, lifestyle, injuries, food, schedule, work, family, mental state. I need to know YOU.",
            },
            {
              n: "03",
              title: "Personalized Training Plan",
              body: "Built around your body, your goal, your schedule, your gym. Strength + conditioning + movement.",
            },
            {
              n: "04",
              title: "Personalized Nutrition Plan",
              body: "Whole plate philosophy. No fad diets. No obsessive counting. No keto, fasting, or magic trends.",
            },
            {
              n: "05",
              title: "Video Review System",
              body: "After every workout, you send video. I give feedback. Real coaching — not guessing.",
            },
            {
              n: "06",
              title: "Direct Messaging Access",
              body: "We talk throughout the week. Voice messages, texts. Real conversation — not a chatbot.",
            },
            {
              n: "07",
              title: "Weekly Progressive Overload",
              body: "I adjust the plan every single week based on what's working. The plan moves with your life.",
            },
            {
              n: "08",
              title: "Weekly 1:1 Call",
              body: "Once per week, on the phone. Progress, mental check-in, strategy, adjustments. The real stuff.",
            },
            {
              n: "09",
              title: "Shared Google Sheet Workspace",
              body: "Our working document. Trainings logged, food tracked, progress measured, notes shared.",
            },
          ].map((item) => (
            <div key={item.n} className="bg-[#0A0A0A] p-8">
              <div className="font-[family-name:var(--font-barlow)] font-900 text-4xl text-[#F5C400]/30 mb-4 leading-none">
                {item.n}
              </div>
              <h3 className="font-[family-name:var(--font-barlow)] font-800 text-xl uppercase text-white mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/50 font-[family-name:var(--font-inter)] text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEVER GET ── */}
      <section className="py-24 px-6 bg-[#F5C400]">
        <div className="max-w-5xl mx-auto">
          <p className="text-black/50 font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-4">
            What Sets This Apart
          </p>
          <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl uppercase mb-12 leading-tight text-black">
            What You Will<br />NEVER Get From Me.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "An app instead of a coach",
              "Diet plans under 1,200 kcal or any extreme restriction",
              "Motivational BS without substance",
              "Coaching from someone who's never been in the fight",
            ].map((item) => (
              <div key={item} className="flex gap-4 items-start border border-black/10 bg-black/5 p-5">
                <span className="text-black font-[family-name:var(--font-barlow)] font-900 text-2xl shrink-0">✕</span>
                <p className="text-black font-[family-name:var(--font-inter)] font-600 text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO BREAK 2 ── */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/physique.jpg"
          alt="Blazej Nowak physique"
          fill
          className="object-cover"
          style={{ objectPosition: "center 65%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80" />
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-4">
          The Philosophy
        </p>
        <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-6xl uppercase mb-12 leading-tight">
          What Boxing<br />
          <span className="text-[#F5C400]">Taught Me.</span>
        </h2>
        <div className="space-y-6">
          {[
            { n: "1.", text: "Never give up." },
            { n: "2.", text: "If you want to do it \"by force\" — you won't do it. Force breaks. Discipline holds." },
            { n: "3.", text: "You must win in your head first, before you win in life or in the ring." },
            { n: "4.", text: "Never seek comfort after a loss. Comfort makes you weaker. Be a man and get back to work." },
            { n: "5.", text: "More doesn't mean better. Quality over volume. Always." },
          ].map((item) => (
            <div key={item.n} className="flex gap-6 items-start border-b border-white/5 pb-6">
              <span className="font-[family-name:var(--font-barlow)] font-900 text-3xl text-[#F5C400] shrink-0 w-8">
                {item.n}
              </span>
              <p className="font-[family-name:var(--font-barlow)] font-700 text-2xl md:text-3xl uppercase text-white/90 leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ring3.jpg"
            alt="Blazej in the ring"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-6">
            Ready?
          </p>
          <h2 className="font-[family-name:var(--font-barlow)] font-900 text-5xl md:text-7xl uppercase leading-none text-white mb-6">
            One Application.<br />
            <span className="text-[#F5C400]">12 Weeks.</span><br />
            One Version of You.
          </h2>
          <p className="text-white/60 font-[family-name:var(--font-inter)] text-lg mb-10 max-w-xl mx-auto">
            I take a limited number of clients. If you&apos;re ready to build a body and mind that match who you know you are — apply now.
          </p>
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F5C400] text-black font-[family-name:var(--font-barlow)] font-800 text-xl uppercase tracking-widest px-14 py-5 hover:bg-[#D4A800] transition-colors"
          >
            Apply for P4P Coaching
          </a>
          <p className="text-white/30 font-[family-name:var(--font-inter)] text-sm mt-6">
            Application is free. I&apos;ll review it personally and reply within 48 hours.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-barlow)] font-900 text-lg tracking-widest uppercase text-[#F5C400]">
            BLAZEJ NOWAK — STRENGTH &amp; CONTROL
          </div>
          <p className="text-white/30 font-[family-name:var(--font-inter)] text-sm">
            © {new Date().getFullYear()} Blazej Nowak. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
