import './App.css';
export default function LandingPage() {
    return (
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage:
            "url('src/assets/hero1.webp')",
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/30" />
  
        {/* Header / Logo */}
        <header className="absolute top-0 left-0 z-10 p-6">
          <h1 className="text-white text-2xl md:text-3xl font-normal tracking-wide ly">
            LivTales
          </h1>
        </header>
  
        {/* Right-aligned Text */}
        <main className="relative z-10 flex-grow flex items-center justify-end px-6 md:px-12">
          <h2 className="text-white text-3xl md:text-5xl text-right max-w-[50%] md:max-w-[35%] leading-tight ly">
            Where stories fantasize into reality!
          </h2>
        </main>
      </div>
    );
  }
  