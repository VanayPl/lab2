function Footer() {
  return (
    <footer className="mt-8 pt-8 pb-6 border-t border-slate-200/80 text-center text-sm text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-medium text-slate-600">
          &copy; 2026 Якимчук Іван. Усі права захищено.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/60">
          <span>Розроблено з</span>
          <span className="text-sky-500 font-semibold">React</span>
          <span>•</span>
          <span className="text-purple-500 font-semibold">Vite</span>
          <span>•</span>
          <span className="text-teal-600 font-semibold">Tailwind CSS v4</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;