import Image from "next/image";

interface ResultCardProps {
  name: string;
  stat: string;
  statLabel: string;
  beforeAfterSrc: string;
  chartSrc: string;
  quotes: string[];
}

export default function ResultCard({
  name,
  stat,
  statLabel,
  beforeAfterSrc,
  chartSrc,
  quotes,
}: ResultCardProps) {
  return (
    <div className="border border-[#F5C400]/20 bg-white/[0.02]">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left: photo */}
        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[500px]">
          <Image
            src={beforeAfterSrc}
            alt={`${name} before and after`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="font-[family-name:var(--font-barlow)] font-900 text-6xl text-[#F5C400] leading-none">
              {stat}
            </div>
            <div className="text-white/70 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest mt-1">
              {statLabel}
            </div>
          </div>
        </div>

        {/* Right: chart + quote */}
        <div className="p-8 flex flex-col justify-between gap-8">
          <div>
            <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-2">
              Client
            </p>
            <h3 className="font-[family-name:var(--font-barlow)] font-900 text-4xl uppercase text-white mb-6">
              {name}
            </h3>
            <div className="relative aspect-video w-full overflow-hidden border border-white/10">
              <Image
                src={chartSrc}
                alt={`${name} weight chart`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="space-y-4 border-l-2 border-[#F5C400] pl-6">
            {quotes.map((quote, i) => (
              <p key={i} className="text-white/80 font-[family-name:var(--font-inter)] text-lg italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
            ))}
            <p className="text-white/40 font-[family-name:var(--font-inter)] text-sm uppercase tracking-wider">
              — {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
