export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-background ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              SkillBridge
            </h2>

            <p className="text-sm text-muted-foreground leading-6">
              Empowering students with modern learning experiences,
              mentorship, and career-focused skill development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/"
                  className="transition hover:text-primary"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/courses"
                  className="transition hover:text-primary"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition hover:text-primary"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Resources
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/blog"
                  className="transition hover:text-primary"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/faq"
                  className="transition hover:text-primary"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="/privacy-policy"
                  className="transition hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="transition hover:text-primary"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Newsletter
            </h3>

            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to get latest course updates and learning resources.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 rounded-xl border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-primary"
              />

              <button className="h-11 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} SkillBridge. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              className="transition hover:text-primary"
            >
              Facebook
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="transition hover:text-primary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="transition hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
