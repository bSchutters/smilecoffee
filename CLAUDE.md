# CONTEXTE PROJET POUR CLAUDE CODE

Ce document decrit le projet Smile Coffee pour Claude Code.

---

## QU'EST-CE QUE CE PROJET ?

Site vitrine bilingue (FR/EN) pour **Smile Coffee**, un coffee shop fictif.

- Pages : Accueil, Menu, Galerie, A propos, Contact
- Site statique sans backend ni base de donnees
- Bilingue francais/anglais avec next-intl
- Deploye sur Vercel

---

## STACK TECHNIQUE

- **Next.js 16.1.6** (App Router, Turbopack) - Framework React
- **React 19.2** - UI library
- **TypeScript 5** - Type safety (strict mode)
- **Tailwind CSS 4** - Styling (PostCSS plugin, pas de tailwind.config)
- **shadcn/ui** (new-york style) - Component library
- **next-intl 4.8** - Internationalization (FR + EN)
- **motion 12** (motion/react) - Animations
- **Embla Carousel** - Carousel (via shadcn)
- **Radix UI** - Primitives (via shadcn)
- **Lucide React** - Icons
- **Vercel** - Hosting

---

## GESTIONNAIRE DE PAQUETS

**Ce projet utilise pnpm** - Ne PAS utiliser npm ou yarn

```bash
pnpm install
pnpm run dev
pnpm run build
```

---

## STRUCTURE DU PROJET

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Redirect vers locale
│   ├── globals.css             # Styles globaux, fonts, theme, couleurs
│   ├── robots.ts               # SEO
│   ├── sitemap.ts              # Sitemap XML
│   ├── icon.svg                # Favicon
│   ├── [locale]/               # Routes avec i18n (fr, en)
│   │   ├── layout.tsx          # Layout locale (metadata, JSON-LD)
│   │   ├── page.tsx            # Home
│   │   ├── menu/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── not-found.tsx       # 404
│   └── maintenance/            # Page maintenance
├── components/
│   ├── ui/                     # shadcn/ui (button, card, badge, tabs, dialog, sheet, carousel, input, select, textarea)
│   ├── layout/                 # Navbar, Footer, LanguageToggle, MotionProvider, SkipNav
│   ├── home/                   # Hero, Highlights, FeaturedProducts, ThemeSection
│   ├── menu/                   # MenuTabs, ProductCard
│   ├── gallery/                # GalleryGrid, Lightbox
│   ├── about/                  # StorySection, ThemeTimeline
│   ├── contact/                # ContactForm
│   └── magicui/                # BlurFade, Marquee, ShinyText, TextAnimate
├── data/
│   └── menu-items.ts           # Donnees menu (18 items, categories, prix, images)
├── i18n/
│   ├── request.ts              # Config serveur i18n
│   └── routing.ts              # Locales: fr (default), en
├── lib/
│   └── utils.ts                # cn() (clsx + tailwind-merge)
└── proxy.ts                    # Middleware (i18n + mode maintenance)

messages/                       # Traductions
├── fr.json
└── en.json

public/
├── fonts/                      # Pally (woff2), Cafe Francoise (otf)
├── images/products/            # WebP produits (coffee/, food/, beans/)
└── logos/                      # SVG logos horizontal + vertical
```

---

## PALETTE DE COULEURS

| Token          | Hex       | Usage                  |
| -------------- | --------- | ---------------------- |
| `green-dark`   | `#3D5A47` | Background principal   |
| `green-medium` | `#4A6B52` | Cards, sections        |
| `green-light`  | `#5C7D63` | Accents, borders       |
| `orange`       | `#F4845F` | Primary/CTA            |
| `orange-light` | `#F6A087` | Hover states           |
| `cream`        | `#F5F0E8` | Texte principal        |
| `cream-dark`   | `#E8DFD0` | Texte secondaire       |

---

## POLICES

| Variable         | Font             | Usage             | Format  |
| ---------------- | ---------------- | ----------------- | ------- |
| `--font-sans`    | Pally            | Corps de texte    | WOFF2   |
| `--font-display` | Cafe Francoise   | Titres decoratifs | OTF     |

### Limitation Cafe Francoise

**La police Cafe Francoise ne supporte PAS les accents ni les apostrophes.**

Tous les textes utilisant `font-display` doivent eviter :
- Les accents : e, e, a, u, etc.
- Les apostrophes : ', '

Si un titre necessite ces caracteres, reformuler le texte.

---

## I18N

### 2 langues : FR (defaut) + EN

Les deux fichiers de traduction doivent etre maintenus en parallele :

```
messages/fr.json   # Francais
messages/en.json   # Anglais
```

Quand on ajoute/modifie une cle, **toujours** mettre a jour les deux fichiers.

### Toujours utiliser les traductions

```typescript
// BAD - Hardcoded
<h1>Notre Menu</h1>

// GOOD - Translated
const t = useTranslations('menu')
<h1>{t('title')}</h1>
```

### Navigation avec locale

```typescript
// BAD - Pas de locale
<Link href="/menu">

// GOOD - Avec locale
import { useLocale } from 'next-intl'
const locale = useLocale()
<Link href={`/${locale}/menu`}>
```

### Structure des cles

```json
{
  "nav": { "home": "...", "menu": "..." },
  "home": { "hero": {}, "highlights": {}, "featured": {} },
  "menu": { "title": "...", "categories": {} },
  "gallery": {},
  "about": {},
  "contact": {},
  "footer": {},
  "notFound": {},
  "a11y": {}
}
```

---

## COMPOSANTS UI

### Regle : toujours shadcn/ui

```typescript
// BAD
<button>Click</button>
<input type="text" />
<img src="..." />

// GOOD
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

<Button>Click</Button>
<Input type="text" />
<Image src="..." alt="..." width={400} height={300} />
```

### Composants shadcn disponibles

Button, Card, Badge, Tabs, Dialog, Sheet, Carousel, Input, Select, Textarea

### Composants custom (magicui/)

- `BlurFade` - Animation blur + fade au scroll
- `Marquee` - Texte defilant infini
- `ShinyText` - Effet shimmer sur texte
- `TextAnimate` - Animation de texte

---

## ANIMATIONS

### Librairie : motion/react

```typescript
import { motion } from 'motion/react'
```

### Regles d'animation

- **PAS de scale sur les cards/conteneurs** - Uniquement un leger zoom sur l'image a l'interieur
- **Scale autorise uniquement** sur les images dans les cards (`group-hover:scale-105`)
- **Rotate leger** autorise sur certaines cards (ex: highlights)
- `BlurFade` pour les animations d'apparition au scroll
- Respecter `prefers-reduced-motion` (deja gere dans globals.css)

```typescript
// BAD - Scale sur la card
<motion.div whileHover={{ scale: 1.05 }}>
  <Card>...</Card>
</motion.div>

// GOOD - Zoom image dans la card
<Card className="group">
  <Image className="transition-transform duration-500 group-hover:scale-105" />
</Card>
```

---

## DONNEES MENU

Les donnees du menu sont dans `src/data/menu-items.ts` :

```typescript
interface MenuItem {
  id: string
  category: 'coffee' | 'food' | 'beans'
  name: { fr: string; en: string }
  description: { fr: string; en: string }
  price: number
  image: string           // /images/products/...
  featured?: boolean
  tags?: string[]         // 'classic', 'sweet', 'new', 'vegan'
}
```

18 items : 6 cafes, 6 foods, 6 beans. Images WebP dans `public/images/products/`.

---

## PROXY (MIDDLEWARE)

Le fichier `src/proxy.ts` gere :

- **i18n** - Routing multi-langue via next-intl
- **Mode maintenance** - Activable via `MAINTENANCE_MODE=true` dans `.env.local`

```typescript
// src/proxy.ts
export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
}
```

---

## NEXT.JS CONFIG

- React Compiler active
- Images distantes : `images.unsplash.com`
- Headers securite : X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Plugin next-intl integre

---

## SEO

- Metadata dynamique par page et par locale
- URLs canoniques avec alternates de langue
- OpenGraph + Twitter Cards
- JSON-LD schema `CafeOrCoffeeShop`
- `robots.ts` + `sitemap.ts`

---

## A EVITER

- Texte hardcode (toujours `t('key')`)
- `<img>` au lieu de `<Image />` de next/image
- `<button>`, `<input>`, `<select>` natifs au lieu de shadcn
- `any` en TypeScript
- Scale/zoom sur les cards (sauf images a l'interieur)
- Accents et apostrophes dans les textes en `font-display`
- npm ou yarn (utiliser pnpm)

---

## A FAIRE TOUJOURS

- Utiliser `t('key')` pour tout texte visible
- Mettre a jour fr.json ET en.json
- Utiliser les composants shadcn/ui
- Utiliser `<Image />` de next/image avec alt
- Ajouter `aria-hidden="true"` sur les icones decoratives
- Verifier le build (`pnpm run build`) apres les modifications

---

## COMMITS & PR

### Pas de Co-Authored-By

**NE PAS ajouter `Co-Authored-By: Claude ...` dans les commits.**

### Conventions de commit

```
feat(scope): description courte
fix(scope): description courte
refactor(scope): description courte
style(scope): description courte
chore(scope): description courte
```

### Format PR

```markdown
## Summary
- Point 1
- Point 2

## Test plan
- [ ] Test 1
- [ ] Test 2
```
