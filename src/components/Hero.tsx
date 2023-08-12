import Link from "next/link";
const Hero = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Events",
      href: "#events",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ]

  return (
    <div>
      <div className="hidden md:flex lg:flex absolute z-10 mt-48 right-0 text-slate-400 flex-col gap-20">
        {navItems.map(item => (
          <li className="block m-0 pt-[20px] pb-0 px-0 rotate-90 cursor-pointer" key={item.title}>
            <Link href={`/${item.href}`}>{item.title}</Link>
          </li>
        ))}

      </div>
      <div className="w-full sm:h-50 ">
        <img
          src="/assets/background.png"
          className="h-screen w-screen object-cover blur-1xl"
          alt="Background"
        />

        <div className="absolute top-16 left-16 sm:left-0 sm:top-8 px-4">
          <img
            src="/assets/vitlogo.png"
            alt="Left Logo"
            className="w-full h-10 lg:h-20 "
          />
        </div>
        <div className="absolute top-16 right-16 sm:right-0 sm:top-8 px-4">
          <img
            src="/assets/technovitlogo.png"
            alt="Right Logo"
            className="w-full h-10 lg:h-24"
          />
        </div>
        <div className="absolute inset-0 pt-[30vh] sm:pt-[10vh] flex flex-col justify-center items-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <div
            className="text-9xl sm:text-4xl md:text-7xl pl-14 sm:pl-9 mt-20 font-monty tracking-widest"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, #FFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            TECHNOVIT<span className="text-5xl sm:text-xl font-monty" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, #FFF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>'23</span>
          </div>
          <div className="text-white text-3xl sm:text-xl font-monty italic mt-4">Light Of Future - AI</div>
          <button className="w-48 mt-8 h-8 py-7 bg-gradient-to-b from-[#05011b] to-[#544374] rounded-full border border-[#846C9C] flex justify-center items-center gap-2">
            <div className="text-[#C8B8EC] text-base font-medium">Register Now</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
