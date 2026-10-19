import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100/80 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <main className="space-y-6">
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
