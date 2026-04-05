export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#050505] z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Blinking loader block */}
        <div className="w-16 h-16 bg-ash/20 border border-ash/40 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-t-2 border-l-2 border-accent-orange animate-spin" />
        </div>
        
        {/* Terminal text */}
        <div className="font-mono text-xs md:text-sm text-ash uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-accent-green animate-pulse rounded-full" />
          [SYSTEM_BOOTSTRAP_RUNNING...]
        </div>
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    </div>
  );
}
