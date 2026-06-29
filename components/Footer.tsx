import { Show, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FEATURED_STYLES, FOOTER_QUICK_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 rounded-[2rem] border border-border/60 bg-card px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-border/60 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="caps-sm text-sm font-semibold uppercase text-primary">
              Luma Studio
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Transfer gaya AI yang klasik, privat, dan terfokus dengan indah.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Ubah potret dan pemandangan menggunakan gaya visual pilihan,
              sembari tetap mempertahankan komposisi, identitas subjek, dan
              karakter keseluruhan gambar sebagai fokus utama.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Show when="signed-out">
              <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                <Button type="button" className="gap-2 rounded-full px-5 py-3">
                  Mulai di Studio
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Button asChild className="gap-2 rounded-full px-5 py-3">
                <Link href="/studio" prefetch={false}>
                  Mulai di Studio
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
            </Show>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-border/70 px-5 py-3"
            >
              <Link href="#styles">Jelajahi Gaya</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-foreground">Tentang</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              Studio premium untuk penataan ulang gaya gambar beresolusi tinggi
              dengan preset pilihan, hasil yang bersifat pribadi, serta alur
              kerja tenang yang terasa sempurna mulai dari tahap unggah hingga
              hasil akhir.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Navigasi</p>
            <div className="mt-4 flex flex-col gap-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={link.href === "/studio" ? false : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              Gaya Unggulan
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {FEATURED_STYLES.map((style) => (
                <span
                  key={style}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Luma Studio</p>
          <p>Privat secara default. Dikurasi dengan cermat.</p>
        </div>
      </div>
    </footer>
  );
}
