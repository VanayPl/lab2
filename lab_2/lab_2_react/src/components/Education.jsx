function Education() {
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg">
          🎓
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Освіта та мовні компетенції
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Академічна база та рівень іноземних мов
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Освітній заклад */}
        <div className="relative pl-6 border-l-2 border-indigo-500 group">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 group-hover:scale-125 transition-transform duration-200"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
              Поглиблене вивчення інформатики
            </h3>
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full w-fit">
              2022 — 2026
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-3 font-medium">
            Спеціалізований ліцей з поглибленим вивченням точних дисциплін
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              4 роки системного вивчення комп'ютерних наук, структур даних та базових алгоритмів.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Розробка навчальних алгоритмічних програм і розв'язання практичних олімпіадних задач.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Опанування базових принципів архітектури комп'ютерних систем та мереж.
            </li>
          </ul>
        </div>

        {/* Мови */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">
            Мовні компетенції
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 text-sm">Українська</p>
                <p className="text-xs text-slate-500">Рідна / вільно</p>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg">
                Native
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 text-sm">Англійська</p>
                <p className="text-xs text-slate-500">Технічна література & документація</p>
              </div>
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg">
                B1 / B2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
