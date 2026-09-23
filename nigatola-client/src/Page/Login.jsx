import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  KeyRound,
  Mail,
  ShieldCheck,
} from "lucide-react";

const Login = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-base-200 text-primary transition-colors duration-300">

      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top left glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

        {/* Bottom right glow */}
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />

        {/* University icons */}
        <GraduationCap
          className="absolute left-[7%] top-[22%] h-40 w-40 rotate-[-12deg] text-primary/[0.04]"
        />

        <BookOpen
          className="absolute bottom-[10%] right-[8%] h-48 w-48 rotate-[15deg] text-secondary/[0.05]"
        />
      </div>

      

      {/* ================= MAIN ================= */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-6 py-10 lg:px-10">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ================= LEFT SIDE ================= */}
          <section className="hidden lg:block">

            {/* Small label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-base-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Secure Student Portal
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-[-0.04em] xl:text-6xl">

              Welcome to

              <br />

              <span className="text-gradient">
                Nigatola University
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-primary/60 sm:text-base">
              Access your student dashboard, academic information,
              courses, results and university services from one secure portal.
            </p>

            {/* Features */}
            <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">

              <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm">
                <p className="text-xl font-black text-primary">
                  24/7
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-primary/45">
                  Portal Access
                </p>
              </div>

              <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm">
                <p className="text-xl font-black text-primary">
                  100%
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-primary/45">
                  Secure
                </p>
              </div>

              <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm">
                <p className="text-xl font-black text-primary">
                  ERP
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-primary/45">
                  Integrated
                </p>
              </div>

            </div>

            {/* Notice */}
            <div className="mt-8 flex max-w-xl items-start gap-3 border-l-2 border-base-content pl-4">

              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                  Secure Access
                </p>

                <p className="mt-1 text-xs leading-5 text-primary/50">
                  Please use your official university credentials to access
                  the student portal.
                </p>
              </div>

            </div>
          </section>

          {/* ================= LOGIN CARD ================= */}
          <section className="relative mx-auto w-full max-w-[440px]">

            {/* Back layer */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/10 bg-primary/5" />

            {/* Card */}
            <div className="relative rounded-2xl border border-base-300 bg-base-100 p-7 shadow-xl transition-colors duration-300 sm:p-9">

              {/* Header */}
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">
                    Student Portal
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-tight text-primary">
                    Welcome Back.
                  </h3>

                  <p className="mt-2 text-xs font-medium text-primary/50">
                    Sign in to continue to your university account.
                  </p>
                </div>

                {/* Icon */}
                <div className="flex h-11 w-11 rotate-3 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary">
                  <KeyRound className="h-5 w-5" />
                </div>

              </div>

              {/* Divider */}
              <div className="my-7 flex items-center gap-3">
                <div className="h-px flex-1 bg-base-300" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-primary/30">
                  Secure Login
                </span>

                <div className="h-px flex-1 bg-base-300" />
              </div>

              {/* ================= FORM ================= */}
              <form className="space-y-5">

                {/* Email */}
                <div>

                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                    Student Email
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/40" />

                    <input
                      type="email"
                      placeholder="you@nigatola.edu"
                      className="w-full rounded-lg border border-base-300 bg-base-200 py-3.5 pl-11 pr-4 text-sm font-medium text-primary outline-none transition-all duration-200 placeholder:text-primary/30 focus:border-primary focus:bg-base-100 focus:ring-2 focus:ring-primary/10"
                    />

                  </div>
                </div>

                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-[9px] font-black uppercase tracking-wider text-primary  hover:underline"
                    >
                      Forgot Password?
                    </button>

                  </div>

                  <div className="relative">

                    <KeyRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/40" />

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-base-300 bg-base-200 py-3.5 pl-11 pr-4 text-sm font-medium text-primary outline-none transition-all duration-200 placeholder:text-primary/30 focus:border-primary focus:bg-base-100 focus:ring-2 focus:ring-primary/10"
                    />

                  </div>
                </div>

                {/* Remember */}
                <label className="flex cursor-pointer items-center gap-2">

                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm border-base-300 checked:border-primary checked:bg-primary"
                  />

                  <span className="text-xs text-primary/55">
                    Remember me
                  </span>

                </label>

                {/* Login button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-lg bg-linear-to-r from-primary to-[#2b66ac] py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                  Sign In

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </form>

              {/* Footer */}
              <div className="mt-7 text-center">

                <p className="text-[10px] font-medium text-primary/40">
                  Need help accessing your account?
                </p>

                <button
                  type="button"
                  className="mt-1 text-xs font-black text-primary hover:text-primary hover:underline"
                >
                  Contact University Support →
                </button>

              </div>

              {/* Footer info */}
              <div className="mt-8 flex items-center justify-between border-t border-base-300 pt-4 text-[8px] font-bold uppercase tracking-[0.2em] text-primary/25">

                <span>NU / STUDENT-PORTAL</span>

                <span>EST. 2026</span>

              </div>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;