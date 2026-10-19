function Experience() {
  const skills = [
    { name: "React 19 & JSX", category: "Frontend", level: "Практичний" },
    { name: "Tailwind CSS v4", category: "Styling", level: "Сучасний" },
    { name: "HTML5 & Семантика", category: "Core", level: "Впевнений" },
    { name: "CSS3 (Flex / Grid)", category: "Core", level: "Впевнений" },
    { name: "JavaScript (ES6+)", category: "Core", level: "Базовий+" },
    { name: "Vite Bundler", category: "Tools", level: "Практичний" },
    { name: "Git & GitHub", category: "Tools", level: "Впевнений" },
    { name: "VS Code & Linters", category: "Tools", level: "Щоденний" },
  ];

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
          💼
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Практичний досвід та стек
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Реалізовані навчальні проєкти та інструменти
          </p>
        </div>
      </div>

      {/* Практичний досвід */}
      <div className="mb-8 relative pl-6 border-l-2 border-blue-500 group">
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:scale-125 transition-transform duration-200"></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
            Навчальні веброзробки — Frontend Lab
          </h3>
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full w-fit">
            2026
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-3 font-medium">
          Практичний лабораторний практикум із сучасного фронтенду
        </p>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            Створення семантичної та валідної верстки вебсторінок із використанням тегів HTML5.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            Робота з системою контролю версій Git (створення комітів, гілок, робота з віддаленим репозиторієм GitHub).
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            Декомпозиція монолітного інтерфейсу на незалежні компоненти React у середовищі збірки Vite.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            Стилізація компонентів за підходом utility-first за допомогою сучасного Tailwind CSS v4.
          </li>
        </ul>
      </div>

      {/* Технічні навички */}
      <div className="pt-2">
        <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
          Технічні навички та стек
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-3 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/70 hover:border-blue-400 hover:bg-blue-50/50 hover:-translate-y-1 transition-all duration-200 cursor-default group"
            >
              <span className="block text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-1">
                {skill.category}
              </span>
              <p className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                {skill.name}
              </p>
              <span className="inline-block mt-2 text-[11px] text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;