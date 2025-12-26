import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1D1F2B]">
      <div className="w-full max-w-md rounded-3xl bg-[#181A24] p-10 shadow-2xl">
        <div className="flex justify-center mb-6">
          <Image
            src="/casino-logo.png"   
            alt="Casino logo"
            width={260}
            height={60}
            className="object-contain"
          />
        </div>
        <p className="text-center text-xs tracking-[0.3em] text-gray-400 mb-10">
          SIGN IN
        </p>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] text-gray-400">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="w-full rounded-full bg-[#2A2D3A] px-4 py-3 text-sm text-gray-100 outline-none border border-transparent focus:border-[#FF2F71]"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] text-gray-400">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-full bg-[#2A2D3A] px-4 py-3 pr-10 text-sm text-gray-100 outline-none border border-transparent focus:border-[#FF2F71]"
                placeholder="Enter your password"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 text-sm">
                👁
              </span>
            </div>
          </div>

          <div className="flex items-center justify-start text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="h-3 w-3 rounded border-gray-500 bg-transparent"
              />
              <span>REMEMBER ME</span>
            </label>
          </div>

          <button
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
