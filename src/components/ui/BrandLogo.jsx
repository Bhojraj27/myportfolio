export default function BrandLogo({ size = 36, className = '', showWordmark = false, wordmarkClassName = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/logo-mark.png"
        alt="Bhojraj Chavan"
        width={size}
        height={size}
        className="shrink-0 rounded-[22%] shadow-[0_0_20px_rgba(59,130,246,0.28)]"
        draggable={false}
      />
      {showWordmark && (
        <span className={`font-display font-bold text-white tracking-tight ${wordmarkClassName}`}>
          bhojraj<span className="text-primary">.dev</span>
        </span>
      )}
    </span>
  );
}
