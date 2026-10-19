function Header() {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-indigo-900/40 relative overflow-hidden transition-all duration-300 hover:shadow-indigo-900/20">
      {/* Декоративне сяйво на фоні */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Відкритий до нових пропозицій
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
            Якимчук Іван
          </h1>
          <p className="text-lg text-indigo-200/90 font-medium">
            Junior Developer <span className="text-indigo-400">/</span> Computer Science Enthusiast
          </p>
        </div>

        {/* Контактна інформація з інтерактивними кнопками */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2.5 text-sm">
          <a
            href="mailto:ivan.yakymchuk@gmail.com"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700/60 hover:border-indigo-500 transition-all duration-200 hover:scale-[1.03] shadow-sm"
          >
            <span className="text-base">✉️</span>
            <span className="font-medium">ivan.yakymchuk@gmail.com</span>
          </a>

          <a
            href="tel:+380982593639"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700/60 hover:border-indigo-500 transition-all duration-200 hover:scale-[1.03] shadow-sm"
          >
            <span className="text-base">📱</span>
            <span className="font-medium">+38 (098) 259-36-39</span>
          </a>

          <a
            href="https://github.com/VanayPl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700/60 hover:border-indigo-500 transition-all duration-200 hover:scale-[1.03] shadow-sm"
          >
            <span className="text-base">💻</span>
            <span className="font-medium">GitHub: VanayPl</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;