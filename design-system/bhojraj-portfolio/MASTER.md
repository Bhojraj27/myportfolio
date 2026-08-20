# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that page file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Bhojraj Portfolio  
**Updated:** 2026-08-20  
**Style:** Dark Aurora Glassmorphism  
**Category:** Developer Portfolio

---

## Global Rules

### Color Palette (live brand)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#3B82F6` | `--color-primary` |
| Secondary | `#60A5FA` | `--color-secondary` |
| Accent / CTA | `#EA580C` | `--color-accent` |
| Accent Soft | `#FB923C` | `--color-accent-soft` |
| Indigo | `#818CF8` | `--color-electric-purple` |
| Cyan | `#38BDF8` | `--color-neon-blue` |
| Background | `#0A0E27` | `--color-navy` |
| Background Deep | `#050814` | `--color-navy-dark` |
| Foreground | `#E2E8F0` / `#FFFFFF` | — |
| Muted text | `#94A3B8` | — |

**Color notes:** Dark navy base + trust blue primary + orange CTA. Aurora orbs use blue / indigo / muted orange / cyan at low opacity.

### Typography

- **Display / headings:** Space Grotesk
- **Body:** Plus Jakarta Sans
- **Mono:** JetBrains Mono
- **Mood:** modern, technical, professional, approachable

### Glass Tokens (Dark Aurora)

| Token | Value | Usage |
|-------|-------|-------|
| `--glass-bg` | white 8–10% → navy tint gradient | `.glass` |
| `--glass-bg-strong` | white 12–14% → navy tint | `.glass-strong` |
| `--glass-blur` | `24px` (mobile `18px`) | Standard cards |
| `--glass-blur-strong` | `32px` (mobile `22px`) | Featured panels |
| `--glass-border` | `rgba(255,255,255,0.2–0.26)` | Edge definition |
| `--glass-highlight` | `inset 0 1px 0 rgba(255,255,255,0.22)` | Specular top light |
| `--glass-shadow` | soft black depth + hairline | Resting state |
| `--glass-shadow-hover` | deeper + faint blue glow | Hover |

**Rules:**
- Glass must sit over colorful aurora depth — never solid opaque navy slabs
- Keep text contrast ≥ 4.5:1 on frosted surfaces
- Prefer `.glass` / `.glass-strong` utilities over one-off `bg-navy/80` fills
- Aurora rim (`.neon-border`): blue → indigo → cyan → soft orange, subtle not neon-gimmick

### Ambient Aurora

- Fixed `.aurora-layer` with soft radial orbs (blue / indigo / muted orange / cyan)
- `pointer-events: none`, low opacity (~0.22–0.35)
- Drift animations disabled under `prefers-reduced-motion`

### Spacing

| Token | Value |
|-------|-------|
| `--space-xs` | `4px` |
| `--space-sm` | `8px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |
| `--space-3xl` | `64px` |

---

## Component Specs

### Buttons

- **Primary:** orange gradient CTA (`#EA580C` → `#FB923C`), white text, hover lift + glow
- **Secondary:** frosted glass fill, white text, hover primary border tint

### Cards

Use `.glass` or `.glass-strong` + `rounded-2xl`. Optional `.neon-border` for featured surfaces. `.card-hover` for lift.

### Tech chips

Frosted chip: white 8% fill, white 15% border, specular inset, brand-colored icon.

### Navbar

Scrolled state uses `.glass` with bottom border — not opaque navy.

---

## Style Guidelines

**Style:** Dark Aurora Glassmorphism  
**Keywords:** Frosted glass, translucent, aurora depth, specular edge, layered, soft blur, brand blue/orange  
**Key effects:** Backdrop blur 18–32px, translucent white overlays, top light reflection, soft aurora orbs behind content  
**Avoid:** Purple SaaS rainbow glass, light Liquid Glass gold, opaque navy cards that kill blur, heavy neon glow spam

### Page Pattern

Hero (brand + one CTA group + portrait) → Proof → About → Skills → Experience → Projects → Contact

---

## Anti-Patterns (Do NOT Use)

- Opaque navy cards that hide frost effect
- Purple-on-white / purple-indigo AI template themes
- Emojis as icons
- Missing `cursor:pointer` on clickables
- Layout-shifting scale on dense UI
- Low-contrast muted text on glass
- Instant state changes (use 150–300ms transitions)
- Invisible focus rings
- Aurora / spin motion when `prefers-reduced-motion: reduce`

---

## Pre-Delivery Checklist

- [ ] Cards look frosted (aurora shows through), not flat panels
- [ ] Text contrast ≥ 4.5:1 on glass
- [ ] Focus states visible
- [ ] `prefers-reduced-motion` respected for aurora / portrait spin
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] Brand stays blue + orange (not purple template)
