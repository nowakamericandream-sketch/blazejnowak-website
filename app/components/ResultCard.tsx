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
    <div className="border border-[#F5C400]/20 bg-white/[0.02] p-8 md:p-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-[#F5C400] font-[family-name:var(--font-barlow)] font-700 text-sm tracking-[0.3em] uppercase mb-1">
            Client
          </p>
          <h3 className="font-[family-name:var(--font-barlow)] font-900 text-4xl uppercase text-white">
            {name}
          </h3>
        </div>
        <div className="text-right">
          <div className="font-[family-name:var(--font-barlow)] font-900 text-6xl md:text-7xl text-[#F5C400] leading-none">
            {stat}
          </div>
          <div className="text-white/50 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest mt-1">
            {statLabel}
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Before/after — full image, no crop */}
        <div className="relative w-full">
          <Image
            src={beforeAfterSrc}
            alt={`${name} before and after`}
            width={800}
            height={1000}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Weight chart — full image, no crop */}
        <div className="relative w-full flex items-start">
          <Image
            src={chartSrc}
            alt={`${name} weight chart`}
            width={400}
            height={700}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Quote */}
      <div className="border-l-2 border-[#F5C400] pl-6 space-y-4">
        {quotes.map((quote, i) => (
          <p
            key={i}
            className="text-white/80 font-[family-name:var(--font-inter)] text-lg italic leading-relaxed"
          >
            &ldquo;{quote}&rdquo;
          </p>
        ))}
        <p className="text-white/40 font-[family-name:var(--font-inter)] text-sm uppercase tracking-wider">
          — {name}
        </p>
      </div>
    </div>
  );
}
