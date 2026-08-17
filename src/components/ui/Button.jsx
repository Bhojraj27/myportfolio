const variants = {
  primary:
    'bg-gradient-to-r from-primary to-accent text-navy font-semibold hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]',
  secondary:
    'glass border border-white/10 text-white font-semibold hover:border-primary/30 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]',
  ghost:
    'text-gray-400 hover:text-primary hover:bg-primary/5',
};

const sizes = {
  sm: 'px-4 py-2 text-xs gap-1.5 rounded-lg',
  md: 'px-6 py-3 text-sm gap-2 rounded-xl',
  lg: 'px-8 py-4 text-sm gap-2 rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : 16} />}
      {children}
      {IconRight && <IconRight size={size === 'sm' ? 14 : 16} />}
    </button>
  );
}
