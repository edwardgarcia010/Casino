import Image from "next/image";

export default function LoginPage() {
  return (
    <main
      id="login-page"
      className="min-h-screen flex items-center justify-center bg-[#1D1F2B]"
    >
      <div
        id="login-card"
        className="w-full max-w-md rounded-3xl bg-[#181A24] p-10 shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div
          id="login-logo-wrapper"
          className="flex justify-center mb-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <Image
            id="login-logo"
            src="/casino-logo.png"
            alt="Casino logo"
            width={260}
            height={60}
            className="object-contain"
          />
        </div>

        <p
          id="login-title"
          className="text-center text-xs tracking-[0.3em] text-gray-400 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          SIGN IN
        </p>

        <form
          id="login-form"
          className="space-y-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div id="email-field" className="space-y-2">
            <label
              id="email-label"
              className="text-xs tracking-[0.2em] text-gray-400"
            >
              EMAIL ADDRESS
            </label>
            <input
              id="email-input"
              type="email"
              className="w-full rounded-full bg-[#2A2D3A] px-4 py-3 text-sm text-gray-100 outline-none border border-transparent focus:border-[#FF2F71]"
              placeholder="Enter your email"
            />
          </div>

          <div id="password-field" className="space-y-2">
            <label
              id="password-label"
              className="text-xs tracking-[0.2em] text-gray-400"
            >
              PASSWORD
            </label>
            <div id="password-wrapper" className="relative">
              <input
                id="password-input"
                type="password"
                className="w-full rounded-full bg-[#2A2D3A] px-4 py-3 pr-10 text-sm text-gray-100 outline-none border border-transparent focus:border-[#FF2F71]"
                placeholder="Enter your password"
              />
              <span
                id="password-eye"
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 text-sm"
              >
                👁
              </span>
            </div>
          </div>

          <div
            id="remember-wrapper"
            className="flex items-center justify-start text-xs text-gray-400"
          >
            <label
              id="remember-label"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                id="remember-checkbox"
                type="checkbox"
                className="h-3 w-3 rounded border-gray-500 bg-transparent"
              />
              <span>REMEMBER ME</span>
            </label>
          </div>

          <button
            id="login-button"
            type="submit"
            className="mt-2 w-full rounded-full bg-[#FF2F71] py-3 text-sm font-semibold tracking-[0.2em] text-white hover:bg-[#ff4b86] transition-colors"
          >
            LOGIN
          </button>
        </form>
      </div>
    </main>
  );
}
