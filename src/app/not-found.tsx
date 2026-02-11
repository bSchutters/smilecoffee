import Link from "next/link";
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center bg-green-dark px-6 text-center">
          <div className="space-y-6">
            <h1 className="font-display text-6xl text-cream md:text-8xl">
              404
            </h1>

            <div className="space-y-1">
              <p className="text-lg text-cream/90">
                Oups, cette page n&apos;existe pas.
              </p>
              <p className="text-sm text-cream/60">
                Oops, this page doesn&apos;t exist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-2xl bg-cream px-8 py-4 text-sm font-bold uppercase tracking-wider text-green-dark transition-colors hover:bg-cream-dark focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark focus-visible:outline-none"
              >
                Retour
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-2xl bg-cream/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-cream/20 focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark focus-visible:outline-none"
              >
                Go back
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
