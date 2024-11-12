import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-16 m-0 overflow-hidden">
      {/* Logo */}
      <div className="w-full max-w-8xl flex">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-auto w-auto max-h-[15rem] max-w-[6rem] mb-2 object-contain"
        />
      </div>

      {/* Top Gray Line */}
      <div className="w-full max-w-8xl relative mb-20">
        <span className="block w-full h-[1px] bg-gray-400"></span>
        <div className="absolute right-120">
          <span className="h-44 w-[1px] absolute bg-black/20"></span>
          <div className="absolute top-64 -translate-x-[11px] w-6 h-6 bg-yellow-400 border-2 border-black rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-8xl grid lg:grid-cols-2 gap-16 py-4">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-12">
          {/* Main Heading */}
          <div>
            <div className="text-5xl sm:text-6xl font-bold flex items-center">
              <span>We build</span>
              <span className="ml-4">→</span>
            </div>
            <div className="ml-20 mt-4 bg-yellow-400 inline-block px-3 py-1 text-5xl sm:text-6xl font-bold">
              exclusive
            </div>
            <div className="ml-20 italic text-5xl sm:text-6xl font-InstrumentSheriff">perceptions</div>
          </div>

          {/* Call to Action, Subtext, and Paragraph */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10">
            <div className="flex flex-col space-y-4">
              <button className="text-2xl flex items-center relative">
                <span>Let&apos;s talk</span>
                <span className="ml-2">→</span>
                <span className="absolute left-0 bottom-0 h-[0.5px] w-full bg-gray-400"></span>
              </button>
              <p className="text-lg text-gray-500">Your marketing guy is our best friend</p>
            </div>
            <p className="text-base leading-relaxed lg:max-w-xs lg:text-left lg:mt-0">
              We&apos;re allergic to mediocrity. Come find us when you&apos;re ready to create something daring—something that captivates, delights, and drives results. If it&apos;s bold and built to make waves (and profits), we&apos;re all in.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gray Line */}
      <div className="w-full max-w-8xl relative mt-10">
        <span className="h-44 w-[1px] absolute bg-black/20 right-120 bottom-full"></span>
        <span className="block w-full h-[1px] bg-gray-400"></span>
      </div>
    </div>
  );
}
