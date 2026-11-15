# Joorweb Color System

This file owns color for Joorweb. Application boundaries, Puck, Page Schema, and package layout stay in [frontend-architecture.md](../architecture/frontend-architecture.md). Typography stays in [typography.md](typography.md). Component structure stays in [components.md](components.md). The token overview stays in [design-system.md](design-system.md).

`colors.md` was empty. This is the color record.

**Established** means a decision already approved. **Proposed** means a recommendation in this file. It is not approved and it is not built. **Open** means a decision is still required. Proposed and Open items stay in those states here.

The five direction colors below are Established. Every derived step, semantic hue, role mapping, and dark-theme value is Proposed. Whether both themes ship, the Tailwind mapping, and token-package implementation stay Open, as the current docs already say.

---

## 1. Selected visual direction and design rationale

The selected direction is a calm operating surface: a deep navy for weight, one saturated blue for action, a cyan used sparingly, a cool light page, and white for the working surface. Strong color is reserved for the current action, the current selection, and a true status. That matches the visual language in design-system.md: precise, low decoration, and dense enough for operational data.

| Role | Hex | Status | Rationale |
|---|---|---|---|
| Navy | `#101B35` | Established | Deep brand anchor. It carries inverse bars, the proposed dark canvas, and other large dark areas. It is the weight in the direction. |
| Primary blue | `#2563EB` | Established | The action color. One saturated blue identifies the primary control and keyboard focus on light surfaces. |
| Accent cyan | `#06B6D4` | Established | A cooler, brighter hue for short highlights. It is a separate accent, with its own scale. |
| Light background | `#F1F5F9` | Established | Cool light page canvas, so a white surface can sit above it. |
| White surface | `#FFFFFF` | Established | Default surface for cards, fields, and dialogs on the light page. |

Measured appearance of the five anchors, in OKLCH (lightness, chroma, hue). These figures describe the approved hexes. They are not extra approved colors.

| Anchor | L | C | H |
|---|---|---|---|
| `#101B35` | 0.228 | 0.053 | 265.2° |
| `#2563EB` | 0.546 | 0.215 | 262.9° |
| `#06B6D4` | 0.715 | 0.126 | 215.2° |
| `#F1F5F9` | 0.968 | 0.007 | 247.9° |
| `#FFFFFF` | 1.000 | 0.000 | — |

Navy and primary blue share a hue family (about 2.3° apart). Navy’s chroma is about a quarter of the primary’s, and its lightness sits at the dark end. Primary blue remains the action color. Navy is recorded as its own role, `color.brand.navy`, in section 2.

Accent sits about 48° away from the primary and is visibly separate from it (OKLab ΔE 0.23).

`#FFFFFF` is also the documented panel-login card. `#F1F5F9` appears on a login-related surface in application CSS and is not part of the documented panel-login palette. Both are shared neutral surface values. Section 11 records the login palette and keeps it out of this brand.

The sample variables in frontend-rules.md section 4.1 are illustrative. The approved primary uses the same hex as that sample’s primary. The sample’s other hexes are not tokens here.

Architecture section 2.5 left platform brand color Open and pointed it at an approved design system. This file records the five anchors as the selected direction. It does not edit the architecture file. Derived scales and mappings stay Proposed, so the rest of that Open item stays open until those proposals are accepted. design-system.md section 16 still lists final color values as unresolved for the same reason.

---

## 2. Brand color scale

**Proposed**, except the `#2563EB` anchor, which is Established and placed exactly at step 600.

### How the ramp was built

Steps 50–950 are one hue ramp in OKLCH, locked to the primary hue 262.9°. Lightness falls from 50 to 950. Chroma is highest near step 600 and lower at the pale and deep ends, then reduced until the color fits in sRGB. Each step is stored as 8-bit sRGB. Step 600 is then replaced with `#2563EB` exactly. The published ramp was checked so relative luminance (the WCAG Y in section 9) decreases at every step.

Step 600 is the right anchor because the approved blue’s lightness (0.546) sits between a mid blue and a dark action blue. A 500 anchor would make the approved color a dark step and invent a brighter “base.”

### Navy

Navy `#101B35` is a separate role, `color.brand.navy`. It is not step 950.

Step 950 is `#112349` (L 0.265, C 0.075, hue 263.2°). Navy is darker (L 0.228), duller (C 0.053), and ΔE 0.043 from that step. Putting navy into the ramp would flatten the last step off the primary chroma curve and would make the dark canvas equal a primary-scale step. Navy stays the deep brand anchor. The primary scale stays the action blue, darkened along its own hue.

### Scale

| Step | Hex | Status | Rationale |
|---|---|---|---|
| 50 | `#F1F6FF` | Proposed | Palest primary wash. |
| 100 | `#E1ECFF` | Proposed | Light selected-surface tint. |
| 200 | `#C8DBFF` | Proposed | Stronger tint. Held so the ramp stays even. No current role token. |
| 300 | `#A5C4FF` | Proposed | Dark-theme hover fill. Same hue, light enough for navy ink. |
| 400 | `#78A6FF` | Proposed | Dark-theme resting primary fill. |
| 500 | `#4A85FF` | Proposed | Dark-theme pressed fill. On light surfaces it clears 3:1 and misses 4.5:1, so it is not body text there. |
| 600 | `#2563EB` | Established hex, Proposed step | Approved primary. Light-theme resting fill and light-theme focus color. |
| 700 | `#1B4EBF` | Proposed | Light-theme hover fill and link text. Darker than 600 so links clear 4.5:1 on sunken and selected surfaces. |
| 800 | `#163E95` | Proposed | Light-theme pressed fill and dark-theme selected fill. |
| 900 | `#15316D` | Proposed | Deeper primary-hue step. Held so the ramp stays even. No current role token. |
| 950 | `#112349` | Proposed | Darkest primary-hue step. Separate from navy. |

Contrast of each step against `#FFFFFF`, and the use that contrast allows:

| Step | On white | Normal text 4.5:1 | Large text and UI 3:1 |
|---|---|---|---|
| 50–400 | 1.08:1 to 2.41:1 | Fail | Fail |
| 500 | 3.45:1 | Fail | Pass |
| 600 | 5.17:1 | Pass | Pass |
| 700 | 7.27:1 | Pass | Pass |
| 800 | 9.74:1 | Pass | Pass |
| 900 | 12.41:1 | Pass | Pass |
| 950 | 15.44:1 | Pass | Pass |

Steps 50–400 are washes and fills, not text on white. Section 9 lists the pairs that are actually recommended.

---

## 3. Neutral color scale

**Proposed**, except `#FFFFFF` at step 0 and `#F1F5F9` at step 100, which are Established hexes.

The ramp is a cool blue-gray. Hue is locked to the approved light background (247.9°). Chroma stays low, so the scale reads as slate rather than as a second blue. Step 0 is untinted white because the approved white is lighter than any tinted step. Step 100 is the approved light background exactly. The steps between and below are generated the same way as the brand ramp: falling lightness, low chroma, sRGB gamut, then an exact lock on steps 0 and 100. Relative luminance decreases at every step.

This ramp does not use the panel-login page `#F5F6FA`, the panel-login text `#1E293B`, or the illustrative sample hexes `#F8FAFC`, `#0F172A`, and `#64748B`.

| Step | Hex | Status | Rationale |
|---|---|---|---|
| 0 | `#FFFFFF` | Established hex, Proposed step | Approved white surface. Untinted end of the ramp. |
| 50 | `#F7F9FB` | Proposed | Tint between white and the approved page. |
| 100 | `#F1F5F9` | Established hex, Proposed step | Approved light page. |
| 200 | `#E3E9EE` | Proposed | Sunken wells and disabled fills on light surfaces. |
| 300 | `#CDD5DD` | Proposed | Quiet divider on light surfaces. Dark-theme secondary text. |
| 400 | `#A3AEB9` | Proposed | Light-theme disabled text. Dark-theme essential border. |
| 500 | `#7B8894` | Proposed | Large text and non-text marks on white and on the page. Misses 4.5:1, and misses 3:1 on sunken wells. |
| 600 | `#5B6875` | Proposed | Light-theme secondary text and essential border. First neutral that clears 4.5:1 on white, the page, and sunken wells. |
| 700 | `#404D5B` | Proposed | Darker neutral. Held so the ramp stays even. No current role token. |
| 800 | `#2C3A47` | Proposed | Darker neutral. Held so the ramp stays even. No current role token. |
| 900 | `#1B2834` | Proposed | Light-theme primary text. |
| 950 | `#0F1923` | Proposed | Darkest neutral. Held so the ramp stays even. No current role token. |

`#FFFFFF` and `#F1F5F9` are neutral surface values. Their presence beside the login screen is explained in section 11. They do not import the login brand.

---

## 4. Semantic colors

**Proposed.** Success, warning, danger, and info each have their own hue so a status is not painted with the primary button. None of these hexes is taken from the documented panel-login palette. The login palette has no status colors. A match with any undocumented application CSS would be a coincidence. These hexes were checked against the documented login hexes and do not reproduce them.

Each ramp uses the same OKLCH method as the brand scale, with the listed anchor locked exactly. Relative luminance decreases along each ramp. Steps that no role uses are still listed so the ramp stays ordered. Product UI uses the role tokens in sections 5 and 6, not raw steps.

Color is never the only status signal. design-system.md already requires an icon or text with the color. These hues are also separated in lightness so success, warning, and danger are not distinguished by hue alone.

### Success

Hue 145°, a green about 118° from the primary and far from the cyan accent (ΔE about 0.32 from `#2563EB`). Anchor step 600 is the light-theme solid. Step 400 is lighter so the dark-theme solid can clear 3:1 on the dark card.

| Step | Hex | Status | Rationale |
|---|---|---|---|
| 50 | `#E8FDE8` | Proposed | Palest success wash. |
| 100 | `#D7F7D7` | Proposed | Light-theme success banner background. |
| 200 | `#BDEDBE` | Proposed | Dark-theme success text and icons. |
| 400 | `#61B565` | Proposed | Dark-theme success solid. Light enough for a 3:1 edge on the dark card, with navy ink. |
| 600 | `#1B7E2A` | Proposed | Light-theme success solid. White label clears 4.5:1. |
| 700 | `#146720` | Proposed | Intermediate green. Held for ramp order. |
| 800 | `#0D5118` | Proposed | Light-theme success text and border. |
| 900 | `#073B0F` | Proposed | Deepest success step. Held for ramp order. |

### Warning

Hue 78°, an amber about 67° from success. The bright anchor `#EAAA36` is step 600 so the family still reads as amber. White text on that amber fails, and the amber itself fails 3:1 against white and against the light page. Light-theme warning text and warning buttons therefore use step 800. Dark-theme warning buttons use step 600, where the amber clears 3:1 on the dark card and the dark label clears 4.5:1 on the amber.

| Step | Hex | Status | Rationale |
|---|---|---|---|
| 50 | `#FFF5E7` | Proposed | Palest amber wash. |
| 100 | `#FFECCF` | Proposed | Light-theme warning banner background. |
| 200 | `#FCD8A2` | Proposed | Dark-theme warning text and icons. |
| 600 | `#EAAA36` | Proposed | Amber anchor and dark-theme warning solid. Not a control or icon on white or on the light page. |
| 700 | `#AE7C1E` | Proposed | Clears 3:1 on white and misses 4.5:1. Not body text. Held for ramp order. |
| 800 | `#7C5500` | Proposed | Light-theme warning text, border, and solid. White label on this solid clears 4.5:1. |
| 900 | `#593C00` | Proposed | Dark ink on the amber solid. |

### Danger

Hue 25°, a red, separate from the primary blue and from warning. Anchor `#C04442` is step 600: white text clears 4.5:1, and the fill clears 3:1 on white and on the light page. On the dark card that same red falls under 3:1, so the dark-theme solid uses the lighter step 400 with navy ink.

| Step | Hex | Status | Rationale |
|---|---|---|---|
| 50 | `#FFF2F1` | Proposed | Palest danger wash. |
| 100 | `#FFE8E5` | Proposed | Light-theme danger banner background. |
| 200 | `#FFD1CD` | Proposed | Dark-theme danger text and icons. |
| 400 | `#ED756E` | Proposed | Dark-theme danger solid. |
| 600 | `#C04442` | Proposed | Light-theme danger solid. |
| 700 | `#9C2F2F` | Proposed | Intermediate red. Held for ramp order. |
| 800 | `#7D2323` | Proposed | Light-theme danger text and border. |
| 900 | `#5F1A1A` | Proposed | Deepest danger step. Held for ramp order. |

### Info

Info stays in the blue family so an informational status still reads as information, and it stays off the primary button.

The info hue is 236°, about 27° from the primary (262.9°) and about 21° from the accent (215.2°), at roughly half the primary’s chroma. The text step is 800, `#0D425D`:

- ΔE 0.243 from the primary `#2563EB`
- ΔE 0.165 from the light-theme accent text `#005D6D`
- ΔE 0.099 from brand step 800 `#163E95`

That last distance is why info has no filled button. A dark steel fill would sit next to the light-theme pressed primary. Info is a pale banner, an icon, and a label.

Step 600 `#256B8F` is ΔE 0.038 from accent step 700 and is not a text or fill role. The pale info wash `#DCF1FF` is ΔE 0.014 from brand step 100 and ΔE 0.017 from accent step 100. Light blue washes converge. The wash is not the signal. The icon and the word are.

| Step | Hex | Status | Rationale |
|---|---|---|---|
| 50 | `#EEF8FF` | Proposed | Palest info wash. |
| 100 | `#DCF1FF` | Proposed | Light-theme info banner background. Not distinguishable from other light blue washes by color alone. |
| 200 | `#BCE5FE` | Proposed | Dark-theme info text and icons. |
| 600 | `#256B8F` | Proposed | Intermediate steel blue. Too close to accent step 700 to use as text. Held for ramp order. |
| 700 | `#195676` | Proposed | Intermediate. Held for ramp order. |
| 800 | `#0D425D` | Proposed | Light-theme info text, icon, and border. |
| 900 | `#063248` | Proposed | Deepest info step. Held for ramp order. |

---

## 5. Light theme color roles

**Proposed** mappings. Established hexes appear only where the cell is one of the five direction colors. A theme assigns values to the names in section 8. It does not invent a second name for the light theme.

`color.surface.raised` uses the same white as `color.surface.default`. A raised light surface is separated by shadow and elevation. Those scales are Open in design-system.md and are not set here.

| Token | Hex | Source | Rationale |
|---|---|---|---|
| `color.background.canvas` | `#F1F5F9` | Established | Approved light page. |
| `color.background.inverse` | `#101B35` | Established | Navy bar or inverse band on a light page. |
| `color.surface.default` | `#FFFFFF` | Established | Approved white surface. |
| `color.surface.raised` | `#FFFFFF` | Established | Same fill as the default surface. |
| `color.surface.sunken` | `#E3E9EE` | neutral.200 | Inset wells, code, and disabled fills. |
| `color.surface.selected` | `#E1ECFF` | brand.100 | Selected row. Text on it uses `color.text.primary`. |
| `color.text.primary` | `#1B2834` | neutral.900 | Body and headings. |
| `color.text.secondary` | `#5B6875` | neutral.600 | Supporting text. Also the essential border, because both need this darkness. |
| `color.text.muted` | `#7B8894` | neutral.500 | Large text only. Fails normal text. Section 9. |
| `color.text.inverse` | `#FFFFFF` | Established | Text on navy. |
| `color.text.link` | `#1B4EBF` | brand.700 | Link text. Step 600 fails 4.5:1 on sunken and selected surfaces. |
| `color.text.accent` | `#005D6D` | accent.800 | Short accent labels and icons. Step 700 fails 4.5:1 on sunken and selected surfaces. |
| `color.text.disabled` | `#A3AEB9` | neutral.400 | Disabled label. Fails 4.5:1. Section 7. |
| `color.text.success` | `#0D5118` | success.800 | Success label and icon. |
| `color.text.warning` | `#7C5500` | warning.800 | Warning label and icon. |
| `color.text.danger` | `#7D2323` | danger.800 | Danger label and icon. |
| `color.text.info` | `#0D425D` | info.800 | Info label and icon. |
| `color.border.default` | `#CDD5DD` | neutral.300 | Quiet divider inside a region that already has a boundary. Fails 3:1. |
| `color.border.strong` | `#5B6875` | neutral.600 | Essential edge: inputs, checks, cards that rely on the stroke. |
| `color.border.focus` | `#2563EB` | Established primary | Focus ring on the surrounding surface. |
| `color.border.disabled` | `#CDD5DD` | neutral.300 | Disabled stroke. Fails 3:1. |
| `color.interactive.primary` | `#2563EB` | Established primary | Resting primary button. |
| `color.interactive.hover` | `#1B4EBF` | brand.700 | Hover fill. |
| `color.interactive.active` | `#163E95` | brand.800 | Pressed fill. |
| `color.interactive.on` | `#FFFFFF` | Established | Label on primary, success, danger, and warning solids in this theme. |
| `color.disabled.background` | `#E3E9EE` | neutral.200 | Disabled control fill. |
| `color.disabled.foreground` | `#A3AEB9` | neutral.400 | Disabled control label. |
| `color.success.subtle` | `#D7F7D7` | success.100 | Success banner background. |
| `color.success.solid` | `#1B7E2A` | success.600 | Success button. |
| `color.success.on` | `#FFFFFF` | Established | Label on the success solid. |
| `color.success.text` | `#0D5118` | success.800 | Same as `color.text.success`. |
| `color.success.border` | `#0D5118` | success.800 | Success banner edge. |
| `color.warning.subtle` | `#FFECCF` | warning.100 | Warning banner background. |
| `color.warning.solid` | `#7C5500` | warning.800 | Warning button. The bright amber fails on white. |
| `color.warning.on` | `#FFFFFF` | Established | Label on the warning solid. |
| `color.warning.text` | `#7C5500` | warning.800 | Same as `color.text.warning`. |
| `color.warning.border` | `#7C5500` | warning.800 | Warning banner edge. |
| `color.danger.subtle` | `#FFE8E5` | danger.100 | Danger banner background. |
| `color.danger.solid` | `#C04442` | danger.600 | Danger button. |
| `color.danger.on` | `#FFFFFF` | Established | Label on the danger solid. |
| `color.danger.text` | `#7D2323` | danger.800 | Same as `color.text.danger`. |
| `color.danger.border` | `#7D2323` | danger.800 | Danger banner edge. |
| `color.info.subtle` | `#DCF1FF` | info.100 | Info banner background. |
| `color.info.text` | `#0D425D` | info.800 | Same as `color.text.info`. |
| `color.info.border` | `#0D425D` | info.800 | Info banner edge. |

There is no `color.info.solid`. A filled info button would sit too close to the pressed primary.

---

## 6. Dark theme color roles

**Proposed.** design-system.md section 12 requires the system to be able to represent a dark appearance. The same section, and section 16, leave the default mode and whether both themes ship in every application unresolved. Those two choices stay **Open**. Publishing this table does not close them.

Names match the light theme. Only values change.

The dark page is navy `#101B35`. The card `#2C3750` is a small lift along the navy hue (contrast against the page is 1.44:1). A lighter card would push accent text under 4.5:1, so `color.surface.raised` uses the same fill. Shadow and elevation, which are Open, are what distinguish a raised layer. The card edge, when it is the boundary, uses `color.border.strong`.

| Token | Hex | Source | Rationale |
|---|---|---|---|
| `color.background.canvas` | `#101B35` | Established navy | Dark page. |
| `color.background.inverse` | `#F1F5F9` | Established | Light band on a dark page. |
| `color.surface.default` | `#2C3750` | Proposed | Card. Lifted from navy only as far as accent text still clears 4.5:1. |
| `color.surface.raised` | `#2C3750` | Proposed | Same fill as the card. |
| `color.surface.sunken` | `#091127` | Proposed | Inset, darker than the page. |
| `color.surface.selected` | `#163E95` | brand.800 | Selected fill. Pair with a border; the fill-to-card contrast is 1.22:1 and is not the boundary. |
| `color.text.primary` | `#F1F5F9` | Established | Primary text. |
| `color.text.secondary` | `#CDD5DD` | neutral.300 | Supporting text. Clears 4.5:1 on the card. |
| `color.text.muted` | `#7B8894` | neutral.500 | Not used for body text. On the card it is under 4.5:1. |
| `color.text.inverse` | `#101B35` | Established navy | Ink on light fills: primary, success, and danger buttons. |
| `color.text.link` | `#A5C4FF` | brand.300 | Link text. Same hue as the primary, light enough for 4.5:1 on the card. |
| `color.text.accent` | `#06B6D4` | Established accent | Short accent text. Clears 4.5:1 on the page, the card, and the sunken well. |
| `color.text.disabled` | `#5B6875` | neutral.600 | Disabled label. Fails 4.5:1 on the page and the card. |
| `color.text.success` | `#BDEDBE` | success.200 | Success label and icon. |
| `color.text.warning` | `#FCD8A2` | warning.200 | Warning label and icon. |
| `color.text.danger` | `#FFD1CD` | danger.200 | Danger label and icon. |
| `color.text.info` | `#BCE5FE` | info.200 | Info label and icon. |
| `color.border.default` | `#5B6875` | neutral.600 | Quiet divider. Fails 3:1 (2.99:1 on the page). |
| `color.border.strong` | `#A3AEB9` | neutral.400 | Essential edge on the page and the card. |
| `color.border.focus` | `#F1F5F9` | Established | Focus ring on the surrounding surface. |
| `color.border.disabled` | `#5B6875` | neutral.600 | Disabled stroke. Fails 3:1. |
| `color.interactive.primary` | `#78A6FF` | brand.400 | Resting primary button. Step 600 is 2.30:1 against the card. |
| `color.interactive.hover` | `#A5C4FF` | brand.300 | Hover fill, lighter than rest. |
| `color.interactive.active` | `#4A85FF` | brand.500 | Pressed fill. Still 3.44:1 against the card. |
| `color.interactive.on` | `#101B35` | Established navy | Label on primary, success, and danger solids. |
| `color.disabled.background` | `#2C3750` | card | Disabled fill, same as the card, with the failing label color. |
| `color.disabled.foreground` | `#5B6875` | neutral.600 | Disabled label. |
| `color.success.subtle` | `#091127` | sunken, with success text | Banner uses the sunken fill plus success text and an icon. A separate green card color is not required for contrast. |
| `color.success.solid` | `#61B565` | success.400 | Success button. |
| `color.success.on` | `#101B35` | navy | Label on the success solid. |
| `color.success.text` | `#BDEDBE` | success.200 | Same as `color.text.success`. |
| `color.success.border` | `#BDEDBE` | success.200 | Success edge. |
| `color.warning.subtle` | `#091127` | sunken, with warning text | Same pattern as success. |
| `color.warning.solid` | `#EAAA36` | warning.600 | Warning button. Clears 5.82:1 against the card. |
| `color.warning.on` | `#593C00` | warning.900 | Label on the amber solid. |
| `color.warning.text` | `#FCD8A2` | warning.200 | Same as `color.text.warning`. |
| `color.warning.border` | `#FCD8A2` | warning.200 | Warning edge. |
| `color.danger.subtle` | `#091127` | sunken, with danger text | Same pattern as success. |
| `color.danger.solid` | `#ED756E` | danger.400 | Danger button. Step 600 is 2.34:1 against the card. |
| `color.danger.on` | `#101B35` | navy | Label on the danger solid. |
| `color.danger.text` | `#FFD1CD` | danger.200 | Same as `color.text.danger`. |
| `color.danger.border` | `#FFD1CD` | danger.200 | Danger edge. |
| `color.info.subtle` | `#091127` | sunken, with info text | Same pattern as success. |
| `color.info.text` | `#BCE5FE` | info.200 | Same as `color.text.info`. |
| `color.info.border` | `#BCE5FE` | info.200 | Info edge. |

Dark-theme link text `#A5C4FF` is 9.71:1 on the page, 6.75:1 on the card, and 10.65:1 on the sunken well.

---

## 7. Text, background, surface, border, interactive, and disabled states

States use the role tokens above. They do not add a second palette. Component behavior for these states is defined in design-system.md section 10. This section only assigns color.

| State | Light | Dark |
|---|---|---|
| Default page | `color.background.canvas` | `color.background.canvas` |
| Default surface | `color.surface.default` | `color.surface.default` |
| Sunken | `color.surface.sunken` | `color.surface.sunken` |
| Primary text | `color.text.primary` | `color.text.primary` |
| Secondary text | `color.text.secondary` | `color.text.secondary` |
| Resting primary control | `color.interactive.primary` with `color.interactive.on` | same names |
| Hover | `color.interactive.hover` with `color.interactive.on` | same names |
| Pressed | `color.interactive.active` with `color.interactive.on` | same names |
| Focus | `color.border.focus`, drawn outside the control on the surrounding surface | same name |
| Selected | `color.surface.selected` with `color.text.primary` | `color.surface.selected` with `color.text.primary` |
| Disabled | `color.disabled.background` and `color.disabled.foreground` | same names |
| Link | `color.text.link` | `color.text.link` |
| Success, warning, danger, info | The matching `subtle`, `text`, `border`, and `solid` tokens | same names |

Focus color is not the whole focus indicator. The ring meets 3:1 against the surface it is drawn on. On a dark primary button the ring color `#F1F5F9` is 2.20:1 against the button fill `#78A6FF`, so the ring sits on the surrounding surface, with a gap, rather than on the fill. Ring thickness and offset belong to the component, not to this file.

Disabled contrast fails 4.5:1 on purpose. WCAG 2.2 Success Criterion 1.4.3 exempts inactive user-interface components from the text-contrast requirement. The ratios are still reported in section 9, and they are not recommended for any text that must be read. Placeholder text is not disabled text. Placeholders use `color.text.secondary`. A disabled appearance is not an authorization decision. Frontend visibility is not backend authorization.

Selected, success, warning, danger, info, and focus each need a non-color cue as well as the color. design-system.md already requires that.

Loading uses the resting control plus a progress indicator. Error uses the danger tokens. Empty uses primary and secondary text. None of those states introduces a new hue.

`color.text.muted` is limited to large text on white and on the light page, where it clears 3:1 and misses 4.5:1. It is not a body, label, or placeholder color.

---

## 8. Design token naming conventions

design-system.md section 4 sets the naming shape: `{category}.{role}.{modifier}` when a modifier is needed. A name describes a role. This file uses that shape and does not add a second one.

The category is `color`. Roles used here:

| Role | Status | Notes |
|---|---|---|
| `brand`, `success`, `warning`, `danger`, `info`, `surface`, `text`, `border` | Shape from design-system.md | `info` is the “information” semantic named in that file. |
| `accent`, `neutral`, `background`, `interactive`, `disabled` | Proposed roles | Same three-part shape. design-system.md does not list these role words. They are proposed so accent, the page, controls, and disabled states stay addressable without a second naming scheme. |

A numeric modifier (`50`, `100`, … `950`, and `0` for white) is a palette step. Palette steps are references for building role tokens. Product UI uses role tokens.

Examples, all Proposed as names:

- `color.brand.primary` → `#2563EB`
- `color.brand.navy` → `#101B35`
- `color.brand.600` → `#2563EB` (the palette step)
- `color.accent.base` → `#06B6D4`
- `color.text.primary` → theme value from sections 5 and 6
- `color.interactive.hover` → the primary action’s hover fill
- `color.danger.solid` → the danger button fill

`color.interactive.*` is the primary action. Danger, warning, and success actions use `color.danger`, `color.warning`, and `color.success`. The shape stops at three segments, so hover for danger is `color.danger.solid` at the theme’s solid value rather than a fourth segment.

The concrete prefix, the file format, and the mapping onto Tailwind are **Open**. design-system.md sections 4 and 16 leave them unresolved. This file does not choose `--color-…`, a JSON file, or a Tailwind key. The illustrative custom properties in frontend-rules.md section 4.1 are not that decision.

Token package implementation is **Open**. `packages/design-tokens` is the architecture’s package boundary. Format, theme wiring, and Tailwind integration stay unresolved there and in design-system.md section 16. This file does not specify that package.

Organization overrides, when a future allowlist permits them, reassign values of these names. They do not add a parallel naming scheme. The allowlist and the white-label mechanism stay Open in design-system.md section 16.

---

## 9. WCAG 2.2 AA contrast

The product target is WCAG 2.2 Level AA, as frontend-rules.md and design-system.md already state. This section checks contrast only. It does not claim that Joorweb, or this palette, conforms to WCAG. A passing row means that pair meets the contrast threshold named in the row. It says nothing about focus area, target size, language, or a finished screen.

### Method

Contrast uses the WCAG 2.x relative-luminance formula on the 8-bit sRGB hex.

1. Channel value `C8` (0–255) becomes `Cs = C8 / 255`.
2. Linearize: if `Cs ≤ 0.04045`, then `C = Cs / 12.92`. Otherwise `C = ((Cs + 0.055) / 1.055) ^ 2.4`.
3. `Y = 0.2126 R + 0.7152 G + 0.0722 B`.
4. Contrast = `(Yl + 0.05) / (Yd + 0.05)`, where `Yl` is the lighter luminance and `Yd` is the darker.
5. Normal text passes at **4.5:1** or higher (WCAG 2.2 SC 1.4.3). Large text (18 pt, or 14 pt bold) and essential non-text UI pass at **3:1** or higher (SC 1.4.3 large text, SC 1.4.11). Focus color against the adjacent surface uses the 3:1 threshold.

Ratios below are rounded to two decimals. Pass and fail use the unrounded ratio. The one pair that rounds onto the boundary is written with three decimals.

### Worked pass

`#2563EB` on `#FFFFFF`.

- 8-bit channels: 37, 99, 235.
- sRGB: 0.145098, 0.388235, 0.921569.
- Linear: 0.018500, 0.124772, 0.830770.
- `Y = 0.2126(0.018500) + 0.7152(0.124772) + 0.0722(0.830770) = 0.153152`.
- White `Y = 1`.
- Ratio = `(1 + 0.05) / (0.153152 + 0.05) = 1.05 / 0.203152 = 5.17:1`.
- Result: pass for normal text and for non-text UI.

### Worked fail

`#06B6D4` on `#FFFFFF`, same formula.

- `Y = 0.382481`.
- Ratio = `1.05 / (0.382481 + 0.05) = 2.43:1`.
- Result: fail for normal text and fail for non-text UI. The accent base is not text or a control edge on white.

### Recommended pairs

These are the pairs sections 5–7 actually assign. “Pass” means the pair meets the target for that use.

#### Light theme, normal text (target 4.5:1)

| Pair | Ratio | Result |
|---|---|---|
| `#1B2834` on `#FFFFFF` | 15.00:1 | Pass |
| `#1B2834` on `#F1F5F9` | 13.70:1 | Pass |
| `#1B2834` on `#E3E9EE` | 12.26:1 | Pass |
| `#1B2834` on `#E1ECFF` | 12.61:1 | Pass |
| `#5B6875` on `#FFFFFF` | 5.70:1 | Pass |
| `#5B6875` on `#F1F5F9` | 5.21:1 | Pass |
| `#5B6875` on `#E3E9EE` | 4.66:1 | Pass |
| `#5B6875` on `#E1ECFF` | 4.79:1 | Pass |
| `#1B4EBF` on `#FFFFFF` | 7.27:1 | Pass |
| `#1B4EBF` on `#F1F5F9` | 6.64:1 | Pass |
| `#1B4EBF` on `#E3E9EE` | 5.94:1 | Pass |
| `#1B4EBF` on `#E1ECFF` | 6.11:1 | Pass |
| `#005D6D` on `#FFFFFF` | 7.54:1 | Pass |
| `#005D6D` on `#F1F5F9` | 6.88:1 | Pass |
| `#005D6D` on `#E3E9EE` | 6.16:1 | Pass |
| `#005D6D` on `#E1ECFF` | 6.33:1 | Pass |
| `#0D5118` on `#FFFFFF` | 9.51:1 | Pass |
| `#0D5118` on `#F1F5F9` | 8.68:1 | Pass |
| `#0D5118` on `#D7F7D7` | 8.23:1 | Pass |
| `#7C5500` on `#FFFFFF` | 6.65:1 | Pass |
| `#7C5500` on `#F1F5F9` | 6.07:1 | Pass |
| `#7C5500` on `#FFECCF` | 5.75:1 | Pass |
| `#7D2323` on `#FFFFFF` | 9.83:1 | Pass |
| `#7D2323` on `#F1F5F9` | 8.97:1 | Pass |
| `#7D2323` on `#FFE8E5` | 8.39:1 | Pass |
| `#0D425D` on `#FFFFFF` | 10.74:1 | Pass |
| `#0D425D` on `#F1F5F9` | 9.81:1 | Pass |
| `#0D425D` on `#DCF1FF` | 9.25:1 | Pass |
| `#FFFFFF` on `#2563EB` | 5.17:1 | Pass |
| `#FFFFFF` on `#1B4EBF` | 7.27:1 | Pass |
| `#FFFFFF` on `#163E95` | 9.74:1 | Pass |
| `#FFFFFF` on `#1B7E2A` | 5.17:1 | Pass |
| `#FFFFFF` on `#C04442` | 5.06:1 | Pass |
| `#FFFFFF` on `#7C5500` | 6.65:1 | Pass |
| `#FFFFFF` on `#101B35` | 17.07:1 | Pass |
| `#593C00` on `#EAAA36` | 4.97:1 | Pass |
| `#101B35` on `#EAAA36` | 8.37:1 | Pass |

#### Light theme, essential UI and focus (target 3:1)

| Pair | Ratio | Result |
|---|---|---|
| `#5B6875` border on `#FFFFFF` | 5.70:1 | Pass |
| `#5B6875` border on `#F1F5F9` | 5.21:1 | Pass |
| `#5B6875` border on `#E3E9EE` | 4.66:1 | Pass |
| `#2563EB` focus on `#FFFFFF` | 5.17:1 | Pass |
| `#2563EB` focus on `#F1F5F9` | 4.72:1 | Pass |
| `#2563EB` focus on `#E3E9EE` | 4.22:1 | Pass for 3:1. Fail for normal text, so this is a ring, not a label. |
| `#2563EB` fill on `#FFFFFF` | 5.17:1 | Pass |
| `#2563EB` fill on `#F1F5F9` | 4.72:1 | Pass |
| `#1B4EBF` fill on `#FFFFFF` | 7.27:1 | Pass |
| `#1B4EBF` fill on `#F1F5F9` | 6.64:1 | Pass |
| `#163E95` fill on `#FFFFFF` | 9.74:1 | Pass |
| `#163E95` fill on `#F1F5F9` | 8.89:1 | Pass |
| `#1B7E2A` fill on `#FFFFFF` | 5.17:1 | Pass |
| `#1B7E2A` fill on `#F1F5F9` | 4.72:1 | Pass |
| `#C04442` fill on `#FFFFFF` | 5.06:1 | Pass |
| `#C04442` fill on `#F1F5F9` | 4.62:1 | Pass |
| `#7C5500` fill on `#FFFFFF` | 6.65:1 | Pass |
| `#7C5500` fill on `#F1F5F9` | 6.07:1 | Pass |

Large text only: `#7B8894` on `#FFFFFF` is 3.63:1 (pass at 3:1, fail at 4.5:1). On `#F1F5F9` it is 3.31:1 (same split). That is the only recommended use of `color.text.muted`.

#### Dark theme, normal text (target 4.5:1)

| Pair | Ratio | Result |
|---|---|---|
| `#F1F5F9` on `#101B35` | 15.58:1 | Pass |
| `#F1F5F9` on `#2C3750` | 10.83:1 | Pass |
| `#F1F5F9` on `#091127` | 17.10:1 | Pass |
| `#F1F5F9` on `#163E95` | 8.89:1 | Pass |
| `#CDD5DD` on `#101B35` | 11.51:1 | Pass |
| `#CDD5DD` on `#2C3750` | 8.00:1 | Pass |
| `#CDD5DD` on `#091127` | 12.63:1 | Pass |
| `#A5C4FF` on `#101B35` | 9.71:1 | Pass |
| `#A5C4FF` on `#2C3750` | 6.75:1 | Pass |
| `#A5C4FF` on `#091127` | 10.65:1 | Pass |
| `#06B6D4` on `#101B35` | 7.03:1 | Pass |
| `#06B6D4` on `#2C3750` | 4.89:1 | Pass |
| `#06B6D4` on `#091127` | 7.72:1 | Pass |
| `#BDEDBE` on `#101B35` | 13.02:1 | Pass |
| `#BDEDBE` on `#2C3750` | 9.05:1 | Pass |
| `#BDEDBE` on `#091127` | 14.29:1 | Pass |
| `#FCD8A2` on `#101B35` | 12.59:1 | Pass |
| `#FCD8A2` on `#2C3750` | 8.75:1 | Pass |
| `#FCD8A2` on `#091127` | 13.81:1 | Pass |
| `#FFD1CD` on `#101B35` | 12.40:1 | Pass |
| `#FFD1CD` on `#2C3750` | 8.62:1 | Pass |
| `#FFD1CD` on `#091127` | 13.61:1 | Pass |
| `#BCE5FE` on `#101B35` | 12.82:1 | Pass |
| `#BCE5FE` on `#2C3750` | 8.92:1 | Pass |
| `#BCE5FE` on `#091127` | 14.07:1 | Pass |
| `#101B35` on `#78A6FF` | 7.07:1 | Pass |
| `#101B35` on `#A5C4FF` | 9.71:1 | Pass |
| `#101B35` on `#4A85FF` | 4.95:1 | Pass |
| `#101B35` on `#61B565` | 6.75:1 | Pass |
| `#101B35` on `#ED756E` | 5.99:1 | Pass |
| `#593C00` on `#EAAA36` | 4.97:1 | Pass |

#### Dark theme, essential UI and focus (target 3:1)

| Pair | Ratio | Result |
|---|---|---|
| `#A3AEB9` border on `#101B35` | 7.57:1 | Pass |
| `#A3AEB9` border on `#2C3750` | 5.26:1 | Pass |
| `#F1F5F9` focus on `#101B35` | 15.58:1 | Pass |
| `#F1F5F9` focus on `#2C3750` | 10.83:1 | Pass |
| `#78A6FF` fill on `#101B35` | 7.07:1 | Pass |
| `#78A6FF` fill on `#2C3750` | 4.92:1 | Pass |
| `#A5C4FF` fill on `#101B35` | 9.71:1 | Pass |
| `#A5C4FF` fill on `#2C3750` | 6.75:1 | Pass |
| `#4A85FF` fill on `#101B35` | 4.95:1 | Pass |
| `#4A85FF` fill on `#2C3750` | 3.44:1 | Pass |
| `#61B565` fill on `#101B35` | 6.75:1 | Pass |
| `#61B565` fill on `#2C3750` | 4.69:1 | Pass |
| `#ED756E` fill on `#101B35` | 5.99:1 | Pass |
| `#ED756E` fill on `#2C3750` | 4.17:1 | Pass |
| `#EAAA36` fill on `#101B35` | 8.37:1 | Pass |
| `#EAAA36` fill on `#2C3750` | 5.82:1 | Pass |

### Pairs that fail and are not recommended for that use

| Pair | Ratio | Fails | Do not use for |
|---|---|---|---|
| `#06B6D4` on `#FFFFFF` | 2.43:1 | 4.5 and 3 | Text, icons, or a control edge on white |
| `#06B6D4` on `#F1F5F9` | 2.22:1 | 4.5 and 3 | Text, icons, or a control edge on the light page |
| `#FFFFFF` on `#06B6D4` | 2.43:1 | 4.5 and 3 | A white label on the accent base |
| `#EAAA36` on `#FFFFFF` | 2.04:1 | 4.5 and 3 | Text, icons, or a control edge on white |
| `#EAAA36` on `#F1F5F9` | 1.86:1 | 4.5 and 3 | Text, icons, or a control edge on the light page |
| `#FFFFFF` on `#EAAA36` | 2.04:1 | 4.5 and 3 | A white label on the bright amber |
| `#7C5500` on `#EAAA36` | 3.26:1 | 4.5 (passes 3) | Normal warning text on the bright amber |
| `#2563EB` on `#E3E9EE` | 4.22:1 | 4.5 (passes 3) | Link or body text on sunken wells. The focus ring may use it. |
| `#2563EB` on `#E1ECFF` | 4.34:1 | 4.5 (passes 3) | Link or body text on the selected wash |
| `#00768A` on `#E3E9EE` | 4.33:1 | 4.5 (passes 3) | Accent text on sunken wells |
| `#00768A` on `#E1ECFF` | 4.46:1 | 4.5 (passes 3) | Accent text on the selected wash |
| `#2563EB` on `#2C3750` | 2.30:1 | 4.5 and 3 | A primary button fill on the dark card |
| `#1B7E2A` on `#2C3750` | 2.30:1 | 4.5 and 3 | A success button fill on the dark card |
| `#C04442` on `#2C3750` | 2.34:1 | 4.5 and 3 | A danger button fill on the dark card |
| `#1B4EBF` on `#101B35` | 2.35:1 | 4.5 and 3 | A button fill on the dark page |
| `#163E95` on `#101B35` | 1.75:1 | 4.5 and 3 | A button fill on the dark page |
| `#78A6FF` on `#FFFFFF` | 2.41:1 | 4.5 and 3 | A button fill or text on white. It is a dark-theme fill. |
| `#4A85FF` on `#FFFFFF` | 3.45:1 | 4.5 (passes 3) | Normal text on white |
| `#CDD5DD` on `#FFFFFF` | 1.48:1 | 3 | The only edge of a control |
| `#CDD5DD` on `#F1F5F9` | 1.35:1 | 3 | The only edge of a control |
| `#7B8894` on `#E3E9EE` | 2.96:1 | 3 | An essential border on a sunken well |
| `#7B8894` on `#FFFFFF` | 3.63:1 | 4.5 (passes 3) | Normal text. Large text and non-text marks may use it. |
| `#5B6875` on `#101B35` | 2.99:1 | 3 and 4.5 | An essential border or a readable label on the dark page. Unrounded ratio 2.993:1. |
| `#5B6875` on `#2C3750` | 2.08:1 | 3 and 4.5 | An essential border or a readable label on the dark card |
| `#A3AEB9` on `#FFFFFF` | 2.26:1 | 4.5 and 3 | Readable text or an essential edge on white |
| `#A3AEB9` on `#E3E9EE` | 1.84:1 | 4.5 and 3 | A disabled label that must be read |
| `#F1F5F9` on `#78A6FF` | 2.20:1 | 3 | A focus ring drawn on the dark primary fill. Offset the ring onto the card. |
| `#2C3750` on `#101B35` | 1.44:1 | 3 | The only edge of a card. Use `color.border.strong`. |
| `#163E95` on `#2C3750` | 1.22:1 | 3 | The only edge of a selected row. Use a border plus a non-color cue. |
| `#AE7C1E` on `#FFFFFF` | 3.68:1 | 4.5 (passes 3) | Normal warning text |

Inactive disabled pairs are listed because they fail as readable text. They are the disabled colors in section 7, under the inactive-component exception, and they are not a permission signal.

---

## 10. Usage rules and anti-patterns

Rules:

1. Once role tokens exist, product UI uses those tokens. A one-off hex in a component is a local exception under design-system.md section 15, not a new brand color.
2. Palette steps feed role tokens. Screens do not paint `color.brand.400` directly when a role token already names the job.
3. Accent is a short highlight: a short label, a chart series, a small mark. The primary action stays `color.interactive.primary`.
4. Status always has text or an icon with the color.
5. Danger uses the danger tokens. The primary blue is the action color.
6. Disabled styling sits on top of an inactive control. The reason the control is unavailable is available in text when the person needs it.
7. A disabled or hidden control is not authorization. Frontend visibility is not backend authorization.
8. Light and dark assign different values to the same names. A component does not fork a second color name per theme.
9. White cards on the light page, and navy-family cards on the dark page, are not a 3:1 boundary by themselves. An edge that is the only sign of the control uses `color.border.strong`.
10. The bright accent `#06B6D4` and the bright amber `#EAAA36` are dark-theme colors for the uses in section 6. On white and on `#F1F5F9` they fail both contrast targets.

Anti-patterns:

- Raw hex in Website, Admin, Builder, or Storefront UI after tokens exist.
- Panel-login indigo and violet (`#4F46E5`, `#6366F1`, `#7C3AED`, and the login gradient) in Website, Admin, Builder, or Storefront brand UI.
- Treating the panel-login palette as the Joorweb brand.
- Using accent as a second primary button on every screen.
- Using primary blue for danger, error, or destructive confirmation.
- Using `#06B6D4` or `#EAAA36` as text or as the only control edge on white or on the light page.
- Using a disabled color as the only sign that an action is forbidden.
- Communicating selection, focus, or status by color alone.
- Inventing a tenant-specific color name. An allowed override changes a value.
- Mapping these tokens onto Tailwind keys before that mapping is approved. The mapping stays Open.

---

## 11. Historical reference: panel-login palette

**Established for the panel login only.** This section is a historical record. It is not the Joorweb brand, not a token, and not a candidate for the global token set. design-system.md already excludes it from the theme model. The preferred name is “panel-login palette.”

The hexes below are the ones the docs actually record, in frontend-architecture.md section 2.5 and the terminology audit. CSS comments do not add further documented swatches. Application CSS is not a source for this brand system. Hexes that appear only in CSS are not copied into the scales above.

| Surface | Hex | Where the docs record it |
|---|---|---|
| Page | `#F5F6FA` | frontend-architecture.md §2.5 |
| Card | `#FFFFFF` | frontend-architecture.md §2.5 |
| Text | `#1E293B` | frontend-architecture.md §2.5 |
| Gradient | `#6366F1` → `#4F46E5` → `#7C3AED` | frontend-architecture.md §2.5 |

The gradient colors are login-only. They are not steps in the brand scale, the accent scale, the neutral scale, or any semantic scale.

Shared neutrals, and only these:

- `#FFFFFF` is the documented login card and the approved white surface. It is a neutral surface value shared by a light UI. It does not adopt the login brand.
- `#F1F5F9` is the approved light background. The documented login page is `#F5F6FA`, a different hex. `#F1F5F9` also appears as a fill in login-related application CSS. That CSS is not part of the documented palette and is not imported here. The shared hex is a light neutral surface, not the indigo login brand.

---

## 12. Decision index

### Established

- The five direction colors: `#101B35`, `#2563EB`, `#06B6D4`, `#F1F5F9`, `#FFFFFF`.
- Navy is the deep brand anchor in that direction. It is not the action blue. Step 600 of the primary ramp is the approved `#2563EB`.
- The panel-login palette in section 11, limited to that login.
- The token name shape `{category}.{role}.{modifier}` from design-system.md.
- The contrast target is WCAG 2.2 AA. This file does not claim conformance.
- The system must be able to represent light and dark. That requirement is already in design-system.md.

### Proposed

- Brand steps other than the exact `#2563EB` anchor, and the choice of step 600 as the slot.
- The neutral ramp other than the exact white and `#F1F5F9` anchors.
- The accent scale, including step 500 as the slot for `#06B6D4`.
- Success, warning, danger, and info hues and scales.
- Placing navy in `color.brand.navy` rather than on the primary ramp. Step 950 stays `#112349`.
- Every light-theme and dark-theme role mapping.
- The extra role words `accent`, `neutral`, `background`, `interactive`, and `disabled`.
- Disabled colors and the muted-text limit.

### Open

- Whether light and dark both ship, and which mode is the default. design-system.md §§12 and 16.
- Token prefix, file format, and Tailwind mapping. design-system.md §§4 and 16.
- Token package implementation. Architecture names `packages/design-tokens` and leaves format and theme wiring unresolved.
- Final acceptance of every Proposed value. design-system.md §16 still lists final color values as unresolved.
- The white-label allowlist and how an organization override is stored. design-system.md §16.
- Shadow, elevation numbers, spacing, and other non-color tokens.
