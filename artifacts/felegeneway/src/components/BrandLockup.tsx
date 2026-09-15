type BrandLockupProps = {
  darkText?: boolean;
  inverseLogo?: boolean;
};

export function BrandLockup({ darkText = false, inverseLogo = false }: BrandLockupProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/felegeneway-logo-transparent.png"
        alt="Felegeneway Academy logo"
        className={`h-12 w-auto ${inverseLogo ? "brightness-0 invert" : ""}`}
      />
      <div className={`flex flex-col ${darkText ? "text-primary" : "text-white"} transition-colors duration-300`}>
        <span className="font-serif text-xl font-bold leading-tight">Felegeneway</span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] opacity-90">Academy</span>
      </div>
    </div>
  );
}